import MainBillboard from "../components/main-billboard";
import MiniBillboard from "../components/mini-billboard";
import ProductList from "../components/product-list";

const mini_billboard_items = [
  {
    image_url: "src/assets/banners/banner-2.jpg",
    label: "Wedding Bouquets",
  },
  {
    image_url: "src/assets/banners/banner-3.jpg",
    label: "Blooms for Celebration",
  },
];

const productListContent = [
  {
    label: "New",
    cards: [
      {
        image_url: "src/assets/products/red-rose-bouquet.webp",
        name: "Rose Bouquet",
        category: "Bouquet",
        price: "5",
      },
      {
        image_url: "src/assets/products/red-rose-bouquet.webp",
        name: "Rose Bouquet",
        category: "Bouquet",
        price: "5",
      },
      {
        image_url: "src/assets/products/red-rose-bouquet.webp",
        name: "Rose Bouquet",
        category: "Bouquet",
        price: "5",
      },
      {
        image_url: "src/assets/products/red-rose-bouquet.webp",
        name: "Rose Bouquet",
        category: "Bouquet",
        price: "5",
      },
    ],
  },
  {
    label: "Relevant",
    cards: [
      {
        image_url: "src/assets/products/red-rose-bouquet.webp",
        name: "Rose Bouquet",
        category: "Bouquet",
        price: "5",
      },
      {
        image_url: "src/assets/products/red-rose-bouquet.webp",
        name: "Rose Bouquet",
        category: "Bouquet",
        price: "5",
      },
      {
        image_url: "src/assets/products/red-rose-bouquet.webp",
        name: "Rose Bouquet",
        category: "Bouquet",
        price: "5",
      },
      {
        image_url: "src/assets/products/red-rose-bouquet.webp",
        name: "Rose Bouquet",
        category: "Bouquet",
        price: "5",
      },
    ],
  },
];

function Home() {
  return (
    <div className="lg:px-32 md:px-16 px-4 lg:py-8 md:py-4 py-2 flex flex-col justify-start items-center gap-y-4 md:gap-y-10">
      <MainBillboard />
      <div className="w-full flex flex-row justify-between items-center gap-x-16">
        {mini_billboard_items.map((item, i) => (
          <MiniBillboard key={i} item={item} />
        ))}
      </div>
      <div className="w-full h-full flex flew-col flex-wrap justify-start items-center gap-y-4">
        {productListContent.map((content, i) => (
          <ProductList key={i} content={content} />
        ))}
      </div>
    </div>
  );
}

export default Home;
