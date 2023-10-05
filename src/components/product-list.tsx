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
    <>
      <h2 className="text-2xl font-lexend font-bold tracking-tight text-gray-900">
        {content.label}
      </h2>
      <div className="mt-3 flex overflow-x-auto gap-x-4 md:grid md:gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {content.cards.map((card, i) => (
          <ProductCard key={i} card={card} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
