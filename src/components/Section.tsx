import { cn } from "@/lib/utils";

interface SectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className={cn("mx-auto max-w-6xl px-5", containerClassName)}>
        {(eyebrow || title || subtitle) && (
          <div className="mb-10 md:mb-14 text-center">
            {eyebrow && (
              <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-terracotta mb-3">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-4xl md:text-5xl text-espresso">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="font-body text-espresso-soft mt-3 max-w-md mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
