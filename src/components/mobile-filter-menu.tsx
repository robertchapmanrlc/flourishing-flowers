"use client";

import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import Filter from "./filter";

export default function MobileFilterMenu() {

  const [isOpen, setIsOpen] = useState(false);

  const filters = [
    {
      name: "Color",
      options: [
        { label: "Red", checked: false },
        { label: "Blue", checked: false },
        { label: "Yellow", checked: false },
        { label: "Green", checked: false },
        { label: "White", checked: false },
        { label: "Pink", checked: false },
      ],
    },
    {
      name: "Occasion",
      options: [
        { label: "Birthdays", checked: false },
        { label: "Weddings", checked: false },
        { label: "Get Well", checked: false },
        { label: "Housewarming", checked: false },
      ],
    },
  ];

  return (
    <>
      <button className="relative lg:hidden" onClick={() => setIsOpen(true)}>
        <Image src={"/filter.svg"} width={20} height={20} alt="Filter" />
      </button>
      <Dialog
        as="div"
        className="relative lg:hidden"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Dialog.Panel className="w-full px-6 py-6 sm:max-w-sm flex flex-col items-end fixed inset-y-0 right-0 z-10 bg-white">
          <div className="w-full flex items-center justify-between border-b-2 border-gray-200 pb-5">
            <h2 className="text-3xl font-pokova font-medium text-gray-900">
              Filters
            </h2>
            <button onClick={() => setIsOpen(false)}>
              <Image src={"/x.svg"} width={30} height={30} alt="X Icon" />
            </button>
          </div>
          {filters.map((filter, i) => ( 
            <Filter key={i} filter={filter} />
          ))}
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
