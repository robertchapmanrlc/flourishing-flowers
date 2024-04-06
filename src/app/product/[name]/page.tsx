import ProductDetails from "@/components/product";
import { getProduct } from "actions/get-products";
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
    <ProductDetails product={product}/>
  );
}
