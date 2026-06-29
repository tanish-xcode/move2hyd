import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Display value, e.g. "1,500+", "10M+", "30%", "₹15,000" */
  value: string;
  duration?: number;
  className?: string;
}

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * Animates the numeric part of a stat string (prefix and suffix preserved)
 * the first time it scrolls into view. Falls back to static text when the
 * value isn't parseable or the user prefers reduced motion.
 */
export const CountUp = ({ value, duration = 1500, className }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const match = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (!match || reduced || !el || typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr.replace(/,/g, ""));
    const useGrouping = numStr.includes(",");
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    const format = (n: number) =>
      prefix +
      n.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
        useGrouping,
      }) +
      suffix;

    setDisplay(format(0));

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          setDisplay(format(target * easeOutExpo(p)));
          if (p < 1) requestAnimationFrame(tick);
          else setDisplay(value);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};
