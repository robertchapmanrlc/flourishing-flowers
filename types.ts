
export interface Card {
    image_url: string;
    name: string;
    category: string;
    price: string;
    product_id: number;
}

export interface Category {
    route: string;
    label: string;
    cards: Card[];
}
