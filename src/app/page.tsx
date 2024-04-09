import Image from "next/image";

import { getBestSellers } from "actions/get-products";
import ProductCard from "@/components/product-card";

export default async function Main() {
  const products = await getBestSellers();

  return (
    <main className="w-full flex flex-col items-center">
      <section
        className="w-full h-[600px] flex flex-col justify-center items-center bg-center bg-cover"
        style={{ backgroundImage: `url(/Banner1.webp)` }}
      >
        <div className="h-[200px] relative flex flex-col items-center">
          <h2 className="font-pokova text-4xl sm:text-5xl lg:text-6xl">
            Flowers
          </h2>
          <h5 className="text-center font-pokova text-xs sm:text-base lg:text-2xl text-black/50">
            Discover the most exquisite blooms for nearly every occasion.
          </h5>
          <button className="mt-5 bg-primary py-1 px-2 sm:py-2 sm:px-4 rounded-md lg:rounded-lg text-white font-pokova text-xs sm:text-base hover:text-base sm:hover:text-lg lg:text-xl lg:hover:text-2xl transition-all">
            Shop Now
          </button>
        </div>
      </section>
      <section className="w-full py-10 flex flex-col items-center justify-center gap-y-10">
        <h3 className="font-pokova text-4xl">Best Sellers</h3>
        <div className="w-full px-5 lg:px-12 grid grid-rows-2 grid-cols-2 lg:flex lg:justify-center gap-x-16 gap-y-12 lg:gap-y-0">
          {products.map((product) => (
            <ProductCard key={product.id} card={{name: product.name, link: product.urlName, price: product.price, image_url: product.imageUrl, colors: product.colors}}/>
          ))}
        </div>
        <div className="h-12">
          <button className="bg-primary py-1 px-2 sm:py-2 sm:px-4 rounded-md lg:rounded-lg text-white font-pokova text-xs sm:text-base hover:text-base sm:hover:text-lg lg:text-xl lg:hover:text-2xl transition-all">
            Shop all
          </button>
        </div>
      </section>
      <section
        className="w-full h-[600px] flex items-center bg-center bg-cover"
        style={{ backgroundImage: `url(/Banner2.webp)` }}
      >
        <div className="h-[150px] pl-8 md:pl-16 lg:pl-36 relative flex flex-col items-start">
          <h2 className="font-pokova text-4xl sm:text-5xl lg:text-6xl">
            Make It Magical
          </h2>
          <h5 className="text-center font-pokova text-base sm:text-xl lg:text-2xl text-black/50">
            Anniversaries can be special with these flowers.
          </h5>
          <button className="mt-5 bg-primary py-1 px-2 sm:py-2 sm:px-4 rounded-md lg:rounded-lg text-white font-pokova text-xs sm:text-base hover:text-base sm:hover:text-lg lg:text-xl lg:hover:text-2xl transition-all">
            Shop Now
          </button>
        </div>
      </section>
      <section className="w-full py-10 flex flex-col items-center justify-center">
        <div className="w-full h-14 px-4 md:px-8 lg:px-16 flex justify-between items-center">
          <h3 className="font-pokova text-2xl md:text-4xl lg:text-4xl">
            Shop by Occasion
          </h3>
          <button className="bg-primary py-1 px-2 sm:py-2 sm:px-4 rounded-md lg:rounded-lg text-white font-pokova text-xs sm:text-base hover:text-base sm:hover:text-lg lg:text-xl lg:hover:text-2xl transition-all">
            Browse all occasions
          </button>
        </div>
        <div className="w-full grid grid-rows-2 grid-cols-2 lg:flex lg:justify-center lg:gap-x-12">
          <div className="flex flex-col items-center">
            <Image
              src="https://i.ibb.co/PFG0FvX/pink-daisy-plant.webp"
              alt="Pink Daisy Plant"
              width={300}
              height={375}
            />
            <h5 className="font-pokova text-2xl">Birthdays</h5>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="https://i.ibb.co/s59dGm3/white-orchid-bouquet.webp"
              alt="Red Rose Bouquet"
              width={300}
              height={375}
            />
            <h5 className="font-pokova text-2xl">Weddings</h5>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="https://i.ibb.co/StyPXsn/yellow-rose-plant.webp"
              alt="Yellow Rose Plant"
              width={300}
              height={375}
            />
            <h5 className="font-pokova text-2xl">Get Well</h5>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="https://i.ibb.co/y5DSXTG/yellow-tulip-arrangement.webp"
              alt="Pink Rose Plant"
              width={300}
              height={375}
            />
            <h5 className="font-pokova text-2xl">Housewarming</h5>
          </div>
        </div>
      </section>
    </main>
  );
}
