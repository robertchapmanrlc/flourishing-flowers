
export type ColorVariants = {
    [key:string]: string
}

export interface Card {
    name: string;
    link: string;
    price: number;
    image_url: string;
    colors: Color[];
}

export interface Category {
    route: string;
    label: string;
    cards: Card[];
}

export interface Color {
    id: number;
    name: string;
    class: string;
    selectedClass: string;
}

export interface Product {
    id: number;
    name: string;
    urlName: string;
    description: string;
    price: number;
    imageUrl: string;
    createdAt: Date;
    colors: Color[];
}

export interface Order {
    name: string;
    category: string;
    imageUrl: string;
    price: number;
    color: string;
    quantity: number;
    product_id: number;
    created_at: string;
}
