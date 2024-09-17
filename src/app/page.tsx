import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';
import ContentBlock from '@/components/layout/content-block';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="flex h-screen flex-col">
      <div className="h-2/3 md:order-1">
        <ContentBlock>
          <div className="flex">
            <div>
              <div>
                <p className="text-muted-foreground max-w-[700px] text-3xl font-semibold">
                  Hi, I'm <span className="dark:text-[#F0D695]">Rafael </span>! <br />a{' '}
                  <span className="dark:text-[#FFCE00]">Senior Frontend Engineer</span>
                  <br />
                  crafting modern, user-friendly and performant web applications.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href={siteConfig.links.docs}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants()}
                >
                  Download CV
                </Link>
              </div>
            </div>
            <div className="relative h-40 w-40 rounded-full border-4 border-black">
              <Image
                fill
                alt="A picture showing Rafael Padovani's face"
                src="https://avatars.githubusercontent.com/u/8856492?v=4"
                className="absolute inset-0 rounded-full object-cover"
              />
            </div>

            <div className="flex overflow-hidden bg-slate-100">
              <svg
                viewBox="0 0 210 220"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <clipPath id="avatar">
                    <path
                      fill="#FFCE00"
                      d="M62.6,-38.2C71.9,-20,63.9,6.1,50.6,25.7C37.3,45.3,18.6,58.4,-0.8,58.8C-20.1,59.3,-40.3,47.1,-50.3,29.4C-60.4,11.6,-60.4,-11.6,-50.3,-30.2C-40.2,-48.9,-20.1,-62.9,3.3,-64.8C26.7,-66.7,53.3,-56.4,62.6,-38.2Z"
                      transform="translate(100 100)"
                    />
                  </clipPath>
                </defs>

                <image
                  width="320px"
                  height="100%"
                  xlinkHref="https://avatars.githubusercontent.com/u/8856492?v=4"
                  clipPath="url(#avatar)"
                />

                <path
                  fill="none"
                  d="M62.6,-38.2C71.9,-20,63.9,6.1,50.6,25.7C37.3,45.3,18.6,58.4,-0.8,58.8C-20.1,59.3,-40.3,47.1,-50.3,29.4C-60.4,11.6,-60.4,-11.6,-50.3,-30.2C-40.2,-48.9,-20.1,-62.9,3.3,-64.8C26.7,-66.7,53.3,-56.4,62.6,-38.2Z"
                  transform="translate(100 100)"
                  stroke="#FFCE00"
                  strokeWidth={4}
                />
              </svg>
            </div>
          </div>
        </ContentBlock>
      </div>

      {/* <div className="flex h-1/3 items-center justify-center md:order-2">
        <ContentBlock alignment="center">
          <div className="flex w-fit gap-4">
            <PortfolioCard
              description="aehuaehuehuaeh uuaehuhaeuha euahehue auaeh"
              imageUrl="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/08/learn-coding-online-for-free.webp"
              technologies={['react', 'typescript', 'next.js']}
              title="Linker"
            />

            <PortfolioCard
              description="aehuaehuehuaeh uuaehuhaeuha euahehue auaeh"
              imageUrl="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/08/learn-coding-online-for-free.webp"
              technologies={['react', 'typescript', 'next.js']}
              title="Linker"
            />

            <PortfolioCard
              description="aehuaehuehuaeh uuaehuhaeuha euahehue auaeh"
              imageUrl="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/08/learn-coding-online-for-free.webp"
              technologies={['react', 'typescript', 'next.js']}
              title="Linker"
            />
          </div>
        </ContentBlock>
      </div> */}

      <div className="h-1/3 dark:bg-[#FFCE00] dark:text-[#292929] md:order-3">
        <ContentBlock alignment="center">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Lets create something amazing together!
          </h1>
        </ContentBlock>
      </div>
    </section>
  );
}
