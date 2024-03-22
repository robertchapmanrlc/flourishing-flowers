import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-4">
      <h1 className="text-4xl font-playball">Flourishing Flowers</h1>
      <ul className="w-64 flex justify-between">
        <li>
          <Link href="/" className="text-2xl font-pokova">
            Home
          </Link>
        </li>
        <li>
          <Link href="/shop" className="text-2xl font-pokova">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-2xl font-pokova">
            About Us
          </Link>
        </li>
      </ul>
      <ul className="w-28 flex justify-between">
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
      </ul>
    </nav>
  );
}
