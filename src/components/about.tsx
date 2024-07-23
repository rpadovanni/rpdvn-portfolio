import { MailIcon, MessageCircleMore } from 'lucide-react';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const About = () => {
	return (
		<section className="flex-col bg-white p-8">
			<h2>About</h2>

			<p className="text-pretty py-4 text-gray-600">
				I'm a Senior Front-End Engineer who's been getting my hands dirty with all sorts of
				cool projects for over a decade.
			</p>

			<p className="text-pretty pb-8 text-gray-600">
				I specialize in building projects from the ground up, from initial sketches to
				production deployment. I've led teams, optimized performance, implemented responsive
				designs, and architected visually stunning user interfaces that enhance user
				experience.
			</p>

			<Button>Open CV</Button>

			<section className="flex w-full flex-col items-center pb-2 pt-12">
				<Avatar className="mb-10 h-44 w-44">
					<AvatarImage src="https://avatars.githubusercontent.com/u/8856492?v=4" />
					<AvatarFallback>Loading picture...</AvatarFallback>
				</Avatar>

				<section className="flex flex-col text-center">
					<h3>Setup</h3>
					<aside className="py-4">
						<span>MacBook Air 13" M2 16GB</span>
						<br />
						<span>Asus TUF Gaming 27 Monitor</span>
						<br />
						<span>Redragon Kumara PRO Keyboard</span>
						<br />
						<span className="mb-6">Logitech G305 Mouse</span>
					</aside>

					<h3>My links</h3>
					<nav className="flex w-full justify-around p-4 text-gray-600">
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
					</nav>
				</section>

				<h4 className="flex w-full text-pretty pt-10 text-center font-bold leading-5">
					Any suggestion, tip or need to know better? Let's have a chat!
				</h4>
			</section>
		</section>
	);
};

export default About;
