import { useMemo } from 'react';

import { MailIcon, MessageCircleMore } from 'lucide-react';
import {
	Cross1Icon,
	GitHubLogoIcon,
	HamburgerMenuIcon,
	LinkedInLogoIcon,
} from '@radix-ui/react-icons';

import MenuItem from './menu-item';
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from '@/components/ui/menubar';

import { useMediaQuery } from '@/hooks/use-media-query';

const MainMenu = () => {
	const isDesktop = useMediaQuery('(min-width: 768px)');

	const renderMobileMenu = useMemo(
		() => (
			<Drawer direction="right">
				<DrawerTrigger>
					<HamburgerMenuIcon className="h-6 w-6" />
				</DrawerTrigger>

				<DrawerContent className="shadow-glass-shadow w-60 flex-col items-center rounded-l-full rounded-tl-full border-white border-opacity-25 bg-white bg-opacity-30 backdrop-blur-lg backdrop-filter">
					<header className="flex w-full justify-end pr-4 pt-6">
						<DrawerClose>
							<Cross1Icon className="h-7 w-7" />
						</DrawerClose>
					</header>

					<aside className="pt-40">
						<nav className="w-full flex-col text-center">
							<ul className="">
								<MenuItem>Home</MenuItem>
								<MenuItem>Portfolio</MenuItem>
								<MenuItem>About</MenuItem>
							</ul>
						</nav>
					</aside>

					<footer className="flex w-full justify-around px-6 py-12 text-gray-600">
						<a href="" target="_blank">
							<GitHubLogoIcon className="h-6 w-6" />
						</a>
						<a className="" href="" target="_blank">
							<LinkedInLogoIcon className="h-6 w-6" />
						</a>
						<a href="" target="_blank">
							<MailIcon className="h-6 w-10" />
						</a>
						<a href="" target="_blank">
							<MessageCircleMore className="h-6 w-6" />
						</a>
					</footer>
				</DrawerContent>
			</Drawer>
		),
		[],
	);

	const renderDesktopMenu = useMemo(
		() => (
			<Menubar>
				<MenubarMenu>
					<MenubarTrigger>File</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>
							New Tab <MenubarShortcut>⌘T</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>New Window</MenubarItem>
						<MenubarSeparator />
						<MenubarItem>Share</MenubarItem>
						<MenubarSeparator />
						<MenubarItem>Print</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		),
		[],
	);

	return isDesktop ? renderDesktopMenu : renderMobileMenu;
};

export default MainMenu;
