import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SwipeRowProps {
  /** Grid + gap classes that describe the desktop layout, e.g. "grid grid-cols-1 md:grid-cols-2 gap-5". */
  className?: string;
  /** Extra classes for the outer wrapper — use this for trailing margins (mb-*) so spacing sits below the dots. */
  outerClassName?: string;
  children: ReactNode;
}

/**
 * Drop-in replacement for the bare `snap-row` card grid. Below 640px the grid
 * becomes a horizontal swipe carousel (existing CSS), and this adds the missing
 * affordance: pagination dots synced to scroll position so it reads as "swipe
 * for more" instead of a cut-off card. Dots are mobile-only and tappable.
 */
export function SwipeRow({ className, outerClassName, children }: SwipeRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(0);

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const kids = Array.from(el.children) as HTMLElement[];
    setCount(kids.length);
    const base = el.getBoundingClientRect().left;
    let nearest = 0;
    let min = Infinity;
    kids.forEach((kid, i) => {
      const left = kid.getBoundingClientRect().left - base + el.scrollLeft;
      const dist = Math.abs(left - el.scrollLeft);
      if (dist < min) {
        min = dist;
        nearest = i;
      }
    });
    setActive(nearest);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      el.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure, children]);

  // One-time "swipe me" hint: when the carousel first scrolls into view on
  // mobile, gently slide to reveal the next card and bounce back so the swipe
  // affordance is obvious even when a single tall card fills the screen.
  const nudged = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(min-width: 640px)").matches) return; // desktop is a static grid
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || nudged.current) continue;
          if (el.scrollWidth - el.clientWidth < 24) continue; // nothing to swipe to
          nudged.current = true;
          io.disconnect();
          // Mandatory snap would yank a small nudge straight back to 0, so
          // disable it for the duration of the hint, then restore.
          const peek = Math.min(36, el.scrollWidth - el.clientWidth);
          el.style.scrollSnapType = "none";
          el.scrollTo({ left: peek, behavior: "smooth" });
          window.setTimeout(() => el.scrollTo({ left: 0, behavior: "smooth" }), 600);
          window.setTimeout(() => {
            el.style.scrollSnapType = "";
          }, 1100);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const scrollToIndex = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const kid = el.children[i] as HTMLElement | undefined;
    if (kid) el.scrollTo({ left: kid.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  return (
    <div className={cn("relative", outerClassName)}>
      <div ref={ref} className={cn("snap-row", className)}>
        {children}
      </div>

      {/* Pagination dots — only render on mobile (the carousel breakpoint) and
          only when there is more than one slide. */}
      {count > 1 && (
        <div className="sm:hidden flex items-center justify-center gap-1.5 mt-5">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to item ${i + 1} of ${count}`}
              aria-current={i === active}
              onClick={() => scrollToIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === active ? "w-6 bg-primary" : "w-1.5 bg-primary/25"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
