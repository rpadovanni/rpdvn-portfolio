import { GitHubLogoIcon, OpenInNewWindowIcon } from '@radix-ui/react-icons';

const PortfolioItem = () => {
	return (
		<div className="my-10 flex flex-col border border-blue-600 bg-transparent bg-white bg-opacity-10 px-4 py-6">
			<div className="flex items-center justify-between text-lg font-semibold">
				<span>Spotify Profile</span>
				<div className="flex gap-3">
					<OpenInNewWindowIcon className="ml-2 h-6 w-6" />
					<GitHubLogoIcon className="h-6 w-6" />
				</div>
			</div>

			<span className="mb-2 mt-6">
				A web app for visualizing personalized Spotify data. View your top artists, top
				tracks, recently played tracks, and detailed audio information about each track.
				Create and save new playlists of recommended tracks based on your existing playlists
				and more.
			</span>

			<ul className="my-4 flex flex-wrap text-sm">
				<li className="mr-4">React</li>
				<li className="mr-4">TypeScript</li>
				<li className="mr-4">Spotify API</li>
				<li className="mr-4">D3.js</li>
				<li className="mr-4">Tailwind CSS</li>
			</ul>
		</div>
	);
};

export default PortfolioItem;
