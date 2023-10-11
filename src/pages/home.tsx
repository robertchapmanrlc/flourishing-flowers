import { motion } from "framer-motion";

import MainBillboard from "../components/main-billboard";
import MiniBillboard from "../components/mini-billboard";
import ProductList from "../components/product-list";
import { products } from "../../products";
import { sortProducts } from "../lib/utils";

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

const newestProducts = [...products].sort(sortProducts);

const productListContent = [
  {
    label: "New",
    cards: [newestProducts[0], newestProducts[1]],
  },
  {
    label: "Relevant",
    cards: [products[0], products[1]],
  },
];

function Home() {
  return (
    <div className="lg:px-32 md:px-16 px-4 lg:py-8 md:py-4 py-2 flex flex-col justify-start items-center gap-y-4 md:gap-y-10">
      <MainBillboard />
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-row justify-between items-center gap-x-12"
      >
        {mini_billboard_items.map((item, i) => (
          <MiniBillboard key={i} item={item} />
        ))}
      </motion.div>
      <div className="w-full h-full flex flew-col flex-wrap justify-start items-center gap-y-8">
        {productListContent.map((content, i) => (
          <ProductList key={i} content={content} />
        ))}
      </div>
    </div>
  );
}

export default Home;
