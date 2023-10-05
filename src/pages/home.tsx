import MainBillboard from "../components/main-billboard";
import MiniBillboard from "../components/mini-billboard";
import ProductCard from "../components/product-card";

const mini_billboard_items = [
  {
    image_url: "src/assets/banners/banner-2.jpg",
    label: "Wedding Bouquets"
  },
  {
    image_url: "src/assets/banners/banner-3.jpg",
    label: "Blooms for Celebration"
  }
];

const card = {
  image_url: 'src/assets/products/red-rose-bouquet.webp',
  name: 'Rose Bouquet',
  category: 'Bouquet',
  price: '2'
}

function Home() {
  return (
    <div className="lg:px-32 md:px-16 px-4 lg:py-8 md:py-4 py-2 flex flex-col justify-start items-center gap-y-10">
      <MainBillboard />
      <div className="w-full flex flex-row justify-between items-center gap-x-16">
        {mini_billboard_items.map((item, i) => (
          <MiniBillboard key={i} item={item}/>
        ))}
      </div>
      <ProductCard card={card} />
    </div>
  );
}

export default Home;
