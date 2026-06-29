import { Navigation } from "@/components/Navigation";
import { SectionNav } from "@/components/SectionNav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ArrowRight, Footprints } from "lucide-react";
import heroImage from "@/assets/cuisine-biryani.jpg";

export default function Cuisine() {
  const signatureDishes = [
    {
      name: "Hyderabadi Biryani",
      description: "World-famous aromatic basmati rice with tender meat (mutton/chicken), cooked in Dum Pukht style with saffron, mint, and 20+ spices. Two variants: Kacchi (raw meat) and Pakki (pre-cooked meat).",
      where: ["Paradise (multiple locations)", "Bawarchi (RTC Cross Roads)", "Shadab (Old City)", "Shah Ghouse (Tolichowki - open 24/7)"],
      price: "₹200-500",
      bestTime: "Lunch or dinner, avoid peak hours",
      tips: "Try both Kacchi & Pakki to compare. Order with raita, mirchi ka salan, shorba. Paradise and Bawarchi most consistent. Shah Ghouse for late-night cravings."
    },
    {
      name: "Haleem",
      description: "Slow-cooked stew of wheat, barley, lentils, and meat for 6-8 hours. Extremely popular during Ramadan. Rich, thick consistency with aromatic spices. UNESCO Intangible Heritage.",
      where: ["Pista House (multiple locations)", "Hotel Shadab", "Shah Ghouse", "Sarvi Restaurant"],
      price: "₹200-350",
      bestTime: "Ramadan season (best quality & variety), available year-round",
      tips: "Best during Ramadan with special preparation. Add lemon, fried onions, mint. Take parcel for home if queue is long. Pista House most famous."
    },
    {
      name: "Irani Chai",
      description: "Milky sweet tea brewed in traditional style with strong decoction, milk, and sugar. Served in small cups/glasses. Quintessential Hyderabad experience at century-old Irani cafes.",
      where: ["Cafe Niloufer (Red Hills, Lakdikapul)", "Nimrah Cafe (Charminar - 24/7)", "Grand Hotel (Abids)", "Blue Sea (Tolichowki)"],
      price: "₹20-40 per cup",
      bestTime: "Morning breakfast or evening snacks",
      tips: "Order 'special chai' for extra strong. Must try with Osmania biscuits or bun maska. Nimrah open 24 hours. Most cafes cash-only."
    },
    {
      name: "Lukhmi",
      description: "Crispy square/diamond-shaped pastry filled with spiced minced meat. Hyderabad's version of samosa, flakier and more savory. Perfect tea-time snack.",
      where: ["Nimrah Cafe", "Cafe 555", "Local bakeries in Old City", "Karachi Bakery"],
      price: "₹30-60 per piece",
      bestTime: "Evening snacks with chai",
      tips: "Best when fresh and hot. Dip in mint chutney. Nimrah's lukhmi legendary. Vegetarian versions available at some places."
    },
    {
      name: "Patthar Ka Gosht",
      description: "Boneless mutton pieces marinated in spices, cooked on hot stone slab. Tender, smoky flavor, served sizzling hot. Unique cooking technique.",
      where: ["Hotel Shadab", "Shah Ghouse", "Alpha Hotel (Ghansi Bazaar)", "Sarvi Restaurant"],
      price: "₹300-600",
      bestTime: "Dinner",
      tips: "Order with roomali roti or naan. Best with mint chutney. Watch it being cooked on stone. Shadab most authentic. Extremely tender."
    },
    {
      name: "Qubani Ka Meetha",
      description: "Apricot dessert made from dried apricots slow-cooked with sugar. Served with khoya (milk solids) and dry fruits. Rich, aromatic, mildly sweet.",
      where: ["Paradise", "Bawarchi", "Hotel Shadab", "Most biryani restaurants"],
      price: "₹100-200",
      bestTime: "After biryani meals",
      tips: "Best served slightly warm. Some add vanilla ice cream. Original version less sweet. Share one portion between 2-3 people."
    }
  ];

  const restaurants = [
    {
      name: "Paradise Restaurant",
      specialty: "Hyderabadi Biryani (most famous)",
      location: "Multiple locations - Secunderabad, Paradise Circle, Begumpet",
      atmosphere: "Casual dining, family-friendly",
      mustTry: "Mutton biryani, Qubani ka meetha",
      price: "₹₹",
      hours: "11 AM - 11 PM",
      tip: "Most consistent quality. Try original Secunderabad branch. Long queues during peak hours. Takeaway available."
    },
    {
      name: "Bawarchi",
      specialty: "Authentic biryani & kebabs",
      location: "RTC Cross Roads (original), multiple branches",
      atmosphere: "No-frills, pure food focus",
      mustTry: "Chicken biryani, kebabs, nihari",
      price: "₹₹",
      hours: "11:30 AM - 11:30 PM",
      tip: "Spicier than Paradise. Original RTC location best. Try their chicken 65. Local favorite."
    },
    {
      name: "Hotel Shadab",
      specialty: "Haleem, Patthar ka gosht, traditional Hyderabadi",
      location: "Old City (near Charminar)",
      atmosphere: "Traditional, heritage feel",
      mustTry: "Haleem, patthar ka gosht, biryani, desserts",
      price: "₹₹",
      hours: "11 AM - 11 PM",
      tip: "Best for authentic Old City experience. Must try haleem. Good for complete Hyderabadi meal."
    },
    {
      name: "Shah Ghouse",
      specialty: "24/7 biryani & haleem",
      location: "Tolichowki, multiple locations",
      atmosphere: "Busy, quick service",
      mustTry: "Mutton biryani, haleem",
      price: "₹₹",
      hours: "Open 24/7",
      tip: "Go-to for late-night cravings. Always crowded. Quick service. Parking can be challenge."
    },
    {
      name: "Cafe Niloufer",
      specialty: "Irani chai, Osmania biscuits",
      location: "Red Hills, Lakdikapul",
      atmosphere: "Classic Irani cafe, bustling",
      mustTry: "Special chai, Osmania biscuits, bun maska",
      price: "₹",
      hours: "6 AM - 11 PM",
      tip: "Morning visit best. Stand and sip chai like locals. Try double chai (stronger). Always packed."
    },
    {
      name: "Nimrah Cafe & Bakery",
      specialty: "24/7 chai, bakery items",
      location: "Charminar (near monument)",
      atmosphere: "Iconic location, tourist & local mix",
      mustTry: "Irani chai, lukhmi, khari biscuits",
      price: "₹",
      hours: "Open 24/7",
      tip: "Perfect after Charminar visit. Open all night. Try their lukhmi. Always crowded but service quick."
    }
  ];

  const foodTrails = [
    {
      title: "Old City Food Walk",
      duration: "3-4 hours",
      route: "Charminar → Laad Bazaar → Mozamjahi Market → Pathergatti",
      highlights: ["Street kebabs at Patel Cafe", "Lukhmi at Nimrah", "Chai at multiple Irani cafes", "Dry fruits & nuts shopping", "Fresh fruit chaat"],
      bestTime: "Evening 5-9 PM",
      tip: "Go hungry! Wear comfortable shoes. Carry cash. Try multiple small portions. Join organized food tours for safety & guidance."
    },
    {
      title: "Irani Cafe Trail",
      duration: "Half day",
      route: "Grand Hotel (Abids) → Cafe Niloufer → Blue Sea → Nimrah",
      highlights: ["Compare chai styles", "Osmania biscuits", "Bun maska", "Khari biscuits", "Historic cafe ambiance"],
      bestTime: "Morning or evening",
      tip: "Pace yourself - lots of chai! Each cafe has unique character. Most cash-only. Try different biscuits at each."
    },
    {
      title: "Biryani Challenge",
      duration: "Full day (if you dare!)",
      route: "Paradise → Bawarchi → Shadab → Shah Ghouse",
      highlights: ["Compare biryani styles", "Kacchi vs Pakki", "Spice levels", "Meat quality", "Side dishes"],
      bestTime: "Spread over lunch & dinner or multiple days",
      tip: "Share portions! Take breaks. Order half plates. Have antacid ready. Each has distinct flavor profile."
    }
  ];

  const streetFood = [
    { item: "Pani Puri / Gol Gappa", where: "Gachibowli, Jubilee Hills, street vendors", price: "₹30-50", tip: "Ask for spice level. Fresh tamarind water best." },
    { item: "Dahi Puri", where: "Street vendors across city", price: "₹40-60", tip: "Evening snack. Ask for extra sev." },
    { item: "Kebabs (Seekh, Shami, Galouti)", where: "Old City near Charminar, Tolichowki", price: "₹50-150", tip: "Fresh off the grill. Try different types." },
    { item: "Fruit Chaat", where: "Mozamjahi Market, street corners", price: "₹30-80", tip: "Seasonal fruits with spices. Refreshing." }
  ];

  const cookingClasses = [
    {
      provider: "Nimrah Hospitality",
      focus: "Traditional Hyderabadi biryani, haleem, desserts",
      duration: "3-4 hours",
      price: "₹2000-3000 per person",
      includes: "Market tour, hands-on cooking, meal",
      booking: "Advance booking required"
    },
    {
      provider: "Local homes via Airbnb Experiences",
      focus: "Home-style Hyderabadi cooking",
      duration: "2-3 hours",
      price: "₹1500-2500",
      includes: "Family recipes, cooking session, dining together",
      booking: "Online via Airbnb"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        eyebrow="Cuisine"
        title="The Biryani Is Not a Debate"
        subtitle="Dum biryani, haleem, and ₹20 Irani chai — 400 years of culinary heritage."
        image={heroImage}
        imageAlt="Hyderabad cuisine"
      >
        <div className="flex flex-wrap gap-2.5">
          {[
            { value: "400+", label: "Years of Culinary Heritage" },
            { value: "24/7", label: "Biryani & Chai Spots" },
            { value: "₹20", label: "A Cup of Irani Chai" },
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

      {/* Signature Dishes */}
      <section className="py-14 sm:py-28 px-6 sm:px-10">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
                <span className="text-muted-foreground/60 mr-3">01</span>The Classics
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Dishes you must try.
              </h2>
            </div>
            <p className="text-muted-foreground text-base max-w-xs sm:text-right leading-relaxed">
              Six icons of Hyderabadi cuisine — and exactly where to eat them.
            </p>
          </Reveal>

          <div className="snap-row grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {signatureDishes.map((dish, i) => (
              <Reveal key={dish.name} delay={(i % 2) * 100} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-7 sm:p-8 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 flex flex-col">
                  <div className="flex items-baseline justify-between gap-4 mb-3">
                    <h3 className="text-2xl font-bold tracking-tight">{dish.name}</h3>
                    <span className="text-primary font-semibold whitespace-nowrap">{dish.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{dish.description}</p>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-primary font-semibold mb-2">Where to try</p>
                      <ul className="space-y-1">
                        {dish.where.map((place) => (
                          <li key={place} className="text-sm text-muted-foreground">{place}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-primary font-semibold mb-2">Best time</p>
                      <p className="text-sm text-muted-foreground">{dish.bestTime}</p>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">Insider tip: </span>{dish.tips}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurants */}
      <section className="py-14 sm:py-28 px-6 sm:px-10 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">02</span>The Institutions
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Where locals eat.
            </h2>
          </Reveal>

          <div className="snap-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {restaurants.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 100} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-6 sm:p-7 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h3 className="text-xl font-bold tracking-tight">{r.name}</h3>
                    <span className="text-sm text-muted-foreground">{r.price}</span>
                  </div>
                  <p className="text-sm text-primary font-medium mb-4">{r.specialty}</p>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground/60" />
                      <span>{r.location}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground/60" />
                      <span>{r.hours}</span>
                    </div>
                    <p><span className="font-medium text-foreground">Atmosphere:</span> {r.atmosphere}</p>
                    <p><span className="font-medium text-foreground">Must try:</span> {r.mustTry}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">Tip: </span>{r.tip}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Food Trails */}
      <section className="py-14 sm:py-28 px-6 sm:px-10">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">03</span>The Adventures
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Curated food trails.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-0 border-t border-border">
            {foodTrails.map((trail, i) => (
              <Reveal key={trail.title} delay={i * 110}>
                <div className="pt-8 pb-6 md:pr-10 md:border-r border-border last:border-r-0 h-full">
                  <Footprints className="w-6 h-6 text-primary/40 mb-5" />
                  <h3 className="font-bold text-lg tracking-tight mb-2">{trail.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{trail.route}</p>
                  <div className="space-y-1 text-sm text-muted-foreground mb-4">
                    <p><span className="font-medium text-foreground">Duration:</span> {trail.duration}</p>
                    <p><span className="font-medium text-foreground">Best time:</span> {trail.bestTime}</p>
                  </div>
                  <ul className="space-y-1 mb-4">
                    {trail.highlights.map((h) => (
                      <li key={h} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary">·</span>{h}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Tip: </span>{trail.tip}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Street Food & Cooking Classes */}
      <section className="py-14 sm:py-28 px-6 sm:px-10 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">04</span>Go Deeper
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
              Street eats & cooking classes.
            </h2>
          </Reveal>

          <div className="snap-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14">
            {streetFood.map((food, i) => (
              <Reveal key={food.item} delay={(i % 4) * 90} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-6 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1">
                  <h3 className="font-bold tracking-tight mb-2">{food.item}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{food.where}</p>
                  <p className="text-sm font-semibold text-primary mb-3">{food.price}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{food.tip}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-5 max-w-4xl">
            {cookingClasses.map((c, i) => (
              <Reveal key={c.provider} delay={i * 110} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-7 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-[0.15em] text-primary font-semibold mb-3">Cooking Class</p>
                  <h3 className="text-xl font-bold tracking-tight mb-3">{c.provider}</h3>
                  <div className="space-y-1.5 text-sm text-muted-foreground">
                    <p><span className="font-medium text-foreground">Focus:</span> {c.focus}</p>
                    <p><span className="font-medium text-foreground">Duration:</span> {c.duration}</p>
                    <p><span className="font-medium text-foreground">Price:</span> {c.price}</p>
                    <p><span className="font-medium text-foreground">Includes:</span> {c.includes}</p>
                    <p><span className="font-medium text-foreground">Booking:</span> {c.booking}</p>
                  </div>
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
