"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/menu";
import { cn } from "@/lib/utils";

export default function CategoryTabs() {
  const pathname = usePathname();

  return (
    <div className="sticky top-[65px] z-40 bg-oat-cream/95 backdrop-blur-sm border-b border-espresso/8">
      <div className="mx-auto max-w-6xl overflow-x-auto no-scrollbar">
        <div className="flex gap-2 px-5 py-3 w-max">
          {categories.map((c) => {
            const active = pathname === c.href;
            return (
              <Link
                key={c.id}
                href={c.href}
                className={cn(
                  "shrink-0 rounded-full px-4 py-1.5 font-body text-xs font-semibold tracking-wide transition-colors",
                  active
                    ? "bg-terracotta text-oat-cream"
                    : "bg-sand/60 text-espresso-soft hover:bg-sand"
                )}
              >
                {c.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
