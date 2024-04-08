import ProductCard from "@/components/product-card";
import { getAllProducts } from "actions/get-products";


export default async function Shop() {

  const products = await getAllProducts();

  return (
    <main className="w-full px-4 md:px-8 lg:px-12 flex flex-col justify-start items-center py-6">
      <h1 className="w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-pokova tracking-tight text-gray-900">
        Search For Flowers
      </h1>
      <div className="w-full flex items-center">
        <div className="hidden md:inline-block text-left">Menu</div>
        <ul className="grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              card={{
                name: product.name,
                link: product.urlName,
                price: product.price,
                image_url: product.imageUrl,
                colors: product.colors,
              }}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
