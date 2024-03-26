import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-80 flex items-center justify-between bg-secondary">
      <div className="w-[50%] h-full pl-24 flex flex-col items-start justify-center gap-y-5">
        <h3 className="font-playball text-5xl">Flourishing Flowers</h3>
        <button className="bg-primary rounded-md px-3 py-1 font-pokova text-2xl text-white">
          Contact Us
        </button>
      </div>
      <div className="w-1 h-[75%] bg-accent" />
      <div className="w-[25%] h-full pl-10 flex flex-col items-start justify-center gap-y-10">
        <Link href="/">
          <h5 className="font-pokova text-2xl text-gray-700">Home</h5>
        </Link>
        <Link href="/shop">
          <h5 className="font-pokova text-2xl text-gray-700">Shop</h5>
        </Link>
        <Link href="/about">
          <h5 className="font-pokova text-2xl text-gray-700">About Us</h5>
        </Link>
      </div>
      <div className="w-1 h-[75%] bg-accent" />
      <div className="w-[25%] h-full pl-10 flex flex-col items-start justify-center gap-y-10">
        <Image src={"/twitterx.svg"} width={35} height={35} alt="X Icon" />
        <Image src={"/youtube.svg"} width={35} height={35} alt="YouTube Icon" />
        <Image
          src={"/instagram.svg"}
          width={35}
          height={35}
          alt="Instagram Icon"
        />
      </div>
    </footer>
  );
}
