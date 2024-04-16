import { database } from "@/utilities/database";

export async function getAllProducts() {
  const products = await database.product.findMany({
    include: {
      colors: true,
      occasion: true,
      images: true
    },
  });
  return products;
}

export async function getBestSellers() {
  const products = await database.product.findMany({
    include: {
      colors: true,
      images: true
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
      images: true
    },
  });
  return product;
}
