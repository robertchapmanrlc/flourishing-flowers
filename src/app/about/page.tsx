import Image from "next/image";

export default function About() {
  return (
    <main className="w-full px-4 py-8">
      <h1 className="text-xl font-pokova">
        Get To Know Us At Flourishing Flowers
      </h1>
      <p className="text-sm text-center font-pokova my-12">
        We believe flowers can be used to make anything special. From lavish
        weddings that will be remembered for a life time to days you want to
        give a gift just because. All your flower shopping needs can be met
        here.
      </p>
      <Image
        src="https://i.ibb.co/StkBmW1/beautiful-background-white-pink-roses.webp"
        width={3207}
        height={2138}
        alt="Flowers"
        style={{ borderRadius: "12px" }}
      />
      <p className="font-pokova text-sm text-center my-12">
        Ever since the humble beginnings of our founder as a gardener, we've
        been one of the best local flowers shops for decades. We strive to be
        source of beautiful blooms for any and all in the community.
      </p>
    </main>
  );
}
