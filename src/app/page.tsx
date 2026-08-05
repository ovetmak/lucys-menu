import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CategoryCard from "@/components/CategoryCard";
import DishCard from "@/components/DishCard";
import Button from "@/components/Button";
import { categories, featuredItems } from "@/data/menu";

export default function Home() {
  return (
    <>
      <Hero />

      <Section
        eyebrow="Browse by Category"
        title="What are you in the mood for?"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Fan Favourites"
        title="Today's Featured Dishes"
        subtitle="A few things people keep coming back for."
        className="bg-sand/40"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <DishCard key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/menu/breakfast" variant="secondary">
            See Full Menu
          </Button>
        </div>
      </Section>

      <Section eyebrow="Come Say Hello" title="Visit Us">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="rounded-[8px] overflow-hidden aspect-[4/3] bg-sand">
            <iframe
              title="Map to Lucy's Coffee House"
              src="https://www.google.com/maps?q=Wells,UK&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
          <div className="font-body text-espresso space-y-6">
            <div>
              <h3 className="font-display text-2xl mb-2">Opening Hours</h3>
              <ul className="text-espresso-soft space-y-1">
                <li className="flex justify-between max-w-xs">
                  <span>Mon – Fri</span>
                  <span>7:30 – 16:00</span>
                </li>
                <li className="flex justify-between max-w-xs">
                  <span>Saturday</span>
                  <span>8:00 – 16:00</span>
                </li>
                <li className="flex justify-between max-w-xs">
                  <span>Sunday</span>
                  <span>9:00 – 15:00</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-2">Find Us</h3>
              <p className="text-espresso-soft">
                14 Mill Lane, Riverside
                <br />
                Wells, WE1 2AB
              </p>
            </div>
            <Button href="tel:+441234567890" variant="primary">
              Call Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
