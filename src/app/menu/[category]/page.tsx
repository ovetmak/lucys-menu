import { notFound } from "next/navigation";
import type { Metadata } from "next";
import DishCard from "@/components/DishCard";
import Section from "@/components/Section";
import DishImage from "@/components/DishImage";
import CategoryTabs from "@/components/CategoryTabs";
import { categories, getCategoryInfo, getItemsByCategory } from "@/data/menu";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const info = getCategoryInfo(category);
  if (!info) return {};
  return {
    title: `${info.label} — Lucy's Coffee House`,
    description: info.tagline,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const info = getCategoryInfo(category);
  const items = getItemsByCategory(category);

  if (!info || items.length === 0) {
    notFound();
  }

  return (
    <>
      <div className="relative h-[38vh] min-h-[260px] w-full overflow-hidden">
        <DishImage
          src={info.image}
          alt={info.label}
          className="absolute inset-0 h-full w-full"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/25 to-espresso/10" />
        <div className="relative z-10 flex h-full flex-col items-center justify-end px-5 pb-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-oat-cream">
            {info.label}
          </h1>
          <p className="font-body text-sm text-oat-cream/85 mt-2">
            {info.tagline}
          </p>
        </div>
      </div>

      <CategoryTabs />

      <Section className="pt-12 md:pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <DishCard key={item.id} item={item} />
          ))}
        </div>
      </Section>
    </>
  );
}
