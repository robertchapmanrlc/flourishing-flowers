import { database } from "@/utilities/database";
import { NextResponse } from "next/server";

export async function GET() {
  const products = await database.product.findMany();
  return NextResponse.json(products);
}
