import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

import { SanityProduct } from "@/config/inventory";
import { cn } from "@/lib/utils";
import { ProductFilters } from "@/components/product/product-filters";
import { ProductGrid } from "@/components/product/product-grid";
import { ProductSort } from "@/components/product/product-sort";
import { seedSanityData } from "@/lib/seed";
import Wrapper from "@/components/product-wapper";

interface Props {
  searchParams: {
    date?: string;
    price?: string;
  };
}

export default async function Page(props: Props) {
  const { date, price } = props.searchParams;

  const order = date
    ? `| order(_createdAt ${date})`
    : price
    ? `| order(price ${price})`
    : "";

  const productFilter = `_type == "product" ${order}`;

  const product = await client.fetch<SanityProduct[]>(
    groq`*[_type == "product"] ${order}  {
  _id,
  _createdAt,
  name,
  sku,
  images,
  currency,
  price,
  description,
  "slug": slug.current,
    }`
  );

  return <Wrapper product={product} />;
}
