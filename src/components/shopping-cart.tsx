"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import useCartService from "contexts/shop-context";

export default function ShoppingCart() {
  const { orderItems } = useCartService();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link href="/shopping-cart" className="relative">
      <Image
        src={"/bag-shopping.svg"}
        width={25}
        height={25}
        alt="Shopping Cart Icon"
      />
      {mounted && orderItems.length != 0 && (
        <h6 className="absolute w-5 h-5 top-[-10px] text-white right-[-8px] bg-primary rounded-full flex justify-center items-center text-xs">
          {orderItems.length}
        </h6>
      )}
    </Link>
  );
}
