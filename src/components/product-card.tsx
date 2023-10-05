interface ProductCardProps {
  card: {
    image_url: string;
    name: string;
    category: string;
    price: string;
  };
}

function ProductCard({ card }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-h-1 aspect-w-1 w-[200px] md:w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none transition ease-in-out group-hover:opacity-75 lg:max-h-100 xl:max-h-140">
        <img
          src={`${card.image_url}`}
          alt="Picture of flower"
          className="object-cover object-center lg:h-full lg:w-full"
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
  );
}

export default ProductCard;
