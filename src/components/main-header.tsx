import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from '@/components/ui/menubar';
import { Switch } from '@/components/ui/switch';

const MainHeader = () => {
	return (
		<section className="flex h-screen w-screen flex-col bg-gray-300 p-4">
			<header className="flex w-full items-center justify-between bg-white p-4">
				<div>
					<Switch />
				</div>
				<div>fonte</div>
				<div>
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
				</div>
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