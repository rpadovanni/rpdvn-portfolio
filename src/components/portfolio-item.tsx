import { CameraIcon } from '@radix-ui/react-icons';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { DiamondIcon } from 'lucide-react';

const PortfolioItem = () => {
	return (
		<Card className="my-4 flex items-center justify-between">
			<DiamondIcon className="h-20 w-20 pl-4" />

			<CardContent>
				<CardHeader className="px-0">
					<CardTitle>Portfolio Item</CardTitle>
				</CardHeader>

				<CardDescription>
					Lorem ipsum dolor sit amet nulla adipiscing elit. Nunc maximus, nec ut commodd
				</CardDescription>

				<CardFooter className="px-0 pb-0 pt-4">
					<CameraIcon className="h-6 w-6" />
				</CardFooter>
			</CardContent>
		</Card>
	);
};

export default PortfolioItem;
