"use client";

import { useState } from "react";
import Image from "next/image";
import { placeholderGradient } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface DishImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Renders the real photo at `src` once it exists in /public.
 * Until then (or if it 404s), shows a warm gradient placeholder
 * with the dish name — so the site looks intentional, not broken,
 * before real photography is dropped in.
 */
export default function DishImage({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
}: DishImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden",
          className
        )}
        style={{ background: placeholderGradient(alt) }}
        role="img"
        aria-label={alt}
      >
        <span className="font-display italic text-oat-cream/90 text-xl md:text-2xl px-6 text-center drop-shadow-sm">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
