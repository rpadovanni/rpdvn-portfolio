'use client';

import { AArrowDownIcon, AArrowUpIcon } from 'lucide-react';
import { Button } from './ui/button';

const FontSizing = () => {
	return (
		<aside className="flex">
			<Button variant="outline" size="icon" className="mr-1">
				<AArrowDownIcon size={18} />
			</Button>

			<Button variant="outline" size="icon">
				<AArrowUpIcon size={20} />
			</Button>
		</aside>
	);
};

export default FontSizing;
