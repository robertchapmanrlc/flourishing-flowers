import { database } from "@/utilities/database";

export async function getAllProducts() {
  const products = await database.product.findMany();
  return products;
}

export async function getProduct(productName: string) {
  const product = await database.product.findFirst({
    where: {
      urlName: productName
    }
  });
  return product;
}
