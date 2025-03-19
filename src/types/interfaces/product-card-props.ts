export interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  discount?: number;
  category?: string;
  url: string;
}
