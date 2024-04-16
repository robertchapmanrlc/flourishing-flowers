import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-60 md:h-80 px-4 sm:px-8 py-4 flex flex-col md:flex-row items-center justify-center bg-secondary">
      <div className="w-full md:w-[50%] h-[25%] flex md:flex-col items-start justify-between gap-y-5">
        <h3 className="font-playball text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
          Flourishing Flowers
        </h3>
      </div>
      <div className="w-full md:w-[50%] h-[75%] md:h-full flex flex-row items-center">
        <div className="hidden md:block w-1 h-[75%] bg-accent" />
        <div className="w-full md:w-[50%] md:h-full md:pl-10 flex flex-col items-start justify-between md:justify-center gap-y-4 md:gap-y-10">
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
        <div className="hidden md:block w-1 h-[75%] bg-accent" />
        <div className="w-full md:w-[50%] md:h-full md:pl-10 flex flex-col items-start justify-between md:justify-center gap-y-4 md:gap-y-10">
          <Image src={"/twitterx.svg"} width={35} height={35} alt="X Icon" />
          <Image
            src={"/youtube.svg"}
            width={35}
            height={35}
            alt="YouTube Icon"
          />
          <Image
            src={"/instagram.svg"}
            width={35}
            height={35}
            alt="Instagram Icon"
          />
        </div>
      </div>
    </footer>
  );
}
