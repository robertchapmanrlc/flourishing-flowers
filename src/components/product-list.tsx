import ProductCard from "./product-card";

interface ProductListProps {
  content: {
    label: string;
    cards: {
      image_url: string;
      name: string;
      category: string;
      price: string;
    }[];
  };
}

function ProductList({ content }: ProductListProps) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-lexend font-bold tracking-tight text-gray-900">
        {content.label}
      </h2>
      <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {content.cards.map((card, i) => (
          <ProductCard key={i} card={card} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
