interface ProductCardProps {
  card: {
    image_url: string;
    name: string;
    category: string;
    price: string
  };
}

function ProductCard({ card }: ProductCardProps) {
  return (
    <div className="cursor-pointer">
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src="src/assets/products/red-rose-bouquet.webp"
            alt="Rose Bouquet"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="font-lexend text-sm text-gray-700">{card.name}</h3>
            <p className="font-lexend mt-1 text-sm text-gray-500">
              {card.category}
            </p>
          </div>
          <p className="font-lexend text-sm font-medium text-gray-900">
            ${card.price}
          </p>
        </div>
      </div>
    </div>
  );
}



export default ProductCard;
