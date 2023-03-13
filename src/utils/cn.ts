import type { ClassValue as ClassValueBase } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export type ClassValue = ClassValueBase;

export const cn = (...values: ClassValue[]) => {
  return twMerge(clsx(values));
};
