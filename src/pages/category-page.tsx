import { useState } from "react";
import { Dialog, Menu } from "@headlessui/react";

import { Category } from "../../types";
import ProductCard from "../components/product-card";
import { ChevronDownIcon, Filter as FilterIcon, X } from "lucide-react";
import { cn, sortDates, sortMax, sortMin } from "../lib/utils";
import Filter from "../components/filter";

interface CategoryPageProps {
  category: Category;
}

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "red", label: "Red", checked: false },
      { value: "blue", label: "Blue", checked: false },
      { value: "yellow", label: "Yellow", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "white", label: "White", checked: false },
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
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [typeFilters, setTypeFilters] = useState([false, false, false]);
  const [colorFilters, setColorFilters] = useState([false, false, false, false, false]);
  const [options, setOptions] = useState([
    { name: "Newest", href: "#", current: true },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
  ]);

  const reduceTypes = typeFilters.reduce((acc, curr) => acc || curr, false);
  const reduceColors = colorFilters.reduce((acc, curr) => acc || curr, false);

  const filteredCards = category.cards.filter((card) => {
    if (!reduceTypes) {
      return true;
    } else {
      return (
        (card.category === "Plant" && typeFilters[0]) ||
        (card.category === "Arrangement" && typeFilters[1]) ||
        (card.category === "Bouquet" && typeFilters[2])
      );
    }
  }).filter((card) => {
    if (!reduceColors) {
      return true;
    } else {
      return (
        (colorFilters[0] &&
          card.colors.some((color) => color.name === "red")) ||
        (colorFilters[1] &&
          card.colors.some((color) => color.name === "blue")) ||
        (colorFilters[2] &&
          card.colors.some((color) => color.name === "yellow")) ||
        (colorFilters[3] &&
          card.colors.some((color) => color.name === "green")) ||
        (colorFilters[4] && card.colors.some((color) => color.name === "white"))
      );
    }
  });

  let sortedCards = filteredCards;
  if (options[0].current) {
    sortedCards.sort(sortDates);
  } else if (options[1].current) {
    sortedCards.sort(sortMin);
  } else if (options[2].current) {
    sortedCards.sort(sortMax);
  }

  const handleFilters = (num: number, name: string) => {
    if (name === 'Type') {
      let types = [...typeFilters];
      types[num] = !types[num];
      setTypeFilters(types);
    } else if (name === 'Color') {
      let colors = [...colorFilters];
      colors[num] = !colors[num];
      setColorFilters(colors);
    }
  }

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
      <Dialog
        open={mobileFiltersOpen}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={() => setMobileFiltersOpen(false)}
      >
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-lexend font-medium text-gray-900">
                Filters
              </h2>
              <button
                type="button"
                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                onClick={() => setMobileFiltersOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X />
              </button>
            </div>
            {filters.map((filter, i) => (
              <Filter
                key={filter.name}
                name={filter.name}
                id={filter.id}
                values={filter.name === "Type" ? typeFilters : colorFilters}
                options={filters[i].options}
                setFilter={handleFilters}
              />
            ))}
          </Dialog.Panel>
        </div>
      </Dialog>
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
          <button
            type="button"
            className="lg:hidden -m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <span className="sr-only">Filters</span>
            <FilterIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="pb-24 pt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <div className="hidden lg:block">
            {filters.map((filter, i) => (
              <Filter
                key={filter.name}
                name={filter.name}
                id={filter.id}
                options={filters[i].options}
                setFilter={handleFilters}
                values={filter.name === "Type" ? typeFilters : colorFilters}
              />
            ))}
          </div>
          <div className="col-span-3 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {sortedCards.map((card, i) => (
              <ProductCard key={i} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
