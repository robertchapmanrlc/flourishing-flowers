import { database } from "@/utilities/database";

export async function getAllProducts() {
  const products = await database.product.findMany({
    include: {
      colors: true,
    },
  });
  return products;
}

export async function getBestSellers() {
  const products = await database.product.findMany({
    include: {
      colors: true
    },
    take: 4
  });
  return products;
}

export async function getProduct(productName: string) {
  const product = await database.product.findFirst({
    where: {
      urlName: productName,
    },
    include: {
      colors: true,
    },
  });
  return product;
}
