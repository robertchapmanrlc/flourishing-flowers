import Image from "next/image";

export default function PlusButton() {
  return (
    <button className="absolute bg-primary rounded-full bottom-2 right-2 p-1 opacity-0 group-hover:opacity-100 hover:scale-125 transition-transform">
      <Image src={`/plus.svg`} width={18} height={18} alt="plus" />
    </button>
  );
}
