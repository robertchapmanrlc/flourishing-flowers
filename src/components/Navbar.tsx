import { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

import { Dialog } from "@headlessui/react";

const categories = [
  {
    label: "Just Because",
    route: "just-because",
  },
  {
    label: "Birthday",
    route: "birthday",
  },
  {
    label: "Anniversary",
    route: "anniversary",
  },
  {
    label: "Wedding",
    route: "wedding",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="lg:px-32 md:px-16 px-4 pt-4 flex flex-row justify-between">
        <h2 className="font-lexend text-2xl">Flourishing Flowers</h2>
        <ul className="hidden lg:flex flex-row gap-x-5">
          {categories.map((category) => (
            <li className="font-lexend">{category.label}</li>
          ))}
        </ul>
        <div className="flex flex-row md:gap-x-5 gap-x-2">
          <Search size={30} />
          <ShoppingCart size={30} />
          <button type="button" onClick={() => setIsOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Menu size={30} className="lg:hidden" />
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
            <div className="flex flex-col items-start gap-y-5">
              {categories.map((category) => (
                <p className="w-full px-3 py-2 rounded-lg hover:bg-gray-100 text-2xl font-lexend">{category.label}</p>
              ))}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navbar;
