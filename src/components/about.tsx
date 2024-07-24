import { MailIcon, MessageCircleMore } from 'lucide-react';
import { GitHubLogoIcon, LinkedInLogoIcon, OpenInNewWindowIcon } from '@radix-ui/react-icons';

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

			<a href="/rafael-padovani-cv.pdf" target="_blank" rel="noopener noreferrer">
				<Button>
					Open CV <OpenInNewWindowIcon className="ml-2" />
				</Button>
			</a>

			<section className="flex w-full flex-col items-center pb-2 pt-12">
				<Avatar className="mb-10 h-44 w-44">
					<AvatarImage src="https://avatars.githubusercontent.com/u/8856492?v=4" />
					<AvatarFallback>Loading picture...</AvatarFallback>
				</Avatar>

				<section className="flex flex-col text-center">
					<h3>Setup</h3>
					<aside className="pb-6 pt-2 text-sm">
						<span>MacBook Air 13" M2 16GB</span>
						<br />
						<span>Asus TUF Gaming 27 Monitor</span>
						<br />
						<span>Redragon Kumara PRO Keyboard</span>
						<br />
						<span className="mb-6">Logitech G305 Mouse</span>
					</aside>

					<h3>My links</h3>

					<h4 className="w-full flex-col text-balance pt-2 text-center leading-6">
						<span className="">Any suggestion, tip or need to know better?</span>
						<br />
						<span className="text-xl font-bold">Let's have a chat!</span>
					</h4>

					<nav className="flex w-full justify-around px-10 py-6 text-gray-600">
						<a href="https://github.com/rpadovanni" target="_blank">
							<GitHubLogoIcon className="h-6 w-6" />
						</a>
						<a href="https://www.linkedin.com/in/rpadovanni/" target="_blank">
							<LinkedInLogoIcon className="h-6 w-6" />
						</a>
						<a href="mailto:rafael.pdvn@gmail.com" target="_blank">
							<MailIcon className="h-6 w-10" />
						</a>
						<a
							href="https://wa.me/5511944606168?text=Hi,%20Rafael!%20I%20came%20through%20your%20website."
							target="_blank"
						>
							<MessageCircleMore className="h-6 w-6" />
						</a>
					</nav>
				</section>
			</section>
		</section>
	);
};

export default About;
