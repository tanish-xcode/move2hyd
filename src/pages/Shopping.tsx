import { Navigation } from "@/components/Navigation";
import { SectionNav } from "@/components/SectionNav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SwipeRow } from "@/components/SwipeRow";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import heroImage from "@/assets/explore-shopping.jpg";

export default function Shopping() {
  const malls = [
    { name: "Inorbit Mall", location: "Madhapur, HITEC City", details: "200+ brands including Zara, H&M, Forever 21. PVR multiplex, 40+ restaurants. Open 11 AM-10 PM. Best food court, tech professionals' favorite. ₹40 parking for 4 hours.", tip: "Weekday evenings less crowded. Apple Premium Reseller here. Valet parking available." },
    { name: "GVK One Mall", location: "Banjara Hills", details: "Luxury shopping - Louis Vuitton, Burberry, Hugo Boss. Fine dining: Tuscany, Hard Rock Cafe. PVR Director's Cut. Open 11 AM-11 PM.", tip: "Most upscale mall. Dress well. Great restaurants. Expensive but quality shopping experience." },
    { name: "Forum Sujana", location: "Kukatpally", details: "Reliance Trends, Max, Decathlon. AMB Cinemas. Family-friendly. Open 10 AM-10 PM. Ample free parking.", tip: "Less crowded than city center. Good for sports equipment at Decathlon. Family destination." },
    { name: "Sarath City", location: "Kondapur", details: "300+ stores, largest in South India. Cinepolis (10 screens), Snow World. Open 10 AM-11 PM. Parking for 3000+ cars.", tip: "Full day outing. Snow World ₹450 separate ticket. Very crowded weekends. Kids love it." }
  ];

  const markets = [
    { name: "Laad Bazaar", type: "Bangles & Jewelry", location: "Near Charminar", details: "Famous for lac bangles (₹100-500), pearl jewelry (₹500-50,000+), traditional accessories. 10 AM-9 PM. Evening most vibrant.", tip: "Bargain hard - start at 50%. Mangatrai Pearls for authentic pearls. Cash only. Watch belongings in crowds." },
    { name: "Begum Bazaar", type: "Textiles & Wholesale", location: "Old City", details: "Massive wholesale market. Fabric, clothes, household items. 9 AM-9 PM. Wholesale prices for bulk.", tip: "Morning visit best. Wholesale rates if buying quantity. Very crowded. Bring your own bags." },
    { name: "Shilparamam", type: "Handicrafts", location: "Madhapur", details: "Arts village with crafts from all India. Fixed prices. Entry ₹50. 10:30 AM-8:30 PM, closed Mondays. Cultural shows weekends.", tip: "Authentic crafts, fair prices. Good for souvenirs. Weekend cultural programs. Bring hat/sunscreen." },
    { name: "Chandana Brothers", type: "Perfumes & Attars", location: "Pathergatti, Old City", details: "Famous since 1933. Traditional attars (₹200-5000), essential oils. Fixed prices. 10 AM-9 PM.", tip: "Try before buying. Long-lasting natural fragrances. Great for gifts. Ask for recommendations based on preference." }
  ];

  const specialty = [
    { name: "Karachi Bakery", what: "Fruit biscuits (₹200-400/kg), Osmania biscuits. Multiple locations. Best bakery for gifts. Pre-packed items travel well." },
    { name: "Pista House", what: "Haleem (Ramadan), Qubani ka meetha, sweets. 20+ branches. Best haleem in city." },
    { name: "Meena Bazaar", what: "Silk sarees, ethnic wear, jewelry. Begumpet, Kukatpally. Festival sales good. Bridal section excellent." },
    { name: "Fab India", what: "Ethnic wear, handloom, home decor. Banjara Hills, Jubilee Hills. Fixed prices, good quality. Sales Jan & July." }
  ];

  const tips = [
    { title: "Bargaining", points: ["Start at 40-50% of price", "Walk away technique works", "Cash gets discounts", "Bulk purchases better rates", "Malls have fixed prices", "Old City expects bargaining"] },
    { title: "Best Times", points: ["Weekday afternoons least crowded", "Evening 6-9 PM markets vibrant", "Festival seasons for sales", "End-season sales Jan & July", "Avoid weekend mornings"] },
    { title: "Famous Items", points: ["Pearls - Laad Bazaar best", "Lac bangles unique to city", "Bidri ware handicraft", "Handloom fabrics", "Traditional perfumes", "Sweets and bakery"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        eyebrow="Shopping"
        title="Pearls to Premium Retail"
        subtitle="From Laad Bazaar's pearls to Sarath City's 300+ stores — India's pearl capital."
        image={heroImage}
        imageAlt="Hyderabad shopping"
      >
        <div className="flex flex-wrap gap-2.5">
          {[
            { value: "300+", label: "Stores at Sarath City" },
            { value: "400+", label: "Years of Laad Bazaar" },
            { value: "#1", label: "Pearl Capital of India" },
          ].map((fact) => (
            <div key={fact.label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 text-white text-sm">
              <span className="font-semibold">{fact.value}</span> <span className="text-white/60">{fact.label}</span>
            </div>
          ))}
        </div>
      </PageHero>
      <SectionNav label="Culture" links={[
        { title: "Culture", path: "/culture" },
        { title: "Heritage", path: "/heritage" },
        { title: "Cuisine", path: "/cuisine" },
        { title: "Shopping", path: "/shopping" },
        { title: "Nightlife", path: "/nightlife" },
      ]} />

{/* Malls */}
      <section className="py-14 sm:py-28 px-6 sm:px-10">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
                <span className="text-muted-foreground/60 mr-3">01</span>The Modern
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Premium malls.
              </h2>
            </div>
            <p className="text-muted-foreground text-base max-w-xs sm:text-right leading-relaxed">
              International brands, multiplexes, and food courts across the city.
            </p>
          </Reveal>

          <SwipeRow className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {malls.map((m, i) => (
              <Reveal key={m.name} delay={(i % 2) * 100} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-7 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 flex flex-col">
                  <h3 className="text-xl font-bold tracking-tight mb-1.5">{m.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 text-muted-foreground/60" />
                    <span>{m.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{m.details}</p>
                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">Tip: </span>{m.tip}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </SwipeRow>
        </div>
      </section>

      {/* Markets & Bazaars */}
      <section className="py-14 sm:py-28 px-6 sm:px-10 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">02</span>The Traditional
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Markets & bazaars.
            </h2>
          </Reveal>

          <SwipeRow className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {markets.map((m, i) => (
              <Reveal key={m.name} delay={(i % 2) * 100} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-7 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 flex flex-col">
                  <p className="text-xs uppercase tracking-[0.15em] text-primary font-semibold mb-2">{m.type}</p>
                  <h3 className="text-xl font-bold tracking-tight mb-1.5">{m.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 text-muted-foreground/60" />
                    <span>{m.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{m.details}</p>
                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">Tip: </span>{m.tip}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </SwipeRow>
        </div>
      </section>

      {/* Specialty Stores */}
      <section className="py-14 sm:py-28 px-6 sm:px-10">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">03</span>The Originals
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Specialty stores.
            </h2>
          </Reveal>

          <SwipeRow className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {specialty.map((s, i) => (
              <Reveal key={s.name} delay={(i % 4) * 90} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-6 sm:p-7 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1">
                  <h3 className="font-bold tracking-tight mb-2">{s.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.what}</p>
                </div>
              </Reveal>
            ))}
          </SwipeRow>
        </div>
      </section>

      {/* Shopping Tips */}
      <section className="py-14 sm:py-28 px-6 sm:px-10 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">04</span>Shop Smart
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
              Tips from the locals.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-0 border-t border-border">
            {tips.map((t, i) => (
              <Reveal key={t.title} delay={i * 110}>
                <div className="pt-8 pb-6 md:pr-10 md:border-r border-border last:border-r-0 h-full">
                  <p className="text-5xl font-bold tracking-tight text-muted-foreground/20 mb-5">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-bold text-lg tracking-tight mb-3">{t.title}</h3>
                  <ul className="space-y-1.5">
                    {t.points.map((p) => (
                      <li key={p} className="text-sm text-muted-foreground flex gap-2 leading-relaxed">
                        <span className="text-primary">·</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
