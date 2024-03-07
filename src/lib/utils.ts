import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFirstDayOfWeek(date: Date) {
  const tempDate = new Date(date);
  const day = tempDate.getDay();

  const diff = tempDate.getDate() - day + (
    day === 0 ? -6 : 1
  );

  return new Date(tempDate.setDate(diff));
}
