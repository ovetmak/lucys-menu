"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import DishImage from "./DishImage";
import { CategoryInfo } from "@/types/menu";

export default function CategoryCard({ category }: { category: CategoryInfo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link
        href={category.href}
        className="group relative block aspect-[3/4] overflow-hidden rounded-[8px]"
      >
        <DishImage
          src={category.image}
          alt={category.label}
          className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-display text-2xl text-oat-cream">
            {category.label}
          </h3>
          <p className="font-body text-xs text-oat-cream/85 mt-1">
            {category.tagline}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
