import { Reveal } from "@/components/Reveal";

export interface EditorialListItem {
  /** Small uppercase eyebrow above the title (type / season / category). */
  lead?: string;
  title: string;
  /** Right-aligned scalar — price, cost, salary, rating, etc. */
  value?: string;
  /** One-line meta under the title (where / location / duration). */
  meta?: string;
  /** Longer descriptive sentence. */
  description?: string;
  /** Closing tip line. */
  note?: string;
}

/**
 * Magazine-style numbered list. Replaces uniform card grids for list-like
 * content (dishes, venues, experiences, jobs…). Naturally vertical, so it needs
 * no carousel / swipe affordance on mobile. The section header stays in the page.
 */
export function EditorialList({
  items,
  startIndex = 1,
}: {
  items: EditorialListItem[];
  startIndex?: number;
}) {
  return (
    <div className="border-t border-border">
      {items.map((item, i) => (
        <Reveal key={`${item.title}-${i}`} delay={(i % 4) * 60}>
          <div className="group flex items-start gap-4 sm:gap-6 border-b border-border py-5 sm:py-6 transition-colors hover:bg-muted/30">
            <span className="w-7 sm:w-10 shrink-0 pt-1 text-sm font-semibold tabular-nums text-primary/30 transition-colors group-hover:text-primary/60">
              {String(startIndex + i).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1">
              {item.lead && (
                <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-primary">
                  {item.lead}
                </p>
              )}
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-bold tracking-tight sm:text-xl">{item.title}</h3>
                {item.value && (
                  <span className="shrink-0 whitespace-nowrap text-sm font-semibold text-primary sm:text-base">
                    {item.value}
                  </span>
                )}
              </div>
              {item.meta && <p className="mt-1 text-sm text-muted-foreground">{item.meta}</p>}
              {item.description && (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              )}
              {item.note && (
                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Tip: </span>
                  {item.note}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
