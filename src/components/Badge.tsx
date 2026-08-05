import { cn } from "@/lib/utils";
import { DietaryTag } from "@/types/menu";

const TAG_STYLES: Record<DietaryTag, string> = {
  Popular: "bg-terracotta/10 text-terracotta-dark",
  NEW: "bg-terracotta text-oat-cream",
  VEG: "bg-sage/10 text-sage",
  VEGAN: "bg-sage/10 text-sage",
  GF: "bg-sand text-espresso-soft",
  Pork: "bg-sand text-espresso-soft",
  "Contains Nuts": "bg-sand text-espresso-soft",
  Spicy: "bg-terracotta/10 text-terracotta-dark",
};

export default function Badge({ tag }: { tag: DietaryTag }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase font-body",
        TAG_STYLES[tag]
      )}
    >
      {tag}
    </span>
  );
}
