import Image from "next/image";

export default function Main() {
  return (
    <main className="w-full flex flex-col items-center">
      <section
        className="w-full h-96 bg-center bg-cover"
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
      <section>
        <h3>Best Sellers</h3>
        <div>
          <Image
            src="/products/pink-daisy-plant.png"
            alt="Pink Daisy Plant"
            width={250}
            height={250}
          />
          <h5>Birthdays</h5>
        </div>
        <div>
          <Image
            src="/products/red-rose-bouquet.webp"
            alt="Red Rose Bouquet"
            width={250}
            height={250}
          />
          <h5>Weddings</h5>
        </div>
        <div>
          <Image
            src="/products/yellow-rose-plant.png"
            alt="Yellow Rose Plant"
            width={250}
            height={250}
          />
          <h5>Get Well</h5>
        </div>
        <div>
          <Image
            src="/products/pink-rose-plant.png"
            alt="Pink Rose Plant"
            width={250}
            height={250}
          />
          <h5>Housewarming</h5>
        </div>
        <button className="mt-5 bg-primary py-2 px-4 rounded-lg text-white font-pokova text-3xl">
          Shop all
        </button>
      </section>
    </main>
  );
}
