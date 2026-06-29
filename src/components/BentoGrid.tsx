import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export interface BentoItem {
  /** Small uppercase eyebrow. */
  lead?: string;
  title: string;
  /** Short meta line (year, location). */
  subtitle?: string;
  /** One descriptive line. */
  description?: string;
}

/**
 * Mixed-size tile grid for short-label visual sets (specialty stores, tech
 * parks, areas). The first item is a large featured indigo tile spanning the
 * full width; the rest fall into a two-column grid of light cards. Breaks the
 * uniform card grid without needing a carousel.
 */
export function BentoGrid({ items }: { items: BentoItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {items.map((item, i) => {
        const featured = i === 0;
        return (
          <Reveal
            key={`${item.title}-${i}`}
            delay={(i % 4) * 60}
            className={cn(featured && "col-span-2")}
          >
            <div
              className={cn(
                "flex h-full flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6",
                featured
                  ? "min-h-[140px] bg-primary text-primary-foreground sm:min-h-[180px]"
                  : "border border-border bg-card hover:shadow-[var(--shadow-lift)]"
              )}
            >
              {item.lead && (
                <p
                  className={cn(
                    "mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.15em]",
                    featured ? "text-primary-foreground/70" : "text-primary"
                  )}
                >
                  {item.lead}
                </p>
              )}
              <h3
                className={cn(
                  "font-bold tracking-tight",
                  featured ? "text-2xl sm:text-3xl" : "text-base sm:text-lg"
                )}
              >
                {item.title}
              </h3>
              {item.subtitle && (
                <p
                  className={cn(
                    "mt-1 text-sm",
                    featured ? "text-primary-foreground/70" : "text-muted-foreground"
                  )}
                >
                  {item.subtitle}
                </p>
              )}
              {item.description && (
                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    featured ? "text-primary-foreground/80" : "text-muted-foreground"
                  )}
                >
                  {item.description}
                </p>
              )}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
