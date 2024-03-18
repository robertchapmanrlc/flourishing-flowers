import { useState, useContext, Fragment } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";

import NavbarLink from "./navbar-link";
import { Category } from "../types/types";
import { ShopContext } from "../contexts/shop-context";

interface NavbarProps {
  categories: Category[];
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delayChildren: 0.4,
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Navbar({ categories }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { length } = useContext(ShopContext);

  const handleRoute = () => {
    setIsOpen(false);
  }

  return (
    <header>
      <nav className="lg:px-32 md:px-16 px-4 pt-4 flex flex-row justify-between items-center">
        <NavLink to="/">
          <motion.h2
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-lexend text-2xl"
          >
            Flourishing Flowers
          </motion.h2>
        </NavLink>
        <motion.ul
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex flex-row gap-x-5 items-center"
        >
          {categories.map((category, i) => (
            <NavbarLink key={i} link={category} handleRoute={handleRoute} />
          ))}
        </motion.ul>
        <motion.div
          initial={{ opacity: 0, x: "50%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-row md:gap-x-5 gap-x-2"
        >
          <Link to="/cart">
            <div className="w-full flex flex-row gap-x-2 items-center px-3 py-1.5 rounded-lg bg-pink-300 hover:scale-110 transition ease-in-out">
              <ShoppingCart size={30} className="text-white cursor-pointer" />
              <p className="font-lexend text-white">{length}</p>
            </div>
          </Link>
          <button type="button" onClick={() => setIsOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Menu
              size={30}
              className="lg:hidden text-gray-500 transition ease-in-out hover:text-gray-800 cursor-pointer"
            />
          </button>
        </motion.div>
      </nav>
      <Transition.Root
        as={Fragment}
        show={isOpen}
      >
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setIsOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-700 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-700 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="flex flex-col items-end fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <button
                  type="button"
                  className="w-[2.875rem] -m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="w-full mt-6">
                  <motion.ul
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-start gap-y-2"
                  >
                    {categories.map((category, i) => (
                      <motion.div variants={item} className="w-full">
                        <NavbarLink key={i} link={category} handleRoute={handleRoute} />
                      </motion.div>
                    ))}
                  </motion.ul>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
}

export default Navbar;
