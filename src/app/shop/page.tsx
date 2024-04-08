import ProductCard from "@/components/product-card";
import SortMenu from "@/components/sort-menu";
import { getAllProducts } from "actions/get-products";


export default async function Shop() {

  const products = await getAllProducts();

  return (
    <main className="w-full px-4 md:px-8 lg:px-12 flex flex-col justify-start items-center py-6">
      <div className="w-full py-6 flex flex-row justify-between items-center border-b-2 border-gray-200">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-pokova tracking-tight text-gray-900">
          Search For Flowers
        </h1>
        <div className="flex items-center">
          <SortMenu />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="hidden lg:flex w-40 text-left">Menu</div>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-6 md:gap-y-10 md:gap-x-10 lg:grid-cols-3 xl:grid-cols-4">
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
