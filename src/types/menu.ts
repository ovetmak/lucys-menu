export type MenuCategory =
  | "breakfast"
  | "lunch"
  | "hot-drinks"
  | "cold-drinks"
  | "sweet-treats"
  | "kids";

export type DietaryTag =
  | "Popular"
  | "NEW"
  | "VEG"
  | "VEGAN"
  | "GF"
  | "Pork"
  | "Contains Nuts"
  | "Spicy";

export interface MenuItemVariant {
  id: string;
  label: string;
  image: string;
  description?: string;
  priceModifier?: number;
}

export interface MenuItem {
  id: string;
  category: MenuCategory;
  title: string;
  description: string;
  image: string;
  price: number;
  featured?: boolean;
  tags?: DietaryTag[];
  variants?: MenuItemVariant[];
}

export interface CategoryInfo {
  id: MenuCategory;
  label: string;
  tagline: string;
  image: string;
  href: string;
}
