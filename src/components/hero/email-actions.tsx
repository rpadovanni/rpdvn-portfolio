'use client';
import { MouseEvent, useState } from 'react';

import { CopyIcon, PaperPlaneIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { copyValueOnClick } from '@/lib/utils';

const EmailActions = () => {
	const [isTooltipVisible, setIsTooltipVisible] = useState(false);

	const handleCopyClick = (event: MouseEvent<HTMLButtonElement>) => {
		setIsTooltipVisible(true);

		copyValueOnClick('rafael.pdvn@gmail.com');

		setTimeout(() => {
			setIsTooltipVisible(false);
		}, 2000);
		event.currentTarget.blur();
	};

	return (
		<section className="mt-10">
			<label htmlFor="email" className="text-sm font-light">
				copy my email / send me an email.
			</label>

			<div className="my-2 flex w-full max-w-sm items-center space-x-2">
				<Input
					name="email"
					type="email"
					className="border-gray-600 bg-white font-semibold text-black"
					value="rafael.pdvn@gmail.com"
					disabled
				/>

				<aside className="flex space-x-1">
					<Button
						className="relative bg-yellow-500 text-black hover:bg-yellow-600"
						onClick={event => handleCopyClick(event)}
						title="Copy email"
						type="button"
					>
						<CopyIcon className="h-4 w-4" />

						{isTooltipVisible && (
							<div className="absolute -top-10 left-1/2 -translate-x-1/2 transform rounded-md bg-black px-3 py-1 text-white">
								Email Copied!
							</div>
						)}
					</Button>

					<Button title="Send email" type="button" className="bg-yellow-500 text-black">
						<PaperPlaneIcon className="h-4 w-4" />
					</Button>
				</aside>
			</div>
		</section>
	);
};

export default EmailActions;
