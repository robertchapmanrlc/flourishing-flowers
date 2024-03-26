import Image from "next/image";

export default function Main() {
  return (
    <main className="w-full flex flex-col items-center">
      <section
        className="w-full h-[600px] bg-center bg-cover"
        style={{ backgroundImage: `url(/Banner1.webp)` }}
      >
        <div className="h-full relative flex flex-col items-center justify-center">
          <h2 className="font-pokova text-6xl">Flowers</h2>
          <h5 className="text-center font-pokova text-2xl text-black/50">
            Discover the most exquisite blooms for nearly every occasion.
          </h5>
          <button className="mt-5 bg-primary py-2 px-4 rounded-lg text-white font-pokova text-3xl">
            Shop Now
          </button>
        </div>
      </section>
      <section className="w-full py-10 flex flex-col items-center justify-center gap-y-10">
        <h3 className="font-pokova text-4xl">Best Sellers</h3>
        <div className="w-full flex justify-center gap-x-16">
          <div className="flex flex-col items-center">
            <Image
              src="/products/pink-daisy-plant.png"
              alt="Pink Daisy Plant"
              width={250}
              height={250}
            />
            <h5 className="font-pokova text-2xl">Birthdays</h5>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/products/red-rose-bouquet.webp"
              alt="Red Rose Bouquet"
              width={250}
              height={250}
            />
            <h5 className="font-pokova text-2xl">Weddings</h5>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/products/yellow-rose-plant.png"
              alt="Yellow Rose Plant"
              width={250}
              height={250}
            />
            <h5 className="font-pokova text-2xl">Get Well</h5>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/products/pink-rose-plant.png"
              alt="Pink Rose Plant"
              width={250}
              height={250}
            />
            <h5 className="font-pokova text-2xl">Housewarming</h5>
          </div>
        </div>
        <button className="mt-5 bg-primary py-2 px-4 rounded-lg text-white font-pokova text-3xl">
          Shop all
        </button>
      </section>
      <section
        className="w-full h-[600px] bg-center bg-cover"
        style={{ backgroundImage: `url(/Banner2.webp)` }}
      >
        <div className="h-full pl-36 relative flex flex-col items-start justify-center">
          <h2 className="font-pokova text-6xl">Make It Magical</h2>
          <h5 className="text-center font-pokova text-2xl text-black/50">
            Anniversaries can be special with these flowers.
          </h5>
          <button className="mt-5 bg-primary py-2 px-4 rounded-lg text-white font-pokova text-3xl">
            Shop Now
          </button>
        </div>
      </section>
      <section className="w-full py-10 flex flex-col items-center justify-center gap-y-10">
        <div className="w-full px-16 flex justify-between items-center">
          <h3 className="font-pokova text-4xl">Shop by Occasion</h3>
          <button className="mt-5 bg-primary py-2 px-4 rounded-lg text-white font-pokova text-3xl">
            Browse all occasions
          </button>
        </div>
        <div className="w-full flex justify-center gap-x-16">
          <div className="flex flex-col items-center">
            <Image
              src="/products/pink-daisy-plant.png"
              alt="Pink Daisy Plant"
              width={250}
              height={250}
            />
            <h5 className="font-pokova text-2xl">Birthdays</h5>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/products/red-rose-bouquet.webp"
              alt="Red Rose Bouquet"
              width={250}
              height={250}
            />
            <h5 className="font-pokova text-2xl">Weddings</h5>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/products/yellow-rose-plant.png"
              alt="Yellow Rose Plant"
              width={250}
              height={250}
            />
            <h5 className="font-pokova text-2xl">Get Well</h5>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/products/pink-rose-plant.png"
              alt="Pink Rose Plant"
              width={250}
              height={250}
            />
            <h5 className="font-pokova text-2xl">Housewarming</h5>
          </div>
        </div>
      </section>
    </main>
  );
}
