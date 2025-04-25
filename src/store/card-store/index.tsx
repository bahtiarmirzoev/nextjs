import { create } from "zustand";
import { ProductCardProps } from "@/types/interfaces/product-card-props";

interface CardStore {
  card: ProductCardProps[];
  updateQuantity: (id: number, quantity: number) => void;
}

const useCardStore = create<CardStore>((set) => ({
  card: [],
  updateQuantity: (id: number, quantity: number) =>
    set((state) => ({
      card: state.card.map((item) =>
        item.id === id ? { ...item, quantity } : item
        
      
      ),
    })),
}));

export default useCardStore;
