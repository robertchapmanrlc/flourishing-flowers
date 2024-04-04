import { getProduct } from "actions/get-products";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Product({
  params,
}: {
  params: { name: string };
}) {
  const productName = params.name;

  const product = await getProduct(productName);

  if (!product) {
    redirect("/");
  }

  return (
    <main>
      <h1>{product.name}</h1>
      <h3>${product.price}</h3>
      <Image
        src={product.imageUrl}
        width={400}
        height={500}
        alt={product.name}
      />
      <p>{product.description}</p>
    </main>
  );
}
