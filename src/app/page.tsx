import Image from "next/image";

import { getAllProducts } from "actions/get-products";

export default async function Main() {
  const products = await getAllProducts();

  return (
    <main className="w-full flex flex-col items-center">
      <section
        className="w-full h-[600px] flex flex-col justify-center items-center bg-center bg-cover"
        style={{ backgroundImage: `url(/Banner1.webp)` }}
      >
        <div className="h-[200px] relative flex flex-col items-center">
          <h2 className="font-pokova text-6xl">Flowers</h2>
          <h5 className="text-center font-pokova text-2xl text-black/50">
            Discover the most exquisite blooms for nearly every occasion.
          </h5>
          <button className="mt-5 bg-primary py-2 px-4 rounded-lg text-white font-pokova text-xl hover:text-2xl transition-all">
            Shop Now
          </button>
        </div>
      </section>
      <section className="w-full py-10 flex flex-col items-center justify-center gap-y-10">
        <h3 className="font-pokova text-4xl">Best Sellers</h3>
        <div className="w-full px-10 flex justify-center gap-x-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={product.imageUrl}
                width={300}
                height={375}
                alt={product.name}
              />
              <div className="w-full px-5 flex flex-row justify-between items-center">
                <h5 className="font-pokova text-xl">{product.name}</h5>
                <h5 className="font-pokova text-xl">${product.price}</h5>
              </div>
            </div>
          ))}
        </div>
        <div className="h-12">
          <button className="bg-primary py-2 px-4 rounded-lg text-white font-pokova text-xl hover:text-2xl transition-all">
            Shop all
          </button>
        </div>
      </section>
      <section
        className="w-full h-[600px] flex items-center bg-center bg-cover"
        style={{ backgroundImage: `url(/Banner2.webp)` }}
      >
        <div className="h-[150px] pl-36 relative flex flex-col items-start">
          <h2 className="font-pokova text-6xl">Make It Magical</h2>
          <h5 className="text-center font-pokova text-2xl text-black/50">
            Anniversaries can be special with these flowers.
          </h5>
          <button className="mt-5 bg-primary py-2 px-4 rounded-lg text-white font-pokova text-xl hover:text-2xl transition-all">
            Shop Now
          </button>
        </div>
      </section>
      <section className="w-full py-10 flex flex-col items-center justify-center">
        <div className="w-full h-14 px-16 flex justify-between items-center">
          <h3 className="font-pokova text-4xl">Shop by Occasion</h3>
          <button className="bg-primary py-2 px-4 rounded-lg text-white font-pokova text-xl hover:text-2xl transition-all">
            Browse all occasions
          </button>
        </div>
        <div className="w-full flex justify-center gap-x-12">
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
