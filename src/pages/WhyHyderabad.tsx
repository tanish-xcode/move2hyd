import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Heart, Sparkles, Sun, Users, Shield, Leaf, Clock, Utensils, Train, Plane, Car, Wifi, Hospital, GraduationCap, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-why-hyderabad-new.jpg";

const WhyHyderabad = () => {
  const highlights = [
    { icon: Building2, title: "Global Tech Hub", stat: "1,500+", description: "International companies with offices in Hyderabad" },
    { icon: TrendingUp, title: "Fastest Growing City", stat: "15%", description: "Annual GDP growth rate, consistently outpacing other metros" },
    { icon: Heart, title: "Quality of Life", stat: "#1", description: "Most livable city in India (2023)" },
    { icon: Sparkles, title: "Innovation Capital", stat: "40%", description: "Of India's GCCs choosing Hyderabad" }
  ];

  const costComparison = [
    { category: "3 BHK Rent (Prime Area)", hyderabad: "₹55,000 - ₹75,000", bangalore: "₹75,000 - ₹1,00,000", mumbai: "₹90,000 - ₹2,00,000", savings: "35-75%" },
    { category: "Meal at Restaurant", hyderabad: "₹200 - ₹400", bangalore: "₹350 - ₹600", mumbai: "₹400 - ₹700", savings: "35-45%" },
    { category: "Monthly Groceries", hyderabad: "₹6,000 - ₹10,000", bangalore: "₹8,000 - ₹14,000", mumbai: "₹10,000 - ₹16,000", savings: "25-35%" },
    { category: "Gym Membership", hyderabad: "₹1,500 - ₹3,000", bangalore: "₹2,500 - ₹5,000", mumbai: "₹3,500 - ₹7,000", savings: "40-55%" },
    { category: "Internet (100 Mbps)", hyderabad: "₹600 - ₹900", bangalore: "₹800 - ₹1,200", mumbai: "₹900 - ₹1,400", savings: "25-35%" }
  ];

  const careerOpportunities = [
    { sector: "Information Technology", companies: "Microsoft, Google, Amazon, Apple, Meta, IBM, Infosys, TCS", roles: "Software Engineers, Data Scientists, Cloud Architects, Product Managers", salary: "₹8-50 LPA", growth: "18% annual job growth", hubs: "HITEC City, Gachibowli, Financial District" },
    { sector: "Pharma & Life Sciences", companies: "Dr. Reddy's, Hetero, Aurobindo, Biological E, Bharat Biotech", roles: "Research Scientists, Clinical Researchers, Quality Analysts", salary: "₹6-35 LPA", growth: "15% annual growth", hubs: "Genome Valley, Uppal" },
    { sector: "Finance & Banking", companies: "HSBC, Wells Fargo, Goldman Sachs, JP Morgan, Deloitte, EY", roles: "Financial Analysts, Risk Managers, Auditors, Investment Bankers", salary: "₹7-40 LPA", growth: "12% annual growth", hubs: "Financial District, Gachibowli" },
    { sector: "Startups & Innovation", companies: "Darwinbox, Skyroot Aerospace, Hesa, UrbanPiper", roles: "Full-stack roles, Early-stage opportunities, Equity participation", salary: "₹5-30 LPA + equity", growth: "25% YoY startup funding increase", hubs: "T-Hub, HITEC City, Madhapur" }
  ];

  const lifestylePerks = [
    { icon: Sun, title: "Pleasant Climate", description: "Moderate temperatures year-round (20-35°C). No extreme summers like Delhi, no flooding like Mumbai." },
    { icon: Leaf, title: "Better Air Quality", description: "AQI averages 80-120 compared to Delhi's 300+. One of the cleanest major metros in India." },
    { icon: Clock, title: "Work-Life Balance", description: "Average commute 25-35 minutes vs 60-90 minutes in Bangalore/Mumbai." },
    { icon: Utensils, title: "Food Paradise", description: "From legendary biryani to global cuisines. World-class restaurants at affordable prices." },
    { icon: Users, title: "Welcoming Culture", description: "Known for 'Hyderabadi Tehzeeb' (hospitality). Diverse, inclusive community." },
    { icon: Shield, title: "Safety & Security", description: "One of India's safest cities. Low crime rates. Stable governance." }
  ];

  const infrastructure = [
    { icon: Train, title: "Metro Rail", status: "Operational", details: "69 km network connecting major hubs. Red, Blue, Green lines." },
    { icon: Plane, title: "International Airport", status: "World-Class", details: "Rajiv Gandhi International Airport - 6-time 'Best Airport in India'." },
    { icon: Car, title: "Road Infrastructure", status: "Excellent", details: "ORR (Outer Ring Road), Elevated corridors, Wide roads in IT areas." },
    { icon: Wifi, title: "Digital Infrastructure", status: "Advanced", details: "Fiber connectivity across city. 5G rollout in progress." },
    { icon: Hospital, title: "Healthcare", status: "World-Class", details: "Apollo, KIMS, Yashoda, AIG, NIMS - international standard hospitals." },
    { icon: GraduationCap, title: "Education", status: "Excellent", details: "IIT-H, ISB, BITS Pilani, IIIT-H, International schools." }
  ];

  const quickFacts = [
    { label: "Population", value: "10+ Million" },
    { label: "Languages", value: "Telugu, Hindi, English, Urdu" },
    { label: "Best Months", value: "Oct - Feb" },
    { label: "Airport Code", value: "HYD" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        eyebrow="The Case for Hyderabad"
        title="Why Hyderabad?"
        subtitle="Where ancient heritage meets cutting-edge innovation."
        image={heroImage}
        imageAlt="Hyderabad skyline"
        video="/videos/through-the-clouds.mp4"
      >
        <div className="flex flex-wrap gap-2.5">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 text-white text-sm">
              <span className="text-white/60">{fact.label}:</span> <span className="font-semibold">{fact.value}</span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Key Highlights */}
      <section className="py-20 sm:py-28 px-6 sm:px-10">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">01</span>The Numbers
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              A city on the rise.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="relative h-full rounded-2xl bg-card border border-border p-6 sm:p-7 overflow-hidden">
                  <span className="absolute top-0 left-0 h-1 w-12 bg-primary rounded-br-lg" />
                  <p className="text-4xl sm:text-5xl font-bold tracking-tight text-primary leading-none">
                    <CountUp value={item.stat} />
                  </p>
                  <p className="font-semibold text-sm sm:text-base mt-4">{item.title}</p>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
                <span className="text-muted-foreground/60 mr-3">02</span>Cost of Living
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Save more, live better.
              </h2>
            </div>
            <p className="text-muted-foreground text-base max-w-xs sm:text-right leading-relaxed">
              Real prices compared with Bangalore and Mumbai.
            </p>
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-border bg-card">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 sm:p-5 text-left text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">Category</th>
                    <th className="p-4 sm:p-5 text-center text-xs uppercase tracking-[0.15em] text-primary font-semibold">Hyderabad</th>
                    <th className="p-4 sm:p-5 text-center text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">Bangalore</th>
                    <th className="p-4 sm:p-5 text-center text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">Mumbai</th>
                    <th className="p-4 sm:p-5 text-center text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">You Save</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((item, index) => (
                    <tr key={item.category} className={index < costComparison.length - 1 ? "border-b border-border" : ""}>
                      <td className="p-4 sm:p-5 font-medium">{item.category}</td>
                      <td className="p-4 sm:p-5 text-center text-primary font-semibold">{item.hyderabad}</td>
                      <td className="p-4 sm:p-5 text-center text-muted-foreground">{item.bangalore}</td>
                      <td className="p-4 sm:p-5 text-center text-muted-foreground">{item.mumbai}</td>
                      <td className="p-4 sm:p-5 text-center">
                        <span className="bg-green-500/10 text-green-600 px-3 py-1 rounded-full font-semibold whitespace-nowrap">{item.savings}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Careers */}
      <section className="py-20 sm:py-28 px-6 sm:px-10">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">03</span>Careers
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Opportunity in every sector.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {careerOpportunities.map((sector, i) => (
              <Reveal key={sector.sector} delay={(i % 2) * 100} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-7 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 flex flex-col">
                  <div className="flex items-baseline justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold tracking-tight">{sector.sector}</h3>
                    <span className="text-primary font-semibold whitespace-nowrap text-sm">{sector.salary}</span>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><span className="font-medium text-foreground">Companies:</span> {sector.companies}</p>
                    <p><span className="font-medium text-foreground">Roles:</span> {sector.roles}</p>
                    <p><span className="font-medium text-foreground">Hubs:</span> {sector.hubs}</p>
                  </div>
                  <div className="mt-auto pt-4">
                    <p className="text-sm font-semibold text-primary">{sector.growth}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">04</span>Lifestyle
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Life feels lighter here.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {lifestylePerks.map((perk, i) => (
              <Reveal key={perk.title} delay={(i % 3) * 100} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-7 sm:p-8 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-5">
                    <perk.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg tracking-tight mb-2">{perk.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{perk.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 sm:py-28 px-6 sm:px-10">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">05</span>Infrastructure
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Built for the future.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {infrastructure.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 100} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-7 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs bg-green-500/10 text-green-600 px-2.5 py-1 rounded-full font-medium">{item.status}</span>
                  </div>
                  <h3 className="font-bold text-lg tracking-tight mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.details}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyHyderabad;
