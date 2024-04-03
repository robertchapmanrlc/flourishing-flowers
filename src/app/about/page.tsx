import Image from "next/image";

export default function About() {
  return (
    <main>
      <h1>Get To Know Us At Flourishing Flowers</h1>
      <p>
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
      />
    </main>
  );
}
