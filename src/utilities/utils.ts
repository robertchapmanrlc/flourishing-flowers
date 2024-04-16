import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import { Product } from "../types/types";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function sortMin(a: Product, b: Product) {
  return Number(a.price) - Number(b.price);
}
export function sortMax(a: Product, b: Product) {
  return Number(b.price) - Number(a.price);
}

export function sortProducts(a: Product, b: Product) {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
}
