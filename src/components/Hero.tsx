"use client";

import { motion } from "framer-motion";
import DishImage from "./DishImage";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
      <DishImage
        src="/images/hero.jpg"
        alt="Warm morning light over coffee and fresh breakfast"
        className="absolute inset-0 h-full w-full"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/25 to-espresso/10" />

      <div className="relative z-10 flex h-full flex-col items-center justify-end px-5 pb-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-script text-5xl md:text-6xl text-oat-cream mb-2"
        >
          Lucy&apos;s Coffee House
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-body text-sm md:text-base tracking-wide text-oat-cream/90 mb-8"
        >
          Fresh Breakfast &nbsp;•&nbsp; Great Coffee &nbsp;•&nbsp; Homemade Cakes
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Button href="/menu/breakfast" variant="primary">
            Explore Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
