import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <h3>Flourishing Flowers</h3>
      <button>Contact Us</button>
      <Link href="/">
        <h5>Home</h5>
      </Link>
      <Link href="/shop">
        <h5>Shop</h5>
      </Link>
      <Link href="/about">
        <h5>About Us</h5>
      </Link>
      <Image
        src={"/twitterx.svg"}
        width={25}
        height={25}
        alt="X Icon"
      />
      <Image
        src={"/youtube.svg"}
        width={25}
        height={25}
        alt="YouTube Icon"
      />
      <Image
        src={"/instagram.svg"}
        width={25}
        height={25}
        alt="Instagram Icon"
      />
    </footer>
  );
}
