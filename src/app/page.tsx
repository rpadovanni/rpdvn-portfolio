'use client';

import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';
import ContentBlock from '@/components/layout/content-block';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/layout/icons';

export default function Home() {
  const { theme } = useTheme();
  const logo = theme === 'dark' ? '/logo-dark-theme.png' : '/logo-light-theme.png';

  return (
    <section className="flex h-screen flex-col">
      <div
        className="h-2/3 bg-gradient-to-br bg-contain md:order-1"
        style={{
          backgroundImage: 'url("./website-bg-transparent.png")',
          position: 'relative',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4EDDB] from-15% via-[#F4EDDB]/60 via-70% to-[#F4EDDB]/50 dark:from-[#222222] dark:via-[#292929]/85 dark:to-[#292929]/50">
          <ContentBlock>
            <div className="flex items-center justify-center">
              <div>
                <div className="">
                  <Image alt="" src={logo} width={200} height={40} />
                </div>

                <div className="my-10">
                  <p className="text-muted-foreground max-w-[700px] text-3xl font-semibold">
                    Hi, I'm <span className="text-[#DAAB03] dark:text-[#F0D695]">Rafael </span>!{' '}
                    <br />a{' '}
                    <span className="text-[#DAAB03] dark:text-[#FFCE00]">
                      Senior Frontend Engineer
                    </span>
                    <br />
                    crafting modern, user-friendly and performant web applications.
                  </p>
                </div>

                <div className="mb-10 mt-6">
                  <Link
                    href={'/RafaelPadovaniCV.pdf'}
                    target="_blank"
                    rel="noreferrer"
                    className={cn('mr-4', buttonVariants())}
                  >
                    Download CV
                  </Link>

                  <Link
                    href={siteConfig.links.projects}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({ variant: 'outline' })}
                  >
                    Some projects I've worked on
                  </Link>
                </div>
              </div>

              <div className="relative h-60 w-60 rounded-full border-6 border-[#DAAB03] shadow-border-light dark:border-[#F0D695] dark:shadow-border-dark">
                <Image
                  width={240}
                  height={240}
                  alt="A picture showing Rafael Padovani's face"
                  src="https://avatars.githubusercontent.com/u/8856492?v=4"
                  className="absolute inset-0 rounded-full object-cover"
                />
              </div>
            </div>
          </ContentBlock>
        </div>
      </div>

      <div className="h-1/3 bg-[#FFCE00] text-[#292929] md:order-3">
        <ContentBlock alignment="center">
          <span className="text-sm">send me a message</span>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Lets create something amazing together!
          </h1>
          <nav className="flex items-center space-x-1 px-8 py-1">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>

            <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>

            <Link href={siteConfig.links.email} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </div>
            </Link>
          </nav>
        </ContentBlock>
      </div>
    </section>
  );
}
