import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export default function formatDate(inputDateString: string) {
  const date = new Date(inputDateString)
  const day = date.getDate()
  const month = date.getMonth() + 1 // Adding 1 to get the correct month (zero-based index)
  const year = date.getFullYear()

  // Pad single-digit day or month with leading zero
  const formattedDay = day < 10 ? `0${day}` : day
  const formattedMonth = month < 10 ? `0${month}` : month

  return `${formattedDay}/${formattedMonth}/${year}`
}


export const formatStacks = (values: string[]) =>
  values.toString().replaceAll(',', ' • ')


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