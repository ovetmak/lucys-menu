import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: number) {
  return `£${price.toFixed(2)}`;
}

// A small set of warm, deterministic gradients used for placeholder
// photography. Swapping in a real photo just means adding a file at the
// item's `image` path in /public — <DishImage> falls back to this
// automatically whenever the real file is missing.
const PLACEHOLDER_GRADIENTS = [
  "linear-gradient(135deg, #E2D7C7 0%, #C86D51 100%)",
  "linear-gradient(135deg, #EFE6D8 0%, #B15A3F 100%)",
  "linear-gradient(135deg, #E9DCC9 0%, #5A7052 100%)",
  "linear-gradient(135deg, #F2E9DC 0%, #6B5849 100%)",
];

export function placeholderGradient(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % PLACEHOLDER_GRADIENTS.length;
  return PLACEHOLDER_GRADIENTS[index];
}
