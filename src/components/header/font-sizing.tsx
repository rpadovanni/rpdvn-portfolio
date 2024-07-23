'use client';

import { AArrowDownIcon, AArrowUpIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FontSizing = () => {
	return (
		<aside className="flex">
			<Button variant="outline" size="icon" className="mr-1 h-8 w-8">
				<AArrowDownIcon size={18} />
			</Button>

			<Button variant="outline" size="icon" className="h-8 w-8">
				<AArrowUpIcon size={20} />
			</Button>
		</aside>
	);
};

export default FontSizing;
