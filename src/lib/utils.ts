import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function truncateText(text:string, maxLength:number) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength) + "...";
  }
}


export function formatToIDR(number:number) {
  return number.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR'
  });
}