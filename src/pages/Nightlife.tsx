import { Navigation } from "@/components/Navigation";
import { SectionNav } from "@/components/SectionNav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { EditorialList } from "@/components/EditorialList";
import { BentoGrid } from "@/components/BentoGrid";
import { Shield } from "lucide-react";
import heroImage from "@/assets/explore-nightlife.jpg";

export default function Nightlife() {
  const venues = [
    { name: "Hard Rock Cafe", type: "Live Music & Dining", location: "Hitec City & Banjara Hills", details: "Iconic rock-themed restaurant. Live bands Thu-Sat. International cuisine. Happy hours 12-7 PM. ₹2000-3000 for 2. Entry free for diners. Cover charge ₹500-1500 for events.", timing: "12 PM - 1 AM", tip: "Book ahead for weekend bands. Great for rock music lovers. Good food quality. Check event calendar." },
    { name: "10 Downing Street", type: "Premium Pub", location: "Banjara Hills, Jubilee Hills (3 outlets)", details: "British-themed pub. Extensive drinks menu. Sports screenings. Live music weekends. Happy hours 12-7 PM. ₹1500-2500 for 2.", timing: "12 PM - 11:30 PM", tip: "Popular for sports matches. Reservations recommended weekends. Good beer selection. Upscale crowd." },
    { name: "Aqua", type: "Lounge Bar", location: "Park Hyatt, Banjara Hills", details: "Upscale poolside lounge. DJ nights Thu-Sat. International cocktails. ₹3000-4000 for 2. Smart casuals required.", timing: "7 PM - 12 AM", tip: "Expensive but elegant. Perfect for special occasions. Beautiful ambiance. Advance booking essential weekends." },
    { name: "Bottles & Chimney", type: "Rooftop Restaurant", location: "Financial District & Jubilee Hills", details: "Pan-Asian cuisine with city views. Rooftop seating. Cocktails and mocktails. ₹2000-3000 for 2. Reservations recommended.", timing: "12 PM - 11:30 PM", tip: "Request rooftop table at booking. Sunset timing best. Romantic atmosphere. Good for dates." },
    { name: "Playboy Club", type: "Nightclub", location: "Banjara Hills", details: "Luxury nightclub. International DJs. Dance floor. Premium drinks. Entry ₹1500-3000 (includes drinks). Couples preferred.", timing: "9 PM - 1 AM (Thu-Sat)", tip: "Dress code strictly enforced - smart casuals. Book table for groups. Most happening Thu-Sat. Expensive drinks." },
    { name: "Prost!", type: "Microbrewery", location: "Multiple locations - Jubilee Hills, Kondapur, Hitech", details: "In-house brewed beers. German-style brewery. Pub food. ₹1500-2000 for 2. Try different beer variants.", timing: "12 PM - 11:30 PM", tip: "Try their beer tasting flights. Good food menu. Less crowded weekdays. Family-friendly till evening." },
    { name: "The Fisherman's Wharf", type: "Coastal Restaurant & Bar", location: "Hitech City", details: "Goan/coastal cuisine. Live music. Waterfront ambiance. ₹2000-2500 for 2. Seafood specialty.", timing: "12 PM - 11:30 PM", tip: "Best for seafood lovers. Live music weekends. Nice ambiance. Good for groups." }
  ];

  const rooftops = [
    { name: "Over The Moon", location: "Jubilee Hills", vibe: "Rooftop lounge with skyline views, Mediterranean food, cocktails. ₹2500 for 2. Romantic setting.", tip: "Book sunset slot. Weekends need advance booking." },
    { name: "Chill Grill", location: "Somajiguda", vibe: "Rooftop BBQ restaurant. City views. Live grills. ₹1800 for 2. Casual vibe.", tip: "Try their BBQ platters. Good for groups. Nice evening breeze." },
    { name: "Altitude Lounge", location: "Financial District", vibe: "High-rise rooftop bar. Cocktails. City lights. ₹2000 for 2. Chic atmosphere.", tip: "Evening best time. Dress well. Make reservations." }
  ];

  const lateNight = [
    { name: "Shah Ghouse", details: "Open 24/7. Famous biryani. Old City & Tolichowki. Late-night food destination.", price: "₹400 for 2" },
    { name: "Mohammedia Shawarma", details: "Till 2 AM. Best shawarma. Tolichowki. Late-night favorite.", price: "₹200 for 2" },
    { name: "Hotel Rumaan", details: "Till 1 AM. Biryani, kebabs. Old City. Post-party food spot.", price: "₹500 for 2" },
    { name: "Cafe Coffee Day", details: "24/7 outlets. Coffee, snacks. Multiple locations. Safe late-night hangout.", price: "₹300 for 2" }
  ];

  const entertainment = [
    { name: "PVR IMAX", details: "Premium movie experience. Hitec City, Forum Mall. Late shows till 12 AM. ₹400-800 per ticket. Book online." },
    { name: "Escape Rooms", details: "Mystery Rooms, Breakout. Group activity. 6 PM-11 PM. ₹500-800 per person. Team building fun." },
    { name: "Bowling Alleys", details: "Smaaash, Amoeba. Cosmic bowling nights. Till 11 PM. ₹300-500 per game. Groups enjoy." },
    { name: "Shisha Lounges", details: "Multiple in Jubilee Hills. Hookah, music. Till 11:30 PM. ₹800-1500. Relaxed vibe." }
  ];

  const safetyTips = [
    "Use Ola/Uber for transport. Don't drink and drive. DUI strictly enforced.",
    "Most bars/clubs close by 11:30 PM-12 AM except special permits.",
    "Entry age 21+ for alcohol-serving venues. ID required.",
    "Couples entry easier at clubs. Stag entry may have higher cover charges.",
    "Banjara Hills, Jubilee Hills, Hitec City safest nightlife areas.",
    "Keep emergency contacts handy. Travel in groups late night."
  ];

  const weeklyGuide = [
    { day: "Monday-Wednesday", scene: "Quieter. Happy hours best time. Microbreweries good. Live music limited. Good for casual drinks." },
    { day: "Thursday", scene: "Picks up steam. Ladies' nights at some places. DJ nights start. Moderate crowds." },
    { day: "Friday-Saturday", scene: "Peak nightlife. All venues packed. Advance booking essential. Cover charges apply. Best DJ nights." },
    { day: "Sunday", scene: "Sunday brunches popular. Sundowners. Early closing. Relaxed vibe. Good for casual outings." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        eyebrow="Nightlife"
        title="After Dark, It Glows"
        subtitle="100+ bars and pubs, rooftop lounges, and 24/7 late-night eats."
        image={heroImage}
        imageAlt="Hyderabad nightlife"
      >
        <div className="flex flex-wrap gap-2.5">
          {[
            { value: "100+", label: "Bars & Pubs" },
            { value: "24/7", label: "Late-Night Eats" },
            { value: "Thu-Sat", label: "Peak Nights" },
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

      {/* Bars & Clubs */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7 sm:mb-8">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
                <span className="text-muted-foreground/50 mr-2">01</span>The Venues
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Bars & nightclubs.
              </h2>
            </div>
            <p className="text-muted-foreground text-base max-w-xs sm:text-right leading-relaxed">
              Where the city goes for drinks, music, and dancing.
            </p>
          </Reveal>

          <EditorialList
            items={venues.map((v) => ({
              lead: v.type,
              title: v.name,
              meta: `${v.location} · ${v.timing}`,
              description: v.details,
              note: v.tip,
            }))}
          />
        </div>
      </section>

      {/* Rooftops */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-7 sm:mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
              <span className="text-muted-foreground/50 mr-2">02</span>The Views
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Rooftops & lounges.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-0 border-t border-border">
            {rooftops.map((r, i) => (
              <Reveal key={r.name} delay={i * 110}>
                <div className="pt-8 pb-6 md:pr-10 md:border-r border-border last:border-r-0 h-full">
                  <p className="text-5xl font-bold tracking-tight text-muted-foreground/20 mb-5">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-bold text-lg tracking-tight mb-1">{r.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{r.location}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{r.vibe}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Tip: </span>{r.tip}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Late-Night Eats & Entertainment */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-7 sm:mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
              <span className="text-muted-foreground/50 mr-2">03</span>Past Midnight
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Late-night eats & more.
            </h2>
          </Reveal>

          <div className="mb-14 max-w-4xl">
            <EditorialList
              items={lateNight.map((f) => ({
                title: f.name,
                value: f.price,
                description: f.details,
              }))}
            />
          </div>

          <BentoGrid
            items={entertainment.map((e) => ({
              title: e.name,
              description: e.details,
            }))}
          />
        </div>
      </section>

      {/* Weekly Guide & Safety */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-7 sm:mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
              <span className="text-muted-foreground/50 mr-2">04</span>Plan Your Night
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              The week at a glance.
            </h2>
          </Reveal>

          <div className="mb-14 max-w-4xl">
            <EditorialList
              items={weeklyGuide.map((w) => ({
                lead: w.day,
                title: w.scene,
              }))}
            />
          </div>

          <Reveal>
            <div className="rounded-2xl bg-card border border-border p-7 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">Safety & practical tips</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-3">
                {safetyTips.map((tip) => (
                  <p key={tip} className="text-sm text-muted-foreground flex gap-2 leading-relaxed">
                    <span className="text-primary">·</span>{tip}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
