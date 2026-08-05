"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Breakfast", href: "/menu/breakfast" },
  { label: "Lunch", href: "/menu/lunch" },
  { label: "Hot Drinks", href: "/menu/hot-drinks" },
  { label: "Desserts", href: "/menu/sweet-treats" },
  { label: "Visit Us", href: "/visit-us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-oat-cream/90 backdrop-blur-md shadow-[0_2px_16px_rgba(61,35,20,0.06)]"
          : "bg-oat-cream/0"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="font-script text-3xl text-espresso leading-none"
        >
          Lucy&apos;s
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-body text-sm font-medium tracking-wide transition-colors",
                pathname === link.href
                  ? "text-terracotta"
                  : "text-espresso/80 hover:text-espresso"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span
            className={cn(
              "block h-[1.5px] w-6 bg-espresso transition-transform duration-300",
              open && "translate-y-[3.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-[1.5px] w-6 bg-espresso transition-opacity duration-300",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-[1.5px] w-6 bg-espresso transition-transform duration-300",
              open && "-translate-y-[5px] -rotate-45"
            )}
          />
        </button>
      </div>

      <nav
        className={cn(
          "md:hidden overflow-hidden bg-oat-cream transition-[max-height] duration-300 ease-in-out",
          open ? "max-h-96 border-t border-espresso/10" : "max-h-0"
        )}
      >
        <div className="flex flex-col px-5 py-3">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-body py-3 text-base font-medium border-b border-espresso/5 last:border-none",
                pathname === link.href ? "text-terracotta" : "text-espresso"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
