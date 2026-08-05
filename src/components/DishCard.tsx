"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DishImage from "./DishImage";
import Badge from "./Badge";
import { MenuItem } from "@/types/menu";
import { formatPrice, cn } from "@/lib/utils";

export default function DishCard({ item }: { item: MenuItem }) {
  const hasVariants = item.variants && item.variants.length > 0;
  const [selectedId, setSelectedId] = useState(
    hasVariants ? item.variants![0].id : null
  );

  const activeVariant = hasVariants
    ? item.variants!.find((v) => v.id === selectedId) ?? item.variants![0]
    : null;

  const image = activeVariant?.image ?? item.image;
  const description = activeVariant?.description ?? item.description;
  const price = item.price + (activeVariant?.priceModifier ?? 0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-[8px] bg-card shadow-[0_4px_20px_rgba(61,35,20,0.06)]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            <DishImage
              src={image}
              alt={`${item.title}${activeVariant ? ` — ${activeVariant.label}` : ""}`}
              className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-body font-bold text-espresso text-[15px] leading-snug">
            {item.title}
          </h3>
          <span className="shrink-0 font-body font-bold text-terracotta text-[15px]">
            {formatPrice(price)}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="font-body text-[13px] leading-relaxed text-espresso-soft"
          >
            {description}
          </motion.p>
        </AnimatePresence>

        {hasVariants && (
          <div className="mt-1 flex flex-wrap gap-1.5" role="radiogroup" aria-label={`Choose ${item.title} filling`}>
            {item.variants!.map((variant) => (
              <button
                key={variant.id}
                type="button"
                role="radio"
                aria-checked={variant.id === selectedId}
                onClick={() => setSelectedId(variant.id)}
                className={cn(
                  "rounded-full border px-3 py-1 text-[11px] font-semibold font-body transition-colors",
                  variant.id === selectedId
                    ? "border-terracotta bg-terracotta text-oat-cream"
                    : "border-espresso/15 text-espresso-soft hover:border-terracotta/50"
                )}
              >
                {variant.label}
              </button>
            ))}
          </div>
        )}

        {item.tags && item.tags.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <Badge key={tag} tag={tag} />
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
