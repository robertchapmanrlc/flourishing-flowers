import { useState } from "react";
import { Menu } from "@headlessui/react";

import { Category } from "../../types";
import ProductCard from "../components/product-card";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "../lib/utils";
import Filter from "../components/filter";

interface CategoryPageProps {
  category: Category;
}

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: false },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "type",
    name: "Type",
    options: [
      { value: "plants", label: "Plants", checked: false },
      { value: "arrangements", label: "Arrangements", checked: false },
      { value: "bouquets", label: "Bouquets", checked: false },
    ],
  },
];

function CategoryPage({ category }: CategoryPageProps) {
  const [options, setOptions] = useState([
    { name: "Newest", href: "#", current: true },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
  ]);

  const [colorFilter, setColorFilter] = useState();

  const changeActive = (name: string) => {
    let newOptions = [...options];
    newOptions.forEach((option) => {
      if (option.name === name) {
        option.current = true;
      } else {
        option.current = false;
      }
    });
    setOptions(newOptions);
  };

  return (
    <div className="lg:px-32 md:px-16 px-4 lg:py-8 md:py-4 py-2 flex flex-col justify-start items-center gap-y-4 md:gap-y-10">
      <div className="w-full flex flex-row justify-between border-b border-gray-200 pb-6 pt-6">
        <h1 className="text-4xl font-bold font-lexend tracking-tight text-gray-900">
          {category.label} Flowers
        </h1>
        <div className="flex items-center">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="group inline-flex justify-center font-lexend text-sm font-medium text-gray-700 hover:text-gray-900">
                Sort
                <ChevronDownIcon
                  className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {options.map((option) => (
                  <Menu.Item
                    key={option.name}
                    as="div"
                    onClick={() => changeActive(option.name)}
                  >
                    {({ active }) => (
                      <p
                        className={cn(
                          option.current
                            ? "font-medium text-gray-900"
                            : "text-gray-500",
                          active && "bg-gray-100",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {option.name}
                      </p>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Menu>
        </div>
      </div>
      <div className="pb-24 pt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <div className="hidden lg:block">
            {filters.map((filter, i) => (
              <Filter key={filter.name} name={filter.name} id={filter.id} options={filters[i].options} />
            ))}
          </div>
          <div className="col-span-3 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {category.cards.map((card, i) => (
              <ProductCard key={i} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
