import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export interface FeatureRowItem {
  title: string;
  description?: string;
  icon?: LucideIcon;
  /** Pill tags shown under the description. */
  chips?: string[];
  /** Closing tip line. */
  tip?: string;
}

/**
 * Bold, large, alternating rows for the lead "pillars / why / what makes it
 * unique" section. Big faded index numerals, generous spacing, no boxes — the
 * editorial hero treatment that breaks up a page of card grids.
 */
export function FeatureRows({ items }: { items: FeatureRowItem[] }) {
  return (
    <div className="border-t border-border">
      {items.map((item, i) => {
        const Icon = item.icon;
        const flipped = i % 2 === 1;
        return (
          <Reveal key={item.title} delay={(i % 2) * 80}>
            <div
              className={cn(
                "flex flex-col gap-5 border-b border-border py-8 sm:py-10 md:flex-row md:items-start md:gap-10",
                flipped && "md:flex-row-reverse"
              )}
            >
              <div className={cn("flex items-center gap-4 md:w-1/3", flipped && "md:justify-end")}>
                <span className="text-5xl font-bold leading-none tabular-nums text-primary/15 sm:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {Icon && (
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                )}
              </div>

              <div className={cn("md:flex-1", flipped && "md:text-right")}>
                <h3 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">{item.title}</h3>
                {item.description && (
                  <p className="mb-4 leading-relaxed text-muted-foreground sm:text-lg">{item.description}</p>
                )}
                {item.chips && item.chips.length > 0 && (
                  <div className={cn("mb-4 flex flex-wrap gap-2", flipped && "md:justify-end")}>
                    {item.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                )}
                {item.tip && (
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">Tip: </span>
                    {item.tip}
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
