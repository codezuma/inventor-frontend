import cx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...args: string[]) => {
	return twMerge(cx(...args));
};
