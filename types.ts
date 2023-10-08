
export interface Card {
    image_url: string;
    name: string;
    category: string;
    price: string;
    product_id: number;
    colors: Color[];
}

export interface Category {
    route: string;
    label: string;
    cards: Card[];
}

export interface Color {
    name: string;
    class: string;
    selectedClass: string;
}

export interface Product {
    name: string;
    image_url: string;
    price: string;
    category: string;
    product_id: number;
    colors: Color[];
    description: string;
}

export interface Order {
    name: string;
    image_url: string;
    price: string;
    color: string;
    quantity: number;
    product_id: number;
    created_at: string;
}
