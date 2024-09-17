import PortfolioItem from './portfolio-item';

const Portfolio = () => {
  return (
    <section className="flex-col bg-slate-100 px-6 py-8">
      <h2>Some things I've built</h2>

      <PortfolioItem />
      {/* <PortfolioItem /> */}
    </section>
  );
};

export default Portfolio;
