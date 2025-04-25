"use client";

import { Button } from "@/components/ui/button";
import useCardStore from "@/store/card-store";
import { ProductCardProps } from "@/types/interfaces/product-card-props";
import { MinusIcon, PlusIcon } from "lucide-react";

export default function QuantitySelector({ product }: ProductCardProps) {
  const {card, updateQuantity } = useCardStore();

//   not found cardItem

  const cardItem = card.find((item) => item.id === product.id);
  console.log("cardItem", cardItem);
  

  const quantity = cardItem ? cardItem.quantity : 1;

  const incrementQuantity = () => {
    if (cardItem) {
        
      // If item exists in cart, update its quantity
      updateQuantity(product.id, quantity + 1);

    } 
  };
  const decrementQuantity = () => {
    if (cardItem && quantity > 1) {
      updateQuantity( product.id, quantity - 1 );
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          className="rounded-r-none"
          onClick={decrementQuantity}
          disabled={!cardItem || quantity <= 1}
        >
          <MinusIcon className="w-4 h-4" />
        </Button>
        <span className="mx-3 min-w-8 text-center">{quantity}</span>
        <Button
          variant="outline"
          size="icon"
          className="rounded-l-none"
          onClick={incrementQuantity}
        >
          <PlusIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
