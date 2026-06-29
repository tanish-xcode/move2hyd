import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll position to the top on every route change.
 *
 * The reset is re-asserted across the next few frames because the
 * destination page can scroll itself after mount — e.g. images loading
 * and shifting layout, or Radix components moving focus. A single
 * scroll-to-top fires too early and gets overridden, leaving the user
 * mid-page (looked like landing on the footer).
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    const toTop = () => {
      window.scrollTo(0, 0);
      html.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    toTop();
    const raf = requestAnimationFrame(toTop);
    const t1 = window.setTimeout(toTop, 60);
    const t2 = window.setTimeout(() => {
      toTop();
      html.style.scrollBehavior = prevBehavior;
    }, 180);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      html.style.scrollBehavior = prevBehavior;
    };
  }, [pathname]);

  return null;
};
