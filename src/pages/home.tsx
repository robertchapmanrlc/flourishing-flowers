import MainBillboard from "../components/main-billboard";
import MiniBillboard from "../components/mini-billboard";
import ProductList from "../components/product-list";
import { products } from "../../products";

const mini_billboard_items = [
  {
    image_url: "src/assets/banners/banner-2.jpg",
    label: "Wedding Bouquets",
    route: '/wedding'
  },
  {
    image_url: "src/assets/banners/banner-3.jpg",
    label: "For the Anniversary",
    route: '/anniversary'
  },
];


const productListContent = [
  {
    label: "New",
    cards: [products[0], products[1], products[2], products[3]],
  },
  {
    label: "Relevant",
    cards: [products[4], products[5], products[6], products[7]],
  },
];

function Home() {
  return (
    <div className="lg:px-32 md:px-16 px-4 lg:py-8 md:py-4 py-2 flex flex-col justify-start items-center gap-y-4 md:gap-y-10">
      <MainBillboard />
      <div className="w-full flex flex-row justify-between items-center gap-x-12">
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
