"use client";

import { FilterType } from "@/types/types";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface FilterProps {
  filter: FilterType;
}

function Filter({ filter }: FilterProps) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  const changeQuery = (term: string, type: string) => {
    let filters = params.get(type.toLowerCase())?.split(",") || [];
    
    if (filters.includes(term.toLowerCase()) === false || filters.length === 0) {
      filters.push(term.toLowerCase());
    } else {
      filters = filters.filter((filter) => filter !== term.toLowerCase());
    }

    if (term) {
      params.set(type.toLowerCase(), filters.toString());
    }
    
    if (filters.length === 0) {
      params.delete(type.toLowerCase());
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Disclosure
      as="div"
      className="w-full border-t lg:border-t-0 lg:border-b border-gray-200 px-4 lg:px-4 py-6"
    >
      {({ open }) => (
        <>
          <h3 className="-my-3 flow-root">
            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
              <span className="font-pokova text-2xl font-medium text-gray-900">
                {filter.name}
              </span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <Image
                    src={"/minus.svg"}
                    width={25}
                    height={25}
                    alt="minus"
                  />
                ) : (
                  <Image src={"/plus.svg"} width={25} height={25} alt="plus" />
                )}
              </span>
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel className="pt-6">
            <div className="space-y-4">
              {filter.options.map((option) => (
                <div key={option.label} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`filter-${option.urlLabel}`}
                    defaultValue={option.urlLabel}
                    checked={params
                      .toString()
                      .replace("+", " ")
                      .includes(option.urlLabel)}
                    onChange={(e) => changeQuery(e.target.value, filter.name)}
                    className="h-4 w-4 rounded border-gray-300 accent-pink-300"
                  />
                  <label
                    htmlFor={`${option.urlLabel}`}
                    className="font-lexend ml-3 text-sm text-gray-600"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Filter;
