'use client';

import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Hero from '@/components/hero';
import Toolkit from '@/components/toolkit';

export default function Home() {
  /* Render */
  return (
    <main>
      <Hero />
      <Experience />
      <Toolkit />
      <Contact />
    </main>
  );
}
