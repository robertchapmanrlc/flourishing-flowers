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
    <main className="w-full px-4 py-8 flex flex-col">
      <div className="w-full flex flex-col-reverse mb-5 gap-y-5">
        <div className="w-full flex flex-col gap-y-2">
          <h1 className="font-pokova text-3xl">{product.name}</h1>
          <h3 className="font-pokova text-xl">${product.price}</h3>
          <h3 className="font-pokova font-bold text-xl">Colors:</h3>
          {product.colors.map((color) => (<p key={color.id}>{color.name}</p>))}
        </div>
        <Image
          className="border-2 rounded-md"
          src={product.imageUrl}
          width={400}
          height={500}
          alt={product.name}
        />
      </div>
      <p className="font-pokova text-left">{product.description}</p>
    </main>
  );
}
