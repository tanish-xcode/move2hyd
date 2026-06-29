import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { EditorialList } from "@/components/EditorialList";
import { BentoGrid } from "@/components/BentoGrid";
import { Home, IndianRupee, Train, Car, Bike, Bus } from "lucide-react";
import heroImage from "@/assets/hero-living-aerial.jpg";

export default function LivingHere() {
  const neighborhoods = [
    {
      name: "Gachibowli & HITEC City",
      type: "Tech Hub & Modern Living",
      description: "Heart of Hyderabad's IT corridor, home to Microsoft, Google, Amazon. Ultra-modern infrastructure with luxury apartments, premium malls, and excellent connectivity via Metro.",
      rent: "₹25,000 - ₹60,000/month",
      buyPrice: "₹6,000 - ₹12,000/sq ft",
      highlights: ["5-15 min commute to tech offices", "Inorbit Mall, Botanical Gardens", "Metro connectivity", "International schools", "Premium restaurants & cafes"],
      bestFor: "Tech professionals, expats, young professionals",
      commute: "20 min to airport, 10 min to HITEC City offices",
      tip: "Rent near Biodiversity Park for greenery. Most buildings have gyms, pools. Expect ₹3000-5000 maintenance."
    },
    {
      name: "Banjara Hills & Jubilee Hills",
      type: "Premium Luxury Living",
      description: "Hyderabad's most upscale neighborhoods. Tree-lined streets, embassies, luxury villas, celebrity homes. Road No. 1-12 are prime locations with proximity to everything premium.",
      rent: "₹35,000 - ₹1,50,000/month",
      buyPrice: "₹8,000 - ₹25,000/sq ft",
      highlights: ["Luxury boutiques, fine dining", "GVK One, Central Mall", "Film City nearby", "Top hospitals like Apollo", "Prestigious schools"],
      bestFor: "Executives, entrepreneurs, diplomats, established professionals",
      commute: "25 min to HITEC City, 30 min to airport",
      tip: "Road No. 10-12 Banjara Hills are quieter. Film Nagar has film industry connections. Expect high security deposits."
    },
    {
      name: "Madhapur",
      type: "Urban Living & Nightlife",
      description: "Vibrant neighborhood perfectly positioned between HITEC City and old city. Young professional hub with cafes, pubs, co-working spaces, and happening nightlife scene.",
      rent: "₹20,000 - ₹45,000/month",
      buyPrice: "₹5,500 - ₹9,000/sq ft",
      highlights: ["Walking distance to offices", "Best nightlife, pubs, rooftops", "Affordable dining options", "Multiple gyms & co-working", "Metro access"],
      bestFor: "Young professionals, singles, startup folks, social butterflies",
      commute: "5-10 min to HITEC City, 25 min to airport",
      tip: "Areas near Durgam Cheruvu Lake are scenic. Can be noisy near pubs. Great food delivery scene."
    },
    {
      name: "Kondapur",
      type: "Family-Friendly & Affordable",
      description: "Peaceful residential area ideal for families. Good schools, parks, temples, less traffic. Quick access to HITEC City without the high prices of Gachibowli.",
      rent: "₹18,000 - ₹35,000/month",
      buyPrice: "₹4,500 - ₹7,500/sq ft",
      highlights: ["Excellent schools (Delhi Public, Oakridge)", "Family-oriented community", "Parks & playgrounds", "Lower cost of living", "Peaceful environment"],
      bestFor: "Families with children, those seeking quiet life, budget-conscious professionals",
      commute: "15 min to HITEC City, 35 min to airport",
      tip: "Areas near Botanical Garden are green. Good vegetable markets. Slower internet in some buildings."
    },
    {
      name: "Financial District",
      type: "Premium Corporate Living",
      description: "Newest development with stunning modern towers, wide roads, and futuristic infrastructure. Home to Google's massive campus, Amazon, and dozens of multinational HQs.",
      rent: "₹30,000 - ₹70,000/month",
      buyPrice: "₹7,000 - ₹13,000/sq ft",
      highlights: ["Brand new buildings", "World-class amenities", "Walking distance to offices", "Premium finishes", "Planned infrastructure"],
      bestFor: "Expats, senior professionals, those wanting latest facilities",
      commute: "Literally adjacent to major offices, 30 min to airport",
      tip: "Still developing - restaurants/shops limited. Buildings have everything: gyms, pools, party halls, theaters."
    },
    {
      name: "Kukatpally & Miyapur",
      type: "Budget-Friendly & Metro Connected",
      description: "West Hyderabad's major residential hub with excellent Metro connectivity. Mix of old and new. Great for budget-conscious living without sacrificing connectivity.",
      rent: "₹12,000 - ₹28,000/month",
      buyPrice: "₹3,500 - ₹6,500/sq ft",
      highlights: ["Direct Metro to HITEC City", "Very affordable", "Local markets", "Community vibe", "Good schools"],
      bestFor: "Budget-conscious families, first-time movers, students, interns",
      commute: "35-45 min to HITEC City via Metro, 40 min to airport",
      tip: "Areas near Metro stations are convenient. Local markets very cheap. Can be congested during peak hours."
    }
  ];

  const transportation = [
    { mode: "Hyderabad Metro", icon: Train, cost: "₹10 - ₹60/trip", details: "69km network across 3 lines. Runs 6 AM-11 PM. Buy Metro card for 10% discount. Connects major IT hubs." },
    { mode: "Ola & Uber", icon: Car, cost: "₹8-15/km", details: "Available 24/7, arrive in 2-5 min. Pool options for cheaper rides. Prime/Lux available for comfort." },
    { mode: "Auto Rickshaws", icon: Car, cost: "₹25 min + ₹15/km", details: "Iconic three-wheelers. Use Ola Auto for fair pricing. Great for short distances." },
    { mode: "Rapido Bike Taxi", icon: Bike, cost: "₹5-8/km", details: "Fastest through traffic. Helmet provided. Perfect for solo trips during rush hour." },
    { mode: "TSRTC Buses", icon: Bus, cost: "₹10 - ₹50/trip", details: "Extensive city bus network. AC Volvo buses available. Monthly passes for regular commuters." },
    { mode: "MMTS Train", icon: Train, cost: "₹5 - ₹20/trip", details: "Suburban rail connecting Lingampally to Falaknuma. Great for areas not covered by Metro." },
    { mode: "Self-Drive Rentals", icon: Car, cost: "₹500-2000/day", details: "Zoomcar, Drivezy available. Good for weekend trips. Monthly subscriptions available." },
    { mode: "Airport Transfers", icon: Car, cost: "₹400-1500", details: "Prepaid taxis, Uber/Ola available. Airport Express bus ₹250. Takes 30-60 min to city." }
  ];

  const costOfLiving = {
    housing: [
      { item: "1BHK Apartment", range: "₹15,000 - ₹30,000/month" },
      { item: "2BHK Apartment", range: "₹25,000 - ₹50,000/month" },
      { item: "3BHK Apartment", range: "₹40,000 - ₹1,00,000/month" },
      { item: "Security Deposit", range: "3-10 months rent" },
      { item: "Maintenance Charges", range: "₹2,000 - ₹6,000/month" },
      { item: "Parking (if separate)", range: "₹1,000 - ₹3,000/month" }
    ],
    monthly: [
      { item: "Groceries (single)", range: "₹4,000 - ₹7,000" },
      { item: "Groceries (family of 4)", range: "₹12,000 - ₹18,000" },
      { item: "Utilities (electricity, water)", range: "₹2,000 - ₹4,000" },
      { item: "Internet (100 Mbps)", range: "₹600 - ₹1,000" },
      { item: "Mobile (postpaid)", range: "₹400 - ₹800" },
      { item: "Transport (Ola/Metro)", range: "₹3,000 - ₹8,000" },
      { item: "Eating out (moderate)", range: "₹5,000 - ₹15,000" },
      { item: "Gym membership", range: "₹1,500 - ₹4,000" },
      { item: "Entertainment (movies, events)", range: "₹2,000 - ₹5,000" },
      { item: "Domestic help (full-time)", range: "₹8,000 - ₹15,000" }
    ],
    budgets: [
      { value: "₹30-40K", label: "Single, Budget Living" },
      { value: "₹50-70K", label: "Single, Comfortable" },
      { value: "₹80-1.2L", label: "Family of 3-4" }
    ]
  };

  const healthcare = [
    { name: "Apollo Hospitals", type: "Premium Multi-Specialty", location: "Jubilee Hills, Secunderabad", specialty: "Cardiac, Oncology, Transplant, Emergency", insurance: "All major insurers", wait: "Same day appointments available", tip: "Book online for faster service" },
    { name: "KIMS Hospitals", type: "Mid-Premium", location: "Secunderabad, Kondapur", specialty: "All specialties, Strong pediatrics, Orthopedics", insurance: "Most insurers", wait: "1-2 day wait for specialists", tip: "Kondapur branch newer and less crowded" },
    { name: "Care Hospitals", type: "Premium", location: "Banjara Hills, HITEC City, Nampally", specialty: "Cardiac, Neuro, Critical Care", insurance: "All major insurers", wait: "Same day for emergencies", tip: "HITEC City branch closest to IT corridor" },
    { name: "Yashoda Hospitals", type: "Affordable Quality", location: "Somajiguda, Malakpet, Secunderabad", specialty: "General, Surgeries, Maternity, Dialysis", insurance: "Most insurers", wait: "1-3 day wait", tip: "Good balance of quality and affordability" },
    { name: "AIG Hospitals", type: "Super Specialty", location: "Gachibowli", specialty: "Gastro, Liver, Bariatric surgery", insurance: "All major insurers", wait: "1-2 weeks for non-urgent", tip: "Best for digestive system issues" },
    { name: "Continental Hospitals", type: "Premium", location: "Gachibowli", specialty: "Multi-specialty, International standards", insurance: "All insurers including international", wait: "Same day available", tip: "Popular with expats and corporates" },
    { name: "NIMS (Government)", type: "Government Super Specialty", location: "Punjagutta", specialty: "All specialties, Trauma center", insurance: "Government schemes", wait: "Long waits for OPD", tip: "Excellent doctors, challenging queues" },
    { name: "Medicover Hospitals", type: "Mid-Premium", location: "Multiple locations", specialty: "General, Women & Child, Orthopedics", insurance: "Most insurers", wait: "Same/next day", tip: "Good neighborhood hospitals" }
  ];

  const education = [
    { type: "International Schools (IB)", examples: "Oakridge International, Chirec International, The Shri Ram School", fees: "₹5-10 Lakhs/year", curriculum: "IB, Cambridge", highlights: "Global exposure, smaller class sizes, excellent facilities" },
    { type: "International Schools (IGCSE)", examples: "Glendale Academy, DRS International, Meridian", fees: "₹3-6 Lakhs/year", curriculum: "Cambridge IGCSE", highlights: "British curriculum, strong academics" },
    { type: "Premium CBSE", examples: "Delhi Public School, Bharatiya Vidya Bhavan, DAV", fees: "₹1-2.5 Lakhs/year", curriculum: "CBSE", highlights: "Strong academics, good infrastructure, competitive prep" },
    { type: "Quality CBSE/State", examples: "Sri Chaitanya, Narayana, Geetanjali", fees: "₹50K-1.5 Lakhs/year", curriculum: "CBSE/Telangana State", highlights: "Focus on competitive exams (JEE, NEET)" },
    { type: "Montessori/Pre-Schools", examples: "Kidzee, EuroKids, Podar Jumbo Kids", fees: "₹50K-2 Lakhs/year", curriculum: "Play-based", highlights: "Early childhood focus, activity-based learning" },
    { type: "Higher Education - Business", examples: "ISB (Top 25 globally), ICFAI Business School, Symbiosis", fees: "₹20L-45L (MBA)", curriculum: "MBA, PGDM", highlights: "ISB is world-renowned, strong placements" },
    { type: "Higher Education - Engineering", examples: "IIIT-H, BITS Pilani, JNTU, Osmania University", fees: "₹1L-15L/year", curriculum: "B.Tech, M.Tech", highlights: "IIIT-H ranked among top CS schools in India" },
    { type: "Higher Education - General", examples: "University of Hyderabad, English & Foreign Languages University", fees: "₹20K-2L/year", curriculum: "Various", highlights: "UoH is a central university, strong research" }
  ];

  const utilities = [
    { service: "Electricity (TSSPDCL)", provider: "State utility", setup: "Visit local office with rent agreement, ID proof", cost: "₹3-6/unit", tip: "Pay online via TSSPDCL app. Power cuts rare in IT areas." },
    { service: "Water (HMWSSB)", provider: "Municipal water", setup: "Included in most apartments", cost: "₹200-500/month", tip: "Most apartments have borewell backup. RO purifier recommended." },
    { service: "Piped Gas (MNGL)", provider: "Mahanagar Gas", setup: "Apply online, ₹5,000 refundable deposit", cost: "₹500-800/month", tip: "Cheaper than cylinders. Available in most new buildings." },
    { service: "Internet (Fiber)", provider: "ACT, Airtel, JioFiber, Hathway", setup: "Online booking, 2-3 day installation", cost: "₹600-1500/month", tip: "ACT most popular in IT areas. 100-300 Mbps common." },
    { service: "DTH/Cable TV", provider: "Tata Play, Airtel, Dish TV", setup: "Same day installation available", cost: "₹300-600/month", tip: "Most use streaming services now. Basic packs sufficient." },
    { service: "Mobile Network", provider: "Jio, Airtel, Vi", setup: "SIM available at stores with Aadhaar", cost: "₹200-500/month", tip: "Jio has best coverage. Airtel good in IT corridor." }
  ];

  const stats = [
    { value: "50+", label: "Neighborhoods", note: "Diverse areas to choose from" },
    { value: "69km", label: "Metro Network", note: "Connected across 3 lines" },
    { value: "50+", label: "Top Hospitals", note: "World-class healthcare" },
    { value: "500+", label: "Schools", note: "Quality education options" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        eyebrow="Settle In"
        title="Living Here"
        subtitle="Your complete guide to making Hyderabad home — from finding the perfect neighborhood to setting up utilities."
        image={heroImage}
        imageAlt="Living in Hyderabad"
        video="/videos/knowledge-city.mp4"
      >
        <div className="flex flex-wrap gap-2.5">
          {[
            { value: "₹15-50K", label: "Avg. Rent/Month" },
            { value: "69km", label: "Metro Network" },
            { value: "50+", label: "Top Hospitals" },
          ].map((fact) => (
            <div key={fact.label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 text-white text-sm">
              <span className="font-semibold">{fact.value}</span> <span className="text-white/60">{fact.label}</span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Key Stats */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-7 sm:mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
              <span className="text-muted-foreground/50 mr-2">01</span>The Snapshot
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              A city built for living.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 90}>
                <div className="relative h-full rounded-2xl bg-card border border-border p-6 sm:p-7 overflow-hidden">
                  <span className="absolute top-0 left-0 h-1 w-12 bg-primary rounded-br-lg" />
                  <p className="text-4xl sm:text-5xl font-bold tracking-tight text-primary leading-none">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="font-semibold text-sm sm:text-base mt-4">{stat.label}</p>
                  <p className="text-sm text-muted-foreground mt-1.5">{stat.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section id="neighborhoods" className="py-12 sm:py-16 px-6 sm:px-10 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7 sm:mb-8">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
                <span className="text-muted-foreground/50 mr-2">02</span>The Neighborhoods
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Find your corner of the city.
              </h2>
            </div>
            <p className="text-muted-foreground text-base max-w-xs sm:text-right leading-relaxed">
              Each area has its own personality — find the one that matches yours.
            </p>
          </Reveal>

          <EditorialList
            items={neighborhoods.map((hood) => ({
              lead: hood.type,
              title: hood.name,
              value: hood.rent,
              meta: `Buy ${hood.buyPrice} · ${hood.commute}`,
              description: `${hood.description} Best for: ${hood.bestFor}. Highlights: ${hood.highlights.join(", ")}.`,
              note: hood.tip,
            }))}
          />
        </div>
      </section>

      {/* Transportation */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-7 sm:mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
              <span className="text-muted-foreground/50 mr-2">03</span>Getting Around
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Every way to move.
            </h2>
          </Reveal>

          <BentoGrid
            items={transportation.map((t) => ({
              title: t.mode,
              subtitle: t.cost,
              description: t.details,
            }))}
          />
        </div>
      </section>

      {/* Cost of Living */}
      <section id="cost-of-living" className="py-12 sm:py-16 px-6 sm:px-10 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-7 sm:mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
              <span className="text-muted-foreground/50 mr-2">04</span>The Budget
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              What life really costs.
            </h2>
          </Reveal>

          <div className="mb-10 grid md:grid-cols-2 gap-5 sm:gap-6">
            <Reveal className="h-full">
              <div className="h-full rounded-2xl bg-card border border-border p-7 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary">
                    <Home className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">Housing costs</h3>
                </div>
                <div className="divide-y divide-border">
                  {costOfLiving.housing.map((item) => (
                    <div key={item.item} className="flex justify-between items-center gap-4 py-3">
                      <span className="text-sm text-muted-foreground">{item.item}</span>
                      <span className="text-sm font-semibold text-right">{item.range}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="h-full">
              <div className="h-full rounded-2xl bg-card border border-border p-7 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary">
                    <IndianRupee className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">Monthly expenses</h3>
                </div>
                <div className="divide-y divide-border">
                  {costOfLiving.monthly.map((item) => (
                    <div key={item.item} className="flex justify-between items-center gap-4 py-3">
                      <span className="text-sm text-muted-foreground">{item.item}</span>
                      <span className="text-sm font-semibold text-right">{item.range}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {costOfLiving.budgets.map((b, i) => (
              <Reveal key={b.label} delay={i * 90}>
                <div className="relative h-full rounded-2xl bg-card border border-border p-6 sm:p-7 overflow-hidden">
                  <span className="absolute top-0 left-0 h-1 w-12 bg-primary rounded-br-lg" />
                  <p className="text-3xl sm:text-4xl font-bold tracking-tight text-primary leading-none">{b.value}</p>
                  <p className="font-semibold text-sm sm:text-base mt-4">{b.label}</p>
                  <p className="text-sm text-muted-foreground mt-1">Estimated monthly budget</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare */}
      <section id="healthcare" className="py-12 sm:py-16 px-6 sm:px-10 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <Reveal className="max-w-2xl mb-7 sm:mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
              <span className="text-muted-foreground/50 mr-2">05</span>Healthcare
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              World-class care, nearby.
            </h2>
          </Reveal>

          <EditorialList
            items={healthcare.map((h) => ({
              lead: h.type,
              title: h.name,
              value: h.wait,
              meta: `${h.location} · ${h.specialty}`,
              description: h.insurance,
              note: h.tip,
            }))}
          />
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-12 sm:py-16 px-6 sm:px-10 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-7 sm:mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
              <span className="text-muted-foreground/50 mr-2">06</span>Education
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Schools for every path.
            </h2>
          </Reveal>

          <BentoGrid
            items={education.map((e) => ({
              lead: e.type,
              title: e.type,
              subtitle: e.fees,
              description: `${e.highlights} Curriculum: ${e.curriculum}. Examples: ${e.examples}.`,
            }))}
          />
        </div>
      </section>

      {/* Utilities */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <Reveal className="max-w-2xl mb-7 sm:mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
              <span className="text-muted-foreground/50 mr-2">07</span>Setting Up
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Get connected, fast.
            </h2>
          </Reveal>

          <EditorialList
            items={utilities.map((u) => ({
              title: u.service,
              value: u.cost,
              meta: `${u.provider} · ${u.setup}`,
              note: u.tip,
            }))}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
