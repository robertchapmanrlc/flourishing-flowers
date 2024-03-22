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
      <ul className="flex">
        <li>
          <Link href="/search">Search</Link>
        </li>
        <li>
          <Link href="/shopping-cart">Shopping Cart</Link>
        </li>
        <li>
          <Link href="/account">Account</Link>
        </li>
      </ul>
    </nav>
  );
}
