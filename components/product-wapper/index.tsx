"use client";
import React, { use, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { SanityProduct } from "@/config/inventory";
import { ProductSort } from "../product/product-sort";
import { ProductFilters } from "../product/product-filters";
import { cn } from "@/lib/utils";
import { ProductGrid } from "../product/product-grid";
import { AnimatePresence, motion } from "framer-motion";
import SelectTraiffSkelton from "../selectTraiffSkelton";

type Props = {
  product: SanityProduct[];
};

export default function Wrapper({ product }: Props) {
  const [isloading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [product]);

  return (
    <>
      <AnimatePresence initial={false}>
        <div>
          <div className="px-4 pt-20 text-center">
            <h1 className="text-4xl font-extrabold tracking-normal">
              {siteConfig.name}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base">
              {siteConfig.description}
            </p>
          </div>
          <div>
            <main className="mx-auto max-w-6xl px-6">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
                <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                  {product.length} result{product.length > 1 ? "s" : ""}
                </h1>
                {/* Product Sort */}
                <ProductSort />
              </div>

              <section
                aria-labelledby="products-heading"
                className="pb-24 pt-6"
              >
                <h2 id="products-heading" className="sr-only">
                  Products
                </h2>
                <div
                  className={cn(
                    "grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 xl:grid-cols-4",
                    product.length === 0 ? "py-24" : "py-12"
                  )}
                >
                  <div className="hidden lg:block">
                    {/* Product filters */}
                    <ProductFilters />
                  </div>
                  {/* Product grid */}
                  {isloading && product.length === 0 ? (
                    <SelectTraiffSkelton />
                  ) : (
                    <ProductGrid products={product} />
                  )}
                </div>
              </section>
            </main>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}
