
export interface Card {
    image_url: string;
    name: string;
    category: string;
    price: string;
}

export interface Category {
    route: string;
    label: string;
    cards: Card[];
}
