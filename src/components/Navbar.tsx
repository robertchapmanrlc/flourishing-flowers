"use client";

import { Dialog } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [barOpen, setBarOpen] = useState(false);

  return (
    <>
      <header>
        <nav className="w-full flex justify-between items-center p-4">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-playball">
            Flourishing Flowers
          </h1>
          <ul className="hidden w-64 md:flex justify-between">
            <li>
              <Link
                href="/"
                className="text-2xl font-pokova hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="text-2xl font-pokova hover:text-primary transition-colors"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-2xl font-pokova hover:text-primary transition-colors"
              >
                About Us
              </Link>
            </li>
          </ul>
          <ul className="w-40 md:w-28 flex justify-between">
            <li>
              <button onClick={() => setBarOpen(!barOpen)}>
                <Image
                  src={"/magnifier.svg"}
                  width={25}
                  height={25}
                  alt="Magnifying glass"
                />
              </button>
            </li>
            <li>
              <Link href="/shopping-cart">
                <Image
                  src={"/bag-shopping.svg"}
                  width={25}
                  height={25}
                  alt="Shopping Cart Icon"
                />
              </Link>
            </li>
            <li>
              <Link href="/account">
                <Image
                  src={"/user.svg"}
                  width={25}
                  height={25}
                  alt="User Icon"
                />
              </Link>
            </li>
            <li className="md:hidden">
              <button type="button" onClick={() => setIsOpen(true)}>
                <span className="sr-only">Open main menu</span>
                <Image
                  src={"/menu.svg"}
                  width={25}
                  height={25}
                  alt="Menu Icon"
                  className="cursor-pointer"
                />
              </button>
            </li>
          </ul>
        </nav>
        <Dialog
          as="div"
          className="md:hidden"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Dialog.Panel className="w-full sm:max-w-sm px-6 py-6 flex flex-col items-end fixed inset-y-0 right-0 z-10 bg-white">
            <button type="button" onClick={() => setIsOpen(false)}>
              <span className="sr-only">Close main menu</span>
              <Image
                src={"/x.svg"}
                width={25}
                height={25}
                alt="X Icon"
                className="cursor-pointer"
              />
            </button>
            <ul className="w-full mt-6 flex flex-col items-start gap-y-5">
              <li onClick={() => setIsOpen(false)}>
                <Link
                  href="/"
                  className="text-2xl font-pokova hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <Link
                  href="/shop"
                  className="text-2xl font-pokova hover:text-primary transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <Link
                  href="/about"
                  className="text-2xl font-pokova hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </Dialog.Panel>
        </Dialog>
      </header>
      {barOpen && <form className="absolute w-full flex justify-center items-center bg-white h-16 shadow-xl">
        <input autoFocus type='search' className="w-full h-full font-pokova text-2xl pl-5 outline-none" placeholder="Search..." onBlur={() => setBarOpen(false)} />
      </form>}
    </>
  );
}
