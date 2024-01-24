import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDateOneDayBeforeLastWeek() {
  const today = new Date();

  const lastWeek = new Date(today);
  lastWeek.setDate(today.getDate() - 7);
  lastWeek.setDate(lastWeek.getDate() - 1);

  return lastWeek;
}
