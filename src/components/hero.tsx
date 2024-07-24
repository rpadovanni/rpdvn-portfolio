import { CopyIcon, DoubleArrowDownIcon, PaperPlaneIcon } from '@radix-ui/react-icons';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type THeroProps = {
	children: React.ReactNode;
};

const Hero = ({ children }: THeroProps) => {
	return (
		<section className="background-lighten-effect flex h-full w-full flex-col p-4">
			{children}

			<section className="flex h-[calc(100vh_-_11rem)] w-full flex-col items-center justify-evenly p-4 py-8 text-center">
				<div className="rounded-full border-white bg-white bg-opacity-30 p-2 shadow-glass-shadow backdrop-blur-lg backdrop-filter">
					<Avatar className="h-32 w-32 shadow-glass-shadow">
						<AvatarImage src="https://avatars.githubusercontent.com/u/8856492?v=4" />
						<AvatarFallback>Loading picture...</AvatarFallback>
					</Avatar>
				</div>

				<section className="text-lg font-semibold text-gray-800">
					<h1 className="text-2xl text-yellow-600">
						Hi, I'm Rafael, a <br /> Senior Frontend Engineer{' '}
					</h1>
					crafting modern, user-friendly and performant web applications.
					<br />
					Let's talk your next project?
				</section>

				<section className="mt-10">
					<label htmlFor="email" className="text-sm font-light">
						copy my email / send me an email.
					</label>

					<div className="my-2 flex w-full max-w-sm items-center space-x-2">
						<Input
							name="email"
							type="email"
							className="border-gray-600 bg-white font-semibold text-black"
							value="rafael.pdvn@gmail.com"
							disabled
						/>

						<aside className="flex space-x-1">
							<Button
								title="Copy email"
								className="bg-yellow-500 text-black"
								type="button"
							>
								<CopyIcon className="h-4 w-4" />
							</Button>

							<Button
								title="Send email"
								type="button"
								className="bg-yellow-500 text-black"
							>
								<PaperPlaneIcon className="h-4 w-4" />
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

export default Hero;
