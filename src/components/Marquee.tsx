const items = [
  "Legendary Biryani",
  "HITEC City",
  "Charminar",
  "KBR National Park",
  "Financial District",
  "Golconda Fort",
  "Hussain Sagar",
  "Irani Chai",
  "Ramoji Film City",
  "Laad Bazaar",
];

const List = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
  <div className="flex items-center flex-shrink-0" aria-hidden={ariaHidden}>
    {items.map((item) => (
      <span key={item} className="flex items-center">
        <span className="px-7 sm:px-10 text-xs sm:text-sm uppercase tracking-[0.3em] text-background/60 whitespace-nowrap">
          {item}
        </span>
        <span className="text-primary text-xs">✦</span>
      </span>
    ))}
  </div>
);

/** Slim scrolling ticker of city icons — sits between hero and first section. */
export const Marquee = () => (
  <div className="bg-foreground border-y border-background/10 py-4 overflow-hidden">
    <div className="marquee-track">
      <List />
      <List ariaHidden />
    </div>
  </div>
);
