import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h1>Flourishing Flowers</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
      <ul>
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
