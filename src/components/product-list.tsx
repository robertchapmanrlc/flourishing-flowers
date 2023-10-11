import ProductCard from "./product-card";
import { Card } from '../../types.ts'

interface ProductListProps {
  content: {
    label: string;
    cards: Card[];
  };
}

function ProductList({ content }: ProductListProps) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-lexend font-bold tracking-tight text-gray-900">
        {content.label}
      </h2>
      <div className="mt-3 flex justify-start items-center overflow-x-auto gap-x-4 md:grid md:gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {content.cards.map((card, i) => (
          <ProductCard key={i} card={card} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
