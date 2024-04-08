"use client";

import { Menu } from "@headlessui/react";
import Image from "next/image";

export default function SortMenu() {
  const options = ["Newest", "Price: Low to High", "Price: High to Low"];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="group inline-flex justify-center items-center font-pokova text-xl">
          Sort
          <Image src={'/chevron-down.svg'} width={20} height={20} alt="chevron-down" aria-hidden="true" className="ml-1" />
        </Menu.Button>
      </div>
      <Menu.Items className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
        {options.map((option) => (
          <Menu.Item key={option} as="h4" className='px-4 py-2 text-sm hover:bg-gray-100 hover:font-medium'>
            {option}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
