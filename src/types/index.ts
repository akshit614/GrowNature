export interface Plant {
  id: number;
  name: string;
  category: 'indoor' | 'outdoor' | 'succulent';
  price: number;
  imageUrl: string;
  description: string;
  isFeatured?: boolean;
}

export interface CategoryType {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}