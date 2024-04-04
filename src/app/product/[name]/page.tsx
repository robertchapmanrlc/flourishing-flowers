export default async function Product({
  params,
}: {
  params: { name: string };
}) {
  const product = params.name;
  return (
    <main>
      <h1>Product Page for {product}</h1>
    </main>
  );
}
