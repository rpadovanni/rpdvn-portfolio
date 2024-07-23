import About from '@/components/about';
import Footer from '@/components/footer';
import MainHeader from '@/components/header/main-header';
import Hero from '@/components/hero';
import Portfolio from '@/components/portfolio';

const Home = () => {
	return (
		<main className="flex-col justify-center">
			<Hero>
				<MainHeader />
			</Hero>

			<Portfolio />
			<About />
			<Footer />
		</main>
	);
};

export default Home;
