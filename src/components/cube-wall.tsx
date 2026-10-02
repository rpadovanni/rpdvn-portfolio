'use client';

import { useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

/* Geometry: pointy-top hexagons, each split into the three visible faces of a cube */
const SIDE = 40;
const HEX_WIDTH = Math.sqrt(3) * SIDE;
const COLS = 10;
const ROWS = 9;
const WIDTH = HEX_WIDTH * (COLS + 0.5);
const HEIGHT = SIDE * (1.5 * (ROWS - 1) + 2);

const PHOTO_RADIUS = SIDE * 3;
const PHOTO_X = HEX_WIDTH * 6.5;
const PHOTO_Y = SIDE * 7;

/* Photo: an HTML image laid over the wall, so the browser can pick a file by screen size */
const PHOTO_SIZE = PHOTO_RADIUS * 2.4;
const PHOTO_BOX = { width: Math.sqrt(3) * PHOTO_RADIUS, height: PHOTO_RADIUS * 2 };
const PHOTO_WIDTHS = [512, 768, 1024];
// The image spans about 40% of the wall, and the wall's width follows the hero layout
const PHOTO_SIZES = '(min-width: 1024px) min(20vw, 342px), (min-width: 640px) 215px, 40vw';

const percent = (value: number) => `${(value * 100).toFixed(3)}%`;

/* Light: where it rests before the pointer moves, and how far it floats above the wall */
const LIGHT_REST = { x: WIDTH * 0.92, y: -SIDE * 2 };
const LIGHT_HEIGHT = SIDE * 3.5;

type Face = {
  points: string;
  x: number;
  y: number;
  nx: number;
  ny: number;
};

// Integer hash, so server and browser agree on which cubes are missing
const hash = (a: number, b: number, c: number) => {
  let h = (a * 374761393 + b * 668265263 + c * 2246822519) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
};

const insidePhoto = (x: number, y: number, radius: number) => {
  const dx = Math.abs(x - PHOTO_X);
  const dy = Math.abs(y - PHOTO_Y);
  return dx <= (Math.sqrt(3) / 2) * radius && dy <= radius - dx / Math.sqrt(3);
};

const toPoints = (corners: number[][]) =>
  corners.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(' ');

const buildFaces = () => {
  const faces: Face[] = [];
  const w = HEX_WIDTH / 2;
  const s = SIDE;

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cx = HEX_WIDTH * (col + 0.5 * (row % 2)) + w;
      const cy = 1.5 * s * row + s;

      // The wall is solid around the photo and thins out toward the text side
      const nearPhoto = insidePhoto(cx, cy, PHOTO_RADIUS + s * 3);
      const keepChance = Math.min(1, Math.max(0, (cx / WIDTH - 0.06) * 1.7));
      if (!nearPhoto && hash(col, row, 0) > keepChance) {
        continue;
      }

      const top = [cx, cy - s];
      const upperRight = [cx + w, cy - s / 2];
      const lowerRight = [cx + w, cy + s / 2];
      const bottom = [cx, cy + s];
      const lowerLeft = [cx - w, cy + s / 2];
      const upperLeft = [cx - w, cy - s / 2];
      const center = [cx, cy];

      const cube = [
        { corners: [top, upperRight, center, upperLeft], x: cx, y: cy - s / 2, nx: 0, ny: -1 },
        {
          corners: [upperLeft, center, bottom, lowerLeft],
          x: cx - w / 2,
          y: cy + s / 4,
          nx: -Math.sqrt(3) / 2,
          ny: 0.5,
        },
        {
          corners: [center, upperRight, lowerRight, bottom],
          x: cx + w / 2,
          y: cy + s / 4,
          nx: Math.sqrt(3) / 2,
          ny: 0.5,
        },
      ];

      cube.forEach(({ corners, x, y, nx, ny }) => {
        if (insidePhoto(x, y, PHOTO_RADIUS * 0.98)) {
          return;
        }
        faces.push({ points: toPoints(corners), x, y, nx, ny });
      });
    }
  }

  return faces;
};

const FACES = buildFaces();

const PHOTO_POINTS = toPoints(
  [-90, -30, 30, 90, 150, 210].map(angle => [
    PHOTO_X + PHOTO_RADIUS * Math.cos((angle * Math.PI) / 180),
    PHOTO_Y + PHOTO_RADIUS * Math.sin((angle * Math.PI) / 180),
  ]),
);

// How directly a face looks at the light, from 0 (turned away) to 1 (facing it)
const brightness = (face: Face, lightX: number, lightY: number) => {
  const dx = lightX - face.x;
  const dy = lightY - face.y;
  const length = Math.sqrt(dx * dx + dy * dy + LIGHT_HEIGHT * LIGHT_HEIGHT);
  const facing = (face.nx * dx * 0.8165 + face.ny * dy * 0.8165 + LIGHT_HEIGHT * 0.5774) / length;
  return Math.min(1, Math.max(0, (facing - 0.05) / 0.85)).toFixed(3);
};

interface Props {
  alt: string;
  className?: string;
}

const CubeWall = ({ alt, className }: Props) => {
  const wall = useRef<SVGSVGElement>(null);

  /* The pointer carries the light */
  useEffect(() => {
    const svg = wall.current;
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    const prefersStill = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!svg || !hasPointer || prefersStill) {
      return;
    }

    const polygons = Array.from(svg.querySelectorAll<SVGPolygonElement>('.cube-face'));
    let frame = 0;

    const handlePointerMove = ({ clientX, clientY }: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = svg.getBoundingClientRect();
        if (rect.bottom < 0 || rect.width === 0) {
          return;
        }

        const scale = WIDTH / rect.width;
        const lightX = (clientX - rect.left) * scale;
        const lightY = (clientY - rect.top) * scale;

        polygons.forEach((polygon, index) => {
          polygon.style.setProperty('--b', brightness(FACES[index], lightX, lightY));
        });
      });
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  /* Render */
  return (
    <div className={cn('relative', className)}>
      <svg
        ref={wall}
        viewBox={`0 0 ${WIDTH.toFixed(2)} ${HEIGHT}`}
        aria-hidden
        className="block h-auto w-full"
      >
        {FACES.map(face => (
          <polygon
            key={face.points}
            className="cube-face"
            points={face.points}
            style={{ '--b': brightness(face, LIGHT_REST.x, LIGHT_REST.y) } as React.CSSProperties}
          />
        ))}

        {/* Only the outer half of this outline shows around the photo */}
        <polygon points={PHOTO_POINTS} fill="none" stroke="var(--cube-line)" strokeWidth="6" />
      </svg>

      <div
        className="absolute overflow-hidden [clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)]"
        style={{
          left: percent((PHOTO_X - PHOTO_BOX.width / 2) / WIDTH),
          top: percent((PHOTO_Y - PHOTO_BOX.height / 2) / HEIGHT),
          width: percent(PHOTO_BOX.width / WIDTH),
          height: percent(PHOTO_BOX.height / HEIGHT),
        }}
      >
        {/* Pre-sized files in /public, so a plain img with srcset instead of next/image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/perfil-768.webp"
          srcSet={PHOTO_WIDTHS.map(width => `/perfil-${width}.webp ${width}w`).join(', ')}
          sizes={PHOTO_SIZES}
          width={768}
          height={768}
          alt={alt}
          decoding="async"
          className="absolute top-0 aspect-square h-auto max-w-none"
          style={{
            left: percent((PHOTO_BOX.width / 2 - PHOTO_SIZE * 0.45) / PHOTO_BOX.width),
            width: percent(PHOTO_SIZE / PHOTO_BOX.width),
          }}
        />
      </div>
    </div>
  );
};

export default CubeWall;
