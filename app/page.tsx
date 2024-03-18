"use client";
import { client } from "@/sanity/lib/client";
// import { groq } from "next-sanity";
import { SanityProduct } from "@/config/inventory";
import { cn } from "@/lib/utils";
import { ProductFilters } from "@/components/product/product-filters";
import { ProductGrid } from "@/components/product/product-grid";
import { ProductSort } from "@/components/product/product-sort";
import { seedSanityData } from "@/lib/seed";
import Wrapper from "@/components/product-wapper";
import groq from "groq";
import { useQuery } from "@tanstack/react-query";

interface Props {
  searchParams: {
    date?: string;
    price?: string;
    color?: string;
    size?: string;
    category?: string;
    search?: string;
  };
}

export default function Page(props: Props) {
  const {
    date = "desc",
    price,
    color,
    category,
    size,
    search,
  } = props.searchParams;

  const order = date
    ? `| order(_createdAt ${date})`
    : price
    ? `| order(price ${price})`
    : "";

  const productFilter = `_type == "product"`;
  const colorFilter = color ? `&& "${color}" in colors` : "";
  const sizeFilter = size ? `&& "${size}" in sizes` : "";
  const categoryFilter = category ? `&& "${category}" in categories` : "";
  const searchFilter = search ? `&& name match "${search}"` : "";
  const filter = `*[${productFilter}${colorFilter}${sizeFilter}${categoryFilter}${searchFilter}]`;

  const query = `${filter} ${order}`;

  const gquery = groq`${filter} ${order}  {
    _id,
    _createdAt,
    name,
    sku,
    images,
    currency,
    price,
    description,
    "slug": slug.current,
      }`;

  const { data, isLoading } = useQuery({
    queryKey: ["products", query],
    queryFn: async () => {
      return client.fetch<SanityProduct[]>(gquery);
    },
  });

  return <Wrapper product={data ? data : []} isLoading={isLoading} />;
}
