import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Decimal from 'decimal.js';

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

const getRemainingTime = (estimate?: number, actual?: number) => {
  if (estimate == undefined || actual == undefined) {
    return {};
  }

  const remaining = new Decimal(estimate).minus(actual).toNumber();
  const percent = remaining * 100 / estimate;
  let type = 'success';

  if (percent <= 0) {
    type = 'critical';
  } else if (percent < 10) {
    type = 'error';
  } else if (percent < 20) {
    type = 'warning';
  }

  return { remaining, type };
};

export { getRemainingTime };