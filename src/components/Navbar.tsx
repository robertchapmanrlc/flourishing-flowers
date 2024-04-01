"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="w-full flex justify-between items-center p-4">
        <h1 className="text-2xl md:text-4xl font-playball">
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
            <Link href="/search">
              <Image
                src={"/magnifier.svg"}
                width={25}
                height={25}
                alt="Magnifying glass"
              />
            </Link>
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
              <Image src={"/user.svg"} width={25} height={25} alt="User Icon" />
            </Link>
          </li>
          <li>
            <button onClick={() => setIsOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Image
                src={"/menu.svg"}
                width={25}
                height={25}
                alt="Menu Icon"
                className="md:hidden cursor-pointer"
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
