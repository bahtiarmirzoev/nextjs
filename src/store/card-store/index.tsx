import { create } from "zustand";
import { ProductCardProps } from "@/types/interfaces/product-card-props";

interface CardItem extends ProductCardProps {
  quantity: number;
}

interface CardStore {
  card: CardItem[];
  updateQuantity: (id: number, quantity: number) => void;
}

const useCardStore = create<CardStore>((set) => ({
  card: [],
  updateQuantity: (id: number, quantity: number) =>
    set((state) => {
      const existingItem = state.card.find((item) => item.id === id);
      if (existingItem) {
        return {
          card: state.card.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        };
      } else {
        return {
          card: [...state.card, { id, quantity } as CardItem],
        };
      }
    }),
}));

export default useCardStore;
