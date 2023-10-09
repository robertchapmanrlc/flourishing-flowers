import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import { Card, Product } from "../../types";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function sortMin(a: Card, b: Card) {
  return Number(a.price) - Number(b.price);
}
export function sortMax(a: Card, b: Card) {
  return Number(b.price) - Number(a.price);
}

export function sortDates(a: Card, b: Card) {
  return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
}

export function sortProducts(a: Product, b: Product) {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
}
