import { Card } from "../../types";
import ProductCard from "../components/product-card";

interface WeddingProps {
  cards: Card[];
}

function Wedding({ cards }: WeddingProps) {
  return (
    <div className="lg:px-32 md:px-16 px-4 lg:py-8 md:py-4 py-2 flex flex-col justify-start items-center gap-y-4 md:gap-y-10">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {cards.map((card) => (
          <ProductCard card={card} />
        ))}
      </div>
    </div>
  );
}

export default Wedding;
