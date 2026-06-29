import { Link, useLocation } from "react-router-dom";

interface SectionNavProps {
  label: string;
  links: { title: string; path: string }[];
}

export const SectionNav = ({ label, links }: SectionNavProps) => {
  const { pathname } = useLocation();

  return (
    <div className="sticky top-[3.5rem] z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-0">
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/50 font-medium shrink-0 pr-3 border-r border-border mr-2">
            {label}
          </span>
          {links.map((link) => {
            const active = pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  active
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
