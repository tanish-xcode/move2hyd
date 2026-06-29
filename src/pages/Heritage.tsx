import { Navigation } from "@/components/Navigation";
import { SectionNav } from "@/components/SectionNav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FeatureRows } from "@/components/FeatureRows";
import { EditorialList } from "@/components/EditorialList";
import heroImage from "@/assets/explore-heritage.jpg";

export default function Heritage() {
  const monuments = [
    {
      name: "Charminar",
      description: "Iconic 16th-century monument, symbol of Hyderabad built in 1591 by Muhammad Quli Qutb Shah. Four towering minarets, mosque on top floor, surrounding bazaars.",
      timings: "9:00 AM - 5:30 PM Daily",
      location: "Old City, Charminar",
      entry: "₹25 Indians, ₹300 Foreigners",
      tips: "Visit early morning to avoid crowds. Climb to top for Old City views. Explore Laad Bazaar nearby for bangles and jewelry. Best photographed from ground level."
    },
    {
      name: "Golconda Fort",
      description: "Magnificent 13th-century fortress spanning 3 sq km with acoustic marvels. Famous for diamond trade, impressive gates, palaces, and engineering. Home to legendary Kohinoor diamond.",
      timings: "9:00 AM - 5:30 PM, Sound & Light Show 7 PM (English), 8:15 PM (Telugu/Hindi)",
      location: "Golconda, 11 km from city center",
      entry: "₹25 Indians, ₹300 Foreigners, Sound & Light ₹130",
      tips: "Wear comfortable shoes for climbing. Clap at main entrance to hear acoustic echo at top. Must attend evening sound & light show. Allocate 3-4 hours. Carry water."
    },
    {
      name: "Chowmahalla Palace",
      description: "Grand seat of Asaf Jahi dynasty spanning 45 acres. Stunning Mughal and Persian architecture, crystal chandeliers, vintage cars, royal artifacts. Houses Nizam's throne.",
      timings: "10:00 AM - 5:00 PM, Closed Fridays",
      location: "Khilwat, Old City",
      entry: "₹80 Indians, ₹200 Foreigners, ₹50 Camera",
      tips: "Photography allowed with fee. Visit Council Hall and Clock Tower. Check vintage car collection. Best time: winter mornings. Air-conditioned museum inside."
    },
    {
      name: "Qutb Shahi Tombs",
      description: "Seven domed tombs of Qutb Shahi rulers amid landscaped gardens. Architectural masterpieces blending Persian, Pathan, and Deccani styles. UNESCO restoration ongoing.",
      timings: "9:00 AM - 4:30 PM",
      location: "Ibrahim Bagh, near Golconda",
      entry: "₹25 Indians, ₹300 Foreigners",
      tips: "Combine with Golconda visit. Best in winter. Peaceful for photography. Restoration enhanced beauty. Guided tours available at entrance."
    },
    {
      name: "Falaknuma Palace",
      description: "Nizams' palace turned Taj Hotel, built 1894. Scorpion-shaped architecture, priceless furniture, jade collection, world's longest dining table (101 seats). Non-guests can visit via tour.",
      timings: "Tours: 11 AM, 1 PM, 3 PM daily (Advance booking required)",
      location: "Falaknuma, Virasat-e-Khalsa",
      entry: "₹2,500 per person (includes high tea)",
      tips: "Book 2-3 weeks advance online. Dress code formal. Photography restricted. Tour includes high tea. Worth the experience for history enthusiasts."
    },
    {
      name: "Salar Jung Museum",
      description: "World's largest one-man collection with 43,000 art objects, manuscripts, sculptures. Famous for Veiled Rebecca marble, miniature paintings, Quran manuscripts, European art, clock collection.",
      timings: "10:00 AM - 5:00 PM, Closed Fridays",
      location: "Darulshifa, Near Musi River",
      entry: "₹50 Indians, ₹500 Foreigners, ₹100 Camera",
      tips: "Allocate minimum 3-4 hours. Don't miss musical clock at 12 PM, 3 PM. Audio guides available. Start with ground floor. Free bag storage."
    }
  ];

  const heritageZones = [
    {
      name: "Old City Heritage Area",
      highlights: "Charminar, Makkah Masjid, Laad Bazaar, Chowmahalla Palace, narrow lanes with historic buildings",
      bestTime: "Early morning or evening",
      howToExplore: "Heritage walks (Foot Loose, Detour India), auto rickshaw tours, cycling tours",
      tip: "Hire a local guide for hidden gems. Try street food at Sarvi, Pista House. Shop for pearls and bangles."
    },
    {
      name: "Nizam's Heritage Trail",
      highlights: "Falaknuma Palace, Chowmahalla, King Kothi Palace, Purani Haveli, Nizam Museum",
      bestTime: "Morning for cooler weather",
      howToExplore: "Private car recommended, guided heritage tours available",
      tip: "Book Falaknuma tour in advance. Visit Nizam Museum (₹50) to see golden throne, gifts from world leaders."
    },
    {
      name: "Qutb Shahi Heritage",
      highlights: "Golconda Fort, Qutb Shahi Tombs, Taramati Baradari, ancient stepwells",
      bestTime: "Winter months, early morning",
      howToExplore: "Car/taxi, full day required",
      tip: "Combine Golconda & Tombs in one visit. Attend cultural programs at Taramati Baradari. Carry water and snacks."
    }
  ];

  const experiences = [
    {
      title: "Heritage Walks",
      description: "Guided 3-4 hour walking tours through Old City discovering hidden monuments, ancient houses, local bazaars, and stories of Nizams.",
      points: ["Foot Loose (Detour India)", "Hyderabad Heritage Trust", "Private guides from tourism office"],
      pointsLabel: "Providers",
      meta: "₹500-1500 per person",
      tip: "Book weekend walks in advance. Morning walks better weather-wise. Wear comfortable shoes."
    },
    {
      title: "Photography Tours",
      description: "Capture architectural beauty, street life, and heritage monuments with professional guidance. Best light conditions at golden hours.",
      points: ["Old City lanes at dawn", "Charminar from surrounding rooftops", "Golconda at sunset", "Laad Bazaar colors"],
      pointsLabel: "Best spots",
      tip: "Respect local privacy. Ask before photographing people. Join photography clubs' heritage walks."
    },
    {
      title: "Sound & Light Shows",
      description: "Golconda Fort's spectacular show narrating history through lights, lasers, and narration. Available in English, Hindi, Telugu.",
      points: ["English 7:00 PM, Hindi/Telugu 8:15 PM (Oct-Feb); Timings vary in summer", "Book online via Telangana Tourism or ticket counter (arrive 30 min early)"],
      pointsLabel: "Timings & booking",
      tip: "Carry light jacket in winter. Best seats in center rows. Book online to avoid queues."
    },
    {
      title: "Museum Hopping",
      description: "Explore world-class collections at Salar Jung, Nizam Museum, Telangana State Museum, AP State Museum, City Museum.",
      points: ["Salar Jung - Veiled Rebecca, clock collection", "Nizam Museum - golden throne, vintage cars", "State Museum - Buddhist artifacts, ancient sculptures"],
      pointsLabel: "Must see",
      tip: "Most museums closed on Fridays. Allow 2-3 hours per museum. Salar Jung needs half day."
    }
  ];

  const practicalInfo = [
    { title: "Best Time to Visit", info: "October to March (pleasant weather). Avoid peak summer (April-June) for outdoor monuments. Monsoons (July-Sep) offer lush greens but check timings." },
    { title: "Getting Around", info: "Old City: Walk or auto rickshaws. Fort areas: Taxi/car. Metro till Charminar station. Ola/Uber readily available. Heritage walks cover multiple sites." },
    { title: "What to Wear", info: "Comfortable walking shoes essential. Modest clothing for religious sites. Hat/sunscreen for day visits. Light jacket for winter evenings and AC museums." },
    { title: "Food & Refreshments", info: "Irani cafes near Charminar (Nimrah 24/7). Street food at Mozamjahi Market. Carry water for fort visits. Restaurants in Abids area for lunch breaks." },
    { title: "Photography", info: "Most monuments allow photography (₹50-100 extra). Salar Jung Museum ₹100. Drone photography needs permission. Golden hour best for monuments." },
    { title: "Safety Tips", info: "Old City safe but crowded. Watch belongings in markets. Hire registered guides. Avoid isolated areas post-sunset. Keep photocopies of documents." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        eyebrow="Heritage"
        title="Where Empires Left Their Mark"
        subtitle="Charminar, Golconda Fort, and 400 years of stories etched in stone — across two royal dynasties."
        image={heroImage}
        imageAlt="Hyderabad heritage"
      >
        <div className="flex flex-wrap gap-2.5">
          {[
            { value: "1591", label: "Charminar Built" },
            { value: "1,000+", label: "Protected Monuments" },
            { value: "2", label: "Royal Dynasties" },
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

{/* Monuments */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7 sm:mb-8">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
                <span className="text-muted-foreground/50 mr-2">01</span>The Landmarks
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Iconic monuments.
              </h2>
            </div>
            <p className="text-muted-foreground text-base max-w-xs sm:text-right leading-relaxed">
              Six must-see sites with timings, entry fees, and insider tips.
            </p>
          </Reveal>

          <EditorialList
            items={monuments.map((m) => ({
              title: m.name,
              value: m.entry,
              meta: `${m.location} · ${m.timings}`,
              description: m.description,
              note: m.tips,
            }))}
          />
        </div>
      </section>

      {/* Heritage Zones */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-7 sm:mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
              <span className="text-muted-foreground/50 mr-2">02</span>The Trails
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Three heritage zones.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-0 border-t border-border">
            {heritageZones.map((zone, i) => (
              <Reveal key={zone.name} delay={i * 110}>
                <div className="pt-8 pb-6 md:pr-10 md:border-r border-border last:border-r-0 h-full">
                  <p className="text-5xl font-bold tracking-tight text-muted-foreground/20 mb-5">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-bold text-lg tracking-tight mb-3">{zone.name}</h3>
                  <div className="space-y-3 text-sm text-muted-foreground mb-4">
                    <p><span className="font-medium text-foreground">Highlights:</span> {zone.highlights}</p>
                    <p><span className="font-medium text-foreground">Best time:</span> {zone.bestTime}</p>
                    <p><span className="font-medium text-foreground">How to explore:</span> {zone.howToExplore}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Tip: </span>{zone.tip}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-7 sm:mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
              <span className="text-muted-foreground/50 mr-2">03</span>The Experiences
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Immersive ways to explore.
            </h2>
          </Reveal>

          <FeatureRows
            items={experiences.map((exp) => ({
              title: exp.title,
              description: exp.meta ? `${exp.description} ${exp.meta}` : exp.description,
              chips: exp.points,
              tip: exp.tip,
            }))}
          />
        </div>
      </section>

      {/* Practical Info */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-7 sm:mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
              <span className="text-muted-foreground/50 mr-2">04</span>Plan Your Visit
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Know before you go.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {practicalInfo.map((info, i) => (
              <Reveal key={info.title} delay={(i % 3) * 100} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-6 sm:p-7 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1">
                  <h3 className="font-bold tracking-tight mb-2">{info.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{info.info}</p>
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
