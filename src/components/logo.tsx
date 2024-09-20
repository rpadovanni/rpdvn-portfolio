'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

interface Props {
  t: (key: string) => string;
}

const Logo = ({ t }: Props) => {
  /* Hooks */
  const { theme } = useTheme();

  /* Constants */
  const logo =
    theme === 'dark' || typeof theme === 'undefined'
      ? '/logo-dark-theme.png'
      : '/logo-light-theme.png';

  /* Render */
  return (
    <div>
      <Image
        alt="Logo image saying beyond front labs by Rafael Padovani"
        src={logo}
        width={200}
        height={40}
      />
    </div>
  );
};

export default Logo;
