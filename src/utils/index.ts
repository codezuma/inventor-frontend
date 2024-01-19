import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export enum MobileSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export function getMobileSize(screenWidth: number): MobileSize {
  // Define breakpoints for different mobile sizes
  const smallBreakpoint = 600;
  const mediumBreakpoint = 900;

  // Determine the mobile size based on = screen width
  if (screenWidth < smallBreakpoint) {
    return MobileSize.SMALL;
  } else if (screenWidth < mediumBreakpoint) {
    return MobileSize.MEDIUM;
  } else {
    return MobileSize.LARGE;
  }
}

// Function to generate a grid based on mobile size
export function generateGrid(size: MobileSize): number {
  let numberOfColumns: number;

  // Determine the number of cells based on the mobile size
  switch (size) {
    case MobileSize.SMALL:
      numberOfColumns = 4;
      break;
    case MobileSize.MEDIUM:
      numberOfColumns = 8;
      break;
    case MobileSize.LARGE:
      numberOfColumns = 12;
      break;
    default:
      numberOfColumns = 0;
  }
  return numberOfColumns;
}
