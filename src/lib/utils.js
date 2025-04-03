
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Tailwind CSS classes with clsx
 * @param {...any} inputs - Classes to combine
 * @returns {string} - Combined class string
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
