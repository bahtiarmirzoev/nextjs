export interface ProductCardProps {
  id: number
  category: string
  name: string
  description: string
  price: number
  image: string
  discount?: number
  url: string
}