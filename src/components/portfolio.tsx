import PortfolioItem from './portfolio-item';

const Portfolio = () => {
	return (
		<section className="flex-col bg-slate-100 p-8">
			<h2>Portfolio</h2>

			<p className="text-pretty pb-12 pt-4 text-gray-600">
				Lorem ipsum dolor sit amet, consectetur adipiscina elit. Nunc maximus. nulla uti
				commodo sagittis, sapien dui mattis dui non pulvinar lorem telis nec erat
			</p>

			<PortfolioItem />
			<PortfolioItem />
		</section>
	);
};

export default Portfolio;
