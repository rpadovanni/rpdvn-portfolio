import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const About = () => {
	return (
		<section className="flex-col bg-slate-200 p-8">
			<h2>About</h2>

			<p className="text-pretty py-4 text-gray-600">
				Lorem ingum dolor sit amet. concectetur adipiscina elit. Nunc maximus, nulla ut
				commodo sagitie, sapien dui
			</p>

			<p className="text-pretty pb-8 text-gray-600">
				Lorem ipsum dolor sit amet, consectetur adipiscing ellt. Nunc maximus, nulla ut
			</p>

			<Button>Download CV</Button>

			<section className="flex w-full flex-col items-center pb-2 pt-12">
				<Avatar className="mb-10 h-44 w-44">
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>

				<section className="flex flex-col text-center">
					<h3>Setup</h3>
					<a href="http://" target="_blank" rel="noopener noreferrer">
						Lorem ipsum
					</a>
					<a href="http://" target="_blank" rel="noopener noreferrer">
						Lorem ipsum
					</a>
					<a href="http://" target="_blank" rel="noopener noreferrer">
						Lorem ipsum
					</a>
					<a href="http://" target="_blank" rel="noopener noreferrer">
						Lorem ipsum
					</a>

					<h3>My links</h3>
					<a href="http://" target="_blank" rel="noopener noreferrer">
						Lorem ipsum
					</a>
					<a href="http://" target="_blank" rel="noopener noreferrer">
						Lorem ipsum
					</a>
					<a href="http://" target="_blank" rel="noopener noreferrer">
						Lorem ipsum
					</a>
					<a href="http://" target="_blank" rel="noopener noreferrer">
						Lorem ipsum
					</a>
				</section>

				<h4 className="flex w-full text-pretty pt-14 text-center font-bold leading-5">
					Any suggestion, tip or need to know better? Let's have a chat!
				</h4>
			</section>
		</section>
	);
};

export default About;
