import { getProduct } from "actions/get-products";
import { redirect } from "next/navigation";

export default async function Product({
  params,
}: {
  params: { name: string };
}) {
  const product = params.name;

  const flower = await getProduct(product);

  if (!flower) {
    redirect('/');
  }

  return (
    <main>
      <h1>Product Page for {product}</h1>
    </main>
  );
}
