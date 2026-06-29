import { Facebook, Instagram, Twitter, Youtube, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const scrollToMoveGuide = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('move-guide')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const columns = [
    {
      title: "Living",
      links: [
        { label: "Neighborhoods", to: "/living-here#neighborhoods" },
        { label: "Cost of Living", to: "/living-here#cost-of-living" },
        { label: "Schools", to: "/living-here#education" },
        { label: "Healthcare", to: "/living-here#healthcare" },
      ],
    },
    {
      title: "Working",
      links: [
        { label: "Tech Jobs", to: "/work-tech#employers" },
        { label: "Startups", to: "/work-tech#ecosystem" },
        { label: "Coworking Spaces", to: "/work-tech#culture" },
        { label: "Business Guide", to: "/work-tech#salary" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Heritage", to: "/heritage" },
        { label: "Cuisine", to: "/cuisine" },
        { label: "Shopping", to: "/shopping" },
        { label: "Nightlife", to: "/nightlife" },
      ],
    },
  ];

  const socials = [
    { icon: Facebook, label: "Facebook" },
    { icon: Instagram, label: "Instagram" },
    { icon: Twitter, label: "Twitter" },
    { icon: Youtube, label: "YouTube" },
  ];

  return (
    <footer className="relative bg-foreground text-background overflow-hidden grain">
      <div className="relative z-10 container mx-auto max-w-7xl px-6 sm:px-10">

        {/* CTA row */}
        <div className="py-16 sm:py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-background/10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] text-background max-w-xl">
            Ready to call Hyderabad home?
          </h2>
          <button
            onClick={scrollToMoveGuide}
            className="group inline-flex items-center gap-3 self-start md:self-auto px-7 py-3.5 rounded-full bg-background text-foreground font-semibold text-sm hover:bg-background/90 transition-colors"
          >
            Plan your move
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Link columns */}
        <div className="py-12 sm:py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 space-y-4">
            <p className="font-bold text-lg tracking-tight text-background">move2hyderabad</p>
            <p className="text-background/50 text-sm leading-relaxed max-w-xs">
              Where innovation meets heritage — discover your future home.
            </p>
            <p className="text-background/35 text-xs">A non-profit ASBL initiative</p>
            <div className="flex gap-2.5 pt-2">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-background/15 hover:border-background/40 hover:bg-background/5 flex items-center justify-center transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-background/40 mb-5">{col.title}</h4>
              <ul className="space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-background/70 hover:text-background transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal */}
        <div className="py-7 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/40">
          <p>© 2025 Move to Hyderabad. All rights reserved. · An ASBL Initiative</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-background/80 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:text-background/80 transition-colors">Terms of Use</Link>
            <a href="#" className="hover:text-background/80 transition-colors">Contact</a>
          </div>
        </div>

      </div>

      {/* Giant wordmark — outside container so it spans full width */}
      <div aria-hidden className="select-none pointer-events-none -mb-3 sm:-mb-5 overflow-hidden">
        <p className="text-[13.5vw] leading-[0.78] font-extrabold tracking-tighter text-background/[0.06] whitespace-nowrap px-6 sm:px-10">
          move2hyderabad
        </p>
      </div>

    </footer>
  );
};
