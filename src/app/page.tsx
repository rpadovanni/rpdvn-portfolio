import About from '@/components/about';
import Footer from '@/components/footer';
import MainHeader from '@/components/main-header';
import Portfolio from '@/components/portfolio';

const Home = () => {
	return (
		<main className="flex-col justify-center">
			<MainHeader />
			<Portfolio />
			<About />
			<Footer />
		</main>
	);
};

export default Home;
