
import { motion } from "framer-motion";

function MainBillboard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="w-full rounded-xl overflow-hidden"
    >
      <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-[url('/banners/banner-1.jpg')]">
        <div className="h-full w-full flex flex-col md:justify-center justify-start items-center text-center">
          <div className="font-lexend font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs lg:mt-0 mt-10 ">
            Shop for Beautiful Blooms
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default MainBillboard;
