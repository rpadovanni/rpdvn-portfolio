import { Archivo as FontSans } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-sans',
});
