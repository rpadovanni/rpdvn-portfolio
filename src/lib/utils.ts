import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const copyValueOnClick = (value: string) => {
	const textField = document.createElement('textarea');
	textField.innerText = value;
	document.body.appendChild(textField);
	textField.select();
	document.execCommand('copy');
	textField.remove();
};
