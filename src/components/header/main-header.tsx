import FontSizing from '@/components/header/font-sizing';
import MainMenu from '@/components/header/main-menu';
import ThemeToggle from '@/components/header/theme-toggle';

const MainHeader = () => {
  return (
    <header className="fixed left-4 top-4 z-10 flex w-[calc(100%-2rem)] items-center justify-between rounded-full border-white border-opacity-40 bg-white bg-opacity-20 px-6 py-4 shadow-glass-shadow backdrop-blur-sm">
      <div className="flex">
        <ThemeToggle />
        <FontSizing />
      </div>

      <MainMenu />
    </header>
  );
};

export default MainHeader;
