import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

import { Dialog } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
import NavbarLink from "./navbar-link";
import { Category } from "../../types";

interface NavbarProps {
  categories: Category[];
}

function Navbar({ categories }: NavbarProps ) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="lg:px-32 md:px-16 px-4 pt-4 flex flex-row justify-between items-center">
        <NavLink to="/">
          <h2 className="font-lexend text-2xl">Flourishing Flowers</h2>
        </NavLink>
        <ul className="hidden lg:flex flex-row gap-x-5 items-center">
          {categories.map((category, i) => (
            <NavbarLink key={i} link={category} />
          ))}
        </ul>
        <div className="flex flex-row md:gap-x-5 gap-x-2">
          <Link to="/cart">
            <ShoppingCart
              size={30}
              className="text-gray-500 transition ease-in-out hover:text-gray-800 cursor-pointer"
            />
          </Link>
          <button type="button" onClick={() => setIsOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Menu size={30} className="lg:hidden text-gray-500 transition ease-in-out hover:text-gray-800 cursor-pointer" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={isOpen}
        onClose={() => setIsOpen(false)}
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
            <ul className="flex flex-col items-start gap-y-2">
              {categories.map((category, i) => (
                <NavbarLink key={i} link={category} />
              ))}
            </ul>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navbar;
