export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  availability: number;
  description: string;
  category: string;
  bestRating: number;
}

export const entries: Product[] = [];
