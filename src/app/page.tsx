export default function Main() {
  return (
    <main className="w-full flex flex-col items-center">
      <div
        className="w-full h-96 bg-center bg-cover"
        style={{ backgroundImage: `url(/Banner1.webp)` }}
      >
        <div className="h-full relative flex flex-col items-center justify-center">
          <h2 className="font-pokova text-6xl">Flowers</h2>
          <h5 className="text-center font-pokova text-2xl text-black/50">
            Discover the most exquisite blooms for nearly every occasion.
          </h5>
          <button className="">Shop Now</button>
        </div>
      </div>
    </main>
  );
}
