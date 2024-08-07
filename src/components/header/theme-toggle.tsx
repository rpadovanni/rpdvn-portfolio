'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
	return (
		<Button variant="outline" size="icon" className="mr-2 h-8 w-8">
			<SunIcon className="h-4 w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
};

export default ThemeToggle;
