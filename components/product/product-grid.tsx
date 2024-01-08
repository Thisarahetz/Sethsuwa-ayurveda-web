"use client";

import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { XCircle } from "lucide-react";
import { formatCurrencyString } from "use-shopping-cart";

import { SanityProduct } from "@/config/inventory";
import { shimmer, toBase64 } from "@/lib/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  products: SanityProduct[];
}

export function ProductGrid({ products }: Props) {
  const [images, setImages] = useState({
    _type: "image",
    _key: "image-b27e36756e9ae90c5ebc303ed12741d002fea7a4-680x850-jpg",
    asset: {
      _ref: "image-b27e36756e9ae90c5ebc303ed12741d002fea7a4-680x850-jpg",
      _type: "reference",
    },
  });

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center">
        <XCircle className="w-12 h-12 text-gray-400" />
        <p className="mt-4 text-sm text-gray-500">No products found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
      {products.map((product) => (
        <Link
          key={product._id}
          href={`/products/${product.slug}`}
          className="group text-sm"
        >
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-100 group-hover:opacity-75 dark:border-gray-800">
            <Image
              src={urlForImage(product.images ? product.images[0] : images)}
              alt={product.name}
              width={225}
              height={280}
              className="h-full w-full object-cover object-center"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(225, 280)
              )}`}
            />
          </div>
          <h3 className="mt-4 font-medium">{product.name}</h3>
          <p className="mt-2 font-medium">{product.price}</p>
        </Link>
      ))}
    </div>
  );
}
