"use client";

import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

export default function SortMenu() {

  const options = [
    {
      label: "Newest",
      urlLabel: "newest",
    },
    {
      label: "Price: Low to High",
      urlLabel: "price-low-to-high",
    },
    {
      label: "Price: High to Low",
      urlLabel: "price-high-to-low",
    },
  ];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="group inline-flex justify-center items-center font-pokova text-xl">
          Sort
          <Image
            src={"/chevron-down.svg"}
            width={20}
            height={20}
            alt="chevron-down"
            aria-hidden="true"
            className="ml-1"
          />
        </Menu.Button>
      </div>
      <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
        {options.map((option) => (
          <Menu.Item
            key={option.label}
            as="h4"
            className="px-4 py-2 text-sm hover:bg-gray-100 hover:font-medium"
          >
            <Link href={`?${new URLSearchParams({ sort: option.urlLabel })}`}>
              {option.label}
            </Link>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
