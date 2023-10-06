import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "lucide-react";

interface FilterProps {
  id: string;
  name: string;
  options: {
    value: string;
    label: string;
    checked: boolean;
  }[];
}

function Filter({id, name, options }: FilterProps) {
  return (
    <Disclosure as="div" className="border-t lg:border-t-0 lg:border-b border-gray-200 px-4 lg:px-4 py-6">
      {({ open }) => (
        <>
          <h3 className="-my-3 flow-root">
            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
              <span className="font-lexend font-medium text-gray-900">{name}</span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel className="pt-6">
            <div className="space-y-4">
              {options.map((option, i) => (
                <div key={option.value} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`filter-${id}-${i}`}
                    defaultValue={option.value}
                    defaultChecked={option.checked}
                    className="h-4 w-4 rounded border-gray-300 accent-pink-300"
                  />
                  <label
                    htmlFor={`filter-${id}-${i}`}
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
