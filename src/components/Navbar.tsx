import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-4">
      <h1 className="text-4xl">Flourishing Flowers</h1>
      <ul className="w-64 flex justify-between">
        <li>
          <Link href="/" className="text-xl">
            Home
          </Link>
        </li>
        <li>
          <Link href="/shop" className="text-xl">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-xl">
            About Us
          </Link>
        </li>
      </ul>
      <ul className=" w-24 flex justify-between">
        <li>
          <Link href="/search">
            <Image
              src={"/magnifier.svg"}
              width={20}
              height={20}
              alt="Magnifying glass"
            />
          </Link>
        </li>
        <li>
          <Link href="/shopping-cart">
            <Image
              src={"/bag-shopping.svg"}
              width={20}
              height={20}
              alt="Shopping Cart Icon"
            />
          </Link>
        </li>
        <li>
          <Link href="/account">
            <Image src={"/user.svg"} width={20} height={20} alt="User Icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
