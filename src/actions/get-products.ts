import { database } from "@/utilities/database";

export async function getAllProducts() {
  const products = await database.product.findMany();
  return products;
}
