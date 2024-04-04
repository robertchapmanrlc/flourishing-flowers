export default async function Product({
  params,
}: {
  params: { name: string };
}) {
  return (
    <main>
      <h1>Product Page for {params.name}</h1>
    </main>
  );
}
