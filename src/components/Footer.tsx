import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-espresso text-oat-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <p className="font-script text-3xl mb-3">Lucy&apos;s</p>
          <p className="font-body text-sm text-oat-cream/70 leading-relaxed">
            An independent coffee house serving fresh breakfast, great
            coffee and homemade cakes.
          </p>
        </div>

        <div>
          <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-oat-cream/50 mb-3">
            Opening Hours
          </h4>
          <ul className="font-body text-sm text-oat-cream/80 space-y-1.5">
            <li className="flex justify-between gap-6">
              <span>Mon – Fri</span>
              <span>7:30 – 16:00</span>
            </li>
            <li className="flex justify-between gap-6">
              <span>Saturday</span>
              <span>8:00 – 16:00</span>
            </li>
            <li className="flex justify-between gap-6">
              <span>Sunday</span>
              <span>9:00 – 15:00</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-body text-xs font-semibold uppercase tracking-widest text-oat-cream/50 mb-3">
            Visit
          </h4>
          <p className="font-body text-sm text-oat-cream/80 leading-relaxed">
            14 Mill Lane, Riverside
            <br />
            Wells, WE1 2AB
            <br />
            <a href="tel:+441234567890" className="hover:text-terracotta">
              01234 567 890
            </a>
          </p>
          <div className="flex gap-4 mt-4 font-body text-sm">
            <Link href="#" className="text-oat-cream/70 hover:text-terracotta">
              Instagram
            </Link>
            <Link href="#" className="text-oat-cream/70 hover:text-terracotta">
              Facebook
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-oat-cream/10">
        <p className="mx-auto max-w-6xl px-5 py-5 font-body text-xs text-oat-cream/50">
          © {new Date().getFullYear()} Lucy&apos;s Coffee House. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
