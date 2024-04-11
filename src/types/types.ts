export type ColorVariants = {
  [key: string]: string;
};

export interface FilterType {
  name: string;
  options: {
    label: string;
    urlLabel: string;
  }[];
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
  images: Image[];
  createdAt: Date;
  colors: Color[];
}

export interface Image {
  id: number;
  imageUrl: string;
  productId: number;
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
