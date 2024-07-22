'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import FontSizing from './font-sizing';
import MainMenu from './main-menu';
import ThemeToggle from './theme-toggle';

const MainHeader = () => {
	return (
		<section className="flex h-screen w-screen flex-col bg-gray-300 p-4">
			<header className="shadow-glass-shadow flex w-full items-center justify-between rounded-full border-white border-opacity-25 bg-white bg-opacity-30 px-6 py-4 backdrop-blur-lg backdrop-filter">
				<div className="flex">
					<ThemeToggle />
					<FontSizing />
				</div>

				<MainMenu />
			</header>

			<section className="flex h-full w-full flex-col items-center justify-evenly p-4 text-center">
				<Avatar className="h-36 w-36">
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscina elit. Nunc maximus, nulla ut
					commodo sagittis, sapien dui mattis dui, non pulvinar lor em felis nec erat
				</p>

				<section>
					<p>Lorem ipsum dolor sit amet</p>
					<div className="my-8 flex w-full max-w-sm items-center space-x-2">
						<Input type="email" placeholder="Email" className="bg-white" />
						<Button type="submit">Subscribe</Button>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscina elit.</p>
				</section>
			</section>
		</section>
	);
};

export default MainHeader;
