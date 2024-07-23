'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import FontSizing from './font-sizing';
import MainMenu from './main-menu';
import ThemeToggle from './theme-toggle';
import { CopyIcon, DoubleArrowDownIcon, PaperPlaneIcon } from '@radix-ui/react-icons';

const MainHeader = () => {
	return (
		<section className="flex h-screen w-screen flex-col bg-gray-400 p-4">
			<header className="flex w-full items-center justify-between rounded-full border-white border-opacity-40 bg-white bg-opacity-30 px-6 py-4 shadow-glass-shadow backdrop-blur-md backdrop-filter">
				<div className="flex">
					<ThemeToggle />
					<FontSizing />
				</div>

				<MainMenu />
			</header>

			<section className="flex h-full w-full flex-col items-center justify-evenly p-4 py-8 text-center">
				<div className="rounded-full border-white bg-white bg-opacity-50 p-2 shadow-glass-shadow backdrop-blur-md backdrop-filter">
					<Avatar className="h-32 w-32 shadow-glass-shadow">
						<AvatarImage src="https://avatars.githubusercontent.com/u/8856492?v=4" />
						<AvatarFallback>Loading picture...</AvatarFallback>
					</Avatar>
				</div>

				<section>
					<h1 className="text-2xl font-semibold text-gray-500">Hi I'm Rafael.</h1>
					A Senior Frontend Engineer crafting modern, user-friendly and performant web
					applications.
					<br />
					Let's talk your next project?
				</section>

				<section className="mt-10">
					<label htmlFor="email" className="text-sm">
						You can copy my email below or open your default mailing app.
					</label>
					<div className="my-2 flex w-full max-w-sm items-center space-x-2">
						<Input
							name="email"
							type="email"
							className="bg-white"
							value="rafael.pdvn@gmail.com"
							disabled
						/>

						<aside className="flex space-x-1">
							<Button type="button">
								<CopyIcon className="h-3 w-3" />
							</Button>

							<Button type="button">
								<PaperPlaneIcon className="h-3 w-3" />
							</Button>
						</aside>
					</div>
				</section>
			</section>

			<p className="flex w-full animate-pulse-down items-center justify-center opacity-50">
				<DoubleArrowDownIcon className="h-6 w-6" />
			</p>
		</section>
	);
};

export default MainHeader;
