import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SwipeRow } from "@/components/SwipeRow";
import { Button } from "@/components/ui/button";
import { Utensils, Theater, Camera, MapPin, Sparkles, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-culture-golconda.jpg";

export default function Culture() {
  const culturalHighlights = [
    {
      title: "Legendary Hyderabadi Cuisine",
      icon: Utensils,
      description: "Home of the world-famous Hyderabadi Biryani with 400+ years of culinary heritage. The unique Dum Pukht slow-cooking technique blends Mughlai, Turkish, and Arabic influences.",
      chips: ["Hyderabadi Biryani", "Haleem (UNESCO heritage)", "Irani Chai & Osmania Biscuits", "Qubani Ka Meetha", "Patthar Ka Gosht"],
      tip: "Biryani has two styles: Kacchi (raw meat layered) and Pakki (cooked meat). Try both."
    },
    {
      title: "400 Years of Rich Heritage",
      icon: Camera,
      description: "Founded in 1591 by Muhammad Quli Qutb Shah. 1000+ protected monuments spanning Qutb Shahi and Asaf Jahi (Nizam) dynasties.",
      chips: ["Charminar (1591)", "Golconda Fort", "Qutb Shahi Tombs", "Chowmahalla Palace", "Salar Jung Museum"],
      tip: "Old City best explored Saturday evening. Hire guide for Golconda Fort."
    },
    {
      title: "Vibrant Arts & Entertainment",
      icon: Theater,
      description: "Tollywood - India's 2nd largest film industry producing 300+ Telugu films annually. Thriving theater, classical dance (Kuchipudi), and contemporary arts scene.",
      chips: ["Lamakaan - Free open mics", "Ravindra Bharathi - Classical arts", "Ramoji Film City", "Prasads IMAX"],
      tip: "Lamakaan has daily free events - check their Facebook."
    },
    {
      title: "Festivals & Celebrations",
      icon: Sparkles,
      description: "Multi-religious, multicultural city celebrating Hindu, Muslim, Christian festivals with equal enthusiasm.",
      chips: ["Bonalu (Jul-Aug)", "Bathukamma (Sep-Oct)", "Ganesh Chaturthi", "Ramadan & Eid", "Diwali"],
      tip: "During Ramadan, Old City comes alive at night with 24/7 food stalls."
    }
  ];

  const signatureDishes = [
    { name: "Hyderabadi Biryani", type: "Main Course", where: "Paradise, Bawarchi, Shah Ghouse", price: "₹250-600", tip: "Order with raita, mirchi ka salan" },
    { name: "Haleem", type: "Specialty", where: "Pista House, Shadab, Shah Ghouse", price: "₹200-350", tip: "Best during Ramadan" },
    { name: "Irani Chai", type: "Beverage", where: "Cafe Niloufer, Nimrah Cafe", price: "₹20-40", tip: "Try with Osmania biscuits" },
    { name: "Lukhmi", type: "Snack", where: "Nimrah Cafe, Cafe 555", price: "₹30-60", tip: "Best when fresh and hot" },
    { name: "Patthar Ka Gosht", type: "Main Course", where: "Hotel Shadab, Shah Ghouse", price: "₹400-600", tip: "Watch them cook it on stone" },
    { name: "Qubani Ka Meetha", type: "Dessert", where: "Paradise, Shadab", price: "₹100-200", tip: "Serve warm with custard" },
    { name: "Double Ka Meetha", type: "Dessert", where: "Paradise, Hotel Shadab", price: "₹80-150", tip: "Very sweet - share one serving" }
  ];

  const culturalVenues = [
    { name: "Lamakaan", type: "Cultural Hub", location: "Banjara Hills", cost: "FREE", description: "300+ events yearly. Poetry, open mics, theater, film screenings.", tip: "Thursday poetry nights are popular" },
    { name: "Ravindra Bharathi", type: "Performance Hall", location: "Public Gardens", cost: "₹100-500", description: "Classical music, dance performances. December music season is legendary.", tip: "December is peak season - book early" },
    { name: "Salar Jung Museum", type: "Museum", location: "Near Musi River", cost: "₹50", description: "43,000+ artifacts. Musical Clock show at 12 PM.", tip: "Don't miss Veiled Rebecca sculpture" },
    { name: "Shilpakala Vedika", type: "Cultural Complex", location: "Madhapur", cost: "₹100-500", description: "Theater, film festivals, art exhibitions.", tip: "Multiple shows in different halls" },
    { name: "Ramoji Film City", type: "Film Studio", location: "30 km from city", cost: "₹1,150-1,500", description: "World's largest film studio. Full day needed.", tip: "Book online for discounts" },
    { name: "State Gallery of Art", type: "Art Gallery", location: "Madhapur", cost: "FREE", description: "Contemporary art exhibitions. Rotating monthly.", tip: "Quiet, air-conditioned space" }
  ];

  const festivals = [
    { name: "Bonalu Festival", season: "July-August", type: "UNESCO Heritage", description: "Telangana's biggest festival honoring Goddess Mahakali. Women carry decorated pots.", locations: "Secunderabad Mahankali Temple, Golconda", tip: "Go Sunday morning. Extremely crowded." },
    { name: "Bathukamma", season: "September-October", type: "State Festival", description: "Beautiful floral festival. Women create intricate flower stacks, perform traditional dances.", locations: "Lumbini Park, Hussain Sagar", tip: "Join final day (Saddula Bathukamma) at Lumbini Park" },
    { name: "Ganesh Chaturthi", season: "August-September", type: "Hindu Festival", description: "10-day celebration with huge pandals, giant idols, massive immersion procession.", locations: "Khairatabad (tallest Ganesh), Tank Bund", tip: "Khairatabad Ganesh is 50-60 feet tall" },
    { name: "Ramadan & Eid", season: "Varies", type: "Islamic Festival", description: "Old City transforms into 24/7 food paradise. Special haleem, night markets.", locations: "Charminar area, Tolichowki", tip: "Visit Old City 11 PM-1 AM during Ramadan" },
    { name: "Diwali", season: "October-November", type: "Hindu Festival", description: "Festival of lights. Fireworks at Tank Bund, shopping bonanza.", locations: "Tank Bund, malls", tip: "Reach Tank Bund by 6 PM for fireworks" },
    { name: "Deccan Festival", season: "February", type: "Cultural Festival", description: "Showcase of Hyderabad's culture, food, crafts, music, dance.", locations: "Charminar, Shilparamam", tip: "Evening events at Charminar are beautiful" }
  ];

  const localExperiences = [
    { title: "Heritage Walk in Old City", duration: "3-4 hours", cost: "₹500-800", description: "Guided walking tour through historic Old City. Charminar, Laad Bazaar, Makkah Masjid.", tip: "Saturday evening is lively" },
    { title: "Pearl Shopping Experience", duration: "2-3 hours", cost: "₹500-50,000", description: "Hyderabad is India's pearl capital. Visit pearl markets, learn grading.", tip: "Go to Mangatrai Pearls for genuine quality" },
    { title: "Bangle Shopping at Laad Bazaar", duration: "1-2 hours", cost: "₹50-500/set", description: "400-year-old bangle market near Charminar. Thousands of designs.", tip: "Start bargaining at 50% of asking price" },
    { title: "Irani Cafe Hopping", duration: "Half day", cost: "₹500-1000", description: "Tour historic Irani cafes dating back 100+ years.", tip: "Niloufer, Nimrah, Alpha Hotel, Grand Hotel" },
    { title: "Sound & Light Show at Golconda", duration: "2-3 hours", cost: "₹80-130", description: "Evening show narrating 400-year history. Amitabh Bachchan's voice.", tip: "Reach 30 min early for good seats" },
    { title: "Hussain Sagar Lake Boating", duration: "2-3 hours", cost: "₹50-100", description: "Boating to Buddha statue, sunset walks, street food.", tip: "Best sunset time 5-7 PM" }
  ];

  const languageInfo = {
    primary: "Telugu (official, 80% speak)",
    common: "Hindi (60%), Urdu (30%, Old City), English (well understood in tech areas)",
    tips: [
      "English works perfectly in modern areas, malls, restaurants",
      "Hindi is understood by most. Service industry speaks Hindi.",
      "Telugu basics help: 'Namaskaram' (hello), 'Dhanyavaadamulu' (thank you)",
      "Old City is Urdu-dominant. 'Salaam' (hello), 'Shukriya' (thank you)",
      "All signboards in Telugu, Urdu, English"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        eyebrow="Heritage & Arts"
        title="Hyderabad Culture"
        subtitle="400 years of rich heritage, world-famous cuisine, vibrant festivals, and a thriving arts scene."
        image={heroImage}
        imageAlt="Culture of Hyderabad"
      >
        <div className="flex flex-wrap gap-2.5">
          {[
            { value: "1,000+", label: "Heritage Monuments" },
            { value: "300+", label: "Telugu Films / Year" },
            { value: "15+", label: "Major Festivals" },
          ].map((fact) => (
            <div key={fact.label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 text-white text-sm">
              <span className="font-semibold">{fact.value}</span> <span className="text-white/60">{fact.label}</span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Cultural Highlights */}
      <section className="py-14 sm:py-28 px-6 sm:px-10">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
                <span className="text-muted-foreground/60 mr-3">01</span>The Treasures
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                What makes Hyderabad unique.
              </h2>
            </div>
            <p className="text-muted-foreground text-base max-w-xs sm:text-right leading-relaxed">
              Four pillars of a culture 400 years in the making.
            </p>
          </Reveal>

          <SwipeRow className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {culturalHighlights.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 100} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-7 sm:p-8 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 flex flex-col">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-5">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {item.chips.map((chip) => (
                      <span key={chip} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">{chip}</span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">Tip: </span>{item.tip}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </SwipeRow>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-14 sm:py-28 px-6 sm:px-10 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">02</span>The Cuisine
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Signature dishes.
            </h2>
          </Reveal>

          <SwipeRow className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {signatureDishes.map((dish, i) => (
              <Reveal key={dish.name} delay={(i % 3) * 100} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-6 sm:p-7 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 flex flex-col">
                  <p className="text-xs uppercase tracking-[0.15em] text-primary font-semibold mb-2">{dish.type}</p>
                  <div className="flex items-baseline justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold tracking-tight">{dish.name}</h3>
                    <span className="text-primary font-semibold text-sm whitespace-nowrap">{dish.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4"><span className="font-medium text-foreground">Where:</span> {dish.where}</p>
                  <div className="mt-auto pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Tip: </span>{dish.tip}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </SwipeRow>
        </div>
      </section>

      {/* Cultural Venues */}
      <section className="py-14 sm:py-28 px-6 sm:px-10">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">03</span>The Stages
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Cultural venues.
            </h2>
          </Reveal>

          <SwipeRow className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {culturalVenues.map((venue, i) => (
              <Reveal key={venue.name} delay={(i % 3) * 100} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-6 sm:p-7 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 flex flex-col">
                  <p className="text-xs uppercase tracking-[0.15em] text-primary font-semibold mb-2">{venue.type}</p>
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold tracking-tight">{venue.name}</h3>
                    <span className="text-primary font-semibold text-sm whitespace-nowrap">{venue.cost}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 text-muted-foreground/60" />
                    <span>{venue.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{venue.description}</p>
                  <div className="mt-auto pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Tip: </span>{venue.tip}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </SwipeRow>
        </div>
      </section>

      {/* Festivals */}
      <section className="py-14 sm:py-28 px-6 sm:px-10 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">04</span>The Celebrations
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Festivals year-round.
            </h2>
          </Reveal>

          <SwipeRow className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {festivals.map((festival, i) => (
              <Reveal key={festival.name} delay={(i % 3) * 100} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-6 sm:p-7 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 flex flex-col">
                  <p className="text-xs uppercase tracking-[0.15em] text-primary font-semibold mb-2">{festival.season} · {festival.type}</p>
                  <h3 className="text-lg font-bold tracking-tight mb-3">{festival.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{festival.description}</p>
                  <p className="text-sm text-muted-foreground mb-4"><span className="font-medium text-foreground">Where:</span> {festival.locations}</p>
                  <div className="mt-auto pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Tip: </span>{festival.tip}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </SwipeRow>
        </div>
      </section>

      {/* Local Experiences */}
      <section className="py-14 sm:py-28 px-6 sm:px-10">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">05</span>The Experiences
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Live it like a local.
            </h2>
          </Reveal>

          <SwipeRow className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {localExperiences.map((exp, i) => (
              <Reveal key={exp.title} delay={(i % 3) * 100} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-6 sm:p-7 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 flex flex-col">
                  <h3 className="text-lg font-bold tracking-tight mb-3">{exp.title}</h3>
                  <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground mb-3">
                    <span><span className="font-medium text-foreground">Duration:</span> {exp.duration}</span>
                    <span><span className="font-medium text-foreground">Cost:</span> <span className="text-primary font-semibold">{exp.cost}</span></span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                  <div className="mt-auto pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Tip: </span>{exp.tip}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </SwipeRow>
        </div>
      </section>

      {/* Language Guide */}
      <section className="py-14 sm:py-28 px-6 sm:px-10 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">06</span>The Languages
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
              You'll be understood.
            </h2>
          </Reveal>

          <SwipeRow className="grid lg:grid-cols-2 gap-5 sm:gap-6">
            <div className="space-y-5">
              <Reveal>
                <div className="rounded-2xl bg-card border border-border p-7">
                  <p className="text-xs uppercase tracking-[0.15em] text-primary font-semibold mb-3">Primary Language</p>
                  <p className="text-lg font-semibold tracking-tight">{languageInfo.primary}</p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="rounded-2xl bg-card border border-border p-7">
                  <p className="text-xs uppercase tracking-[0.15em] text-primary font-semibold mb-3">Also Spoken</p>
                  <p className="text-lg font-semibold tracking-tight leading-snug">{languageInfo.common}</p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={150}>
              <div className="h-full rounded-2xl bg-card border border-border p-7">
                <p className="text-xs uppercase tracking-[0.15em] text-primary font-semibold mb-4">Practical Tips</p>
                <div className="space-y-3">
                  {languageInfo.tips.map((tip) => (
                    <p key={tip} className="text-sm text-muted-foreground flex gap-2 leading-relaxed">
                      <span className="text-primary">·</span>{tip}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </SwipeRow>
        </div>
      </section>

      <Footer />
    </div>
  );
}
