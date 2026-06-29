import { Navigation } from "@/components/Navigation";
import { SectionNav } from "@/components/SectionNav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { SwipeRow } from "@/components/SwipeRow";
import { Button } from "@/components/ui/button";
import { Building2, Users, TrendingUp, Award, Zap, ArrowRight } from "lucide-react";
import heroImage from "@/assets/explore-tech.jpg";

export default function TechHub() {
  const companies = [
    { name: "Microsoft", details: "India Development Center - 10,000+ employees. One of largest R&D centers outside USA. Works on Windows, Azure, Office, AI. Gachibowli campus. Campus tours sometimes available for students.", stats: "10K+ employees" },
    { name: "Google", details: "Largest campus outside US - 15,000+ employees. Major hub for Cloud, AI, Android. 3 million sq ft campus in Gachibowli. Works on products serving global markets.", stats: "15K+ employees" },
    { name: "Amazon", details: "Major development center - 15,000+ employees. Multiple teams - AWS, Alexa, Prime Video, retail tech. Locations in Nanakramguda, Gachibowli. Fastest growing tech employer.", stats: "15K+ employees" },
    { name: "Apple", details: "Development center - 4,000+ employees. Focus on Maps and Services. Waverock campus. Expanding rapidly. Selective hiring process.", stats: "4K+ employees" },
    { name: "Meta (Facebook)", details: "Engineering and product teams. Instagram, WhatsApp development. Growing presence. Challenging work culture.", stats: "3K+ employees" },
    { name: "Qualcomm", details: "Chip design and wireless tech. 5G development. 3,000+ engineers. Strong R&D focus.", stats: "3K+ employees" }
  ];

  const startups = [
    { name: "T-Hub", details: "India's largest innovation campus. 1,800+ startups incubated. 100+ funded startups. Programs for early to growth stage. Co-working space, mentorship, funding connections. Application-based entry.", tag: "Founded 2015" },
    { name: "WE Hub", details: "India's first state-led incubator for women entrepreneurs. 300+ women-led startups. Funding support, mentorship, networking. Focus on women empowerment through entrepreneurship.", tag: "Founded 2017" },
    { name: "IIIT-H IIITH-IC", details: "IIT Hyderabad Innovation Cell. Research-to-market programs. Deep tech focus - AI, IoT, Robotics. Academic-industry collaboration.", tag: "Academic" },
    { name: "Notable Startups", details: "Grey Orange (Robotics), Innovaccer (Healthcare AI), Darwinbox (HR Tech), Hevo Data (Data platforms), Skyroot Aerospace (Space tech). Many unicorns and successful exits.", tag: "Success Stories" }
  ];

  const techParks = [
    { name: "HITEC City", details: "Original IT hub. 100+ companies. Microsoft, Google, Apple, Amazon presence. Restaurants, cafes, good infrastructure. Heavy traffic peak hours." },
    { name: "Gachibowli", details: "Extension of HITEC City. Newer tech parks. Modern infrastructure. Less congested than HITEC City. Growing rapidly." },
    { name: "Financial District", details: "Planned tech hub. Modern office spaces. Less traffic. Upcoming area. Good connectivity." },
    { name: "Kokapet", details: "Newest tech destination. Amazon largest office here. Modern infrastructure. Less crowded. Rising property prices." }
  ];

  const ecosystem = [
    { aspect: "Talent Pool", details: "20+ engineering colleges including IIT-H, BITS Pilani, IIIT-H. 100,000+ tech graduates annually. Strong CS, AI, Data Science programs. Attracts talent from across India.", icon: Users },
    { aspect: "Cost Advantage", details: "30-40% lower costs vs Bangalore. Better office space costs. Competitive salaries but lower living costs. Higher savings potential for professionals.", icon: TrendingUp },
    { aspect: "Government Support", details: "Telangana State Innovation Cell (TSIC). Single-window clearance. Land allotment support. Tax incentives for startups. Pro-business policies.", icon: Award },
    { aspect: "Infrastructure", details: "Excellent metro connectivity. International airport. Modern office spaces. Co-working spaces everywhere. High-speed internet infrastructure.", icon: Building2 },
    { aspect: "Quality of Life", details: "Less traffic than Bangalore. Better work-life balance. Lower cost of living. Good schools, hospitals. Pleasant weather Oct-Feb. Cultural diversity.", icon: Zap }
  ];

  const jobMarket = [
    { role: "Software Developer", demand: "Very High", salary: "₹4-25 LPA", skills: "Java, Python, JavaScript, Cloud" },
    { role: "Data Scientist/ML", demand: "High", salary: "₹8-35 LPA", skills: "Python, ML, AI, Statistics" },
    { role: "DevOps Engineer", demand: "High", salary: "₹6-30 LPA", skills: "AWS, Docker, Kubernetes, CI/CD" },
    { role: "Full Stack", demand: "Very High", salary: "₹5-28 LPA", skills: "React, Node, Databases" },
    { role: "Product Manager", demand: "Moderate", salary: "₹15-50 LPA", skills: "Product strategy, Tech knowledge" },
    { role: "UI/UX Designer", demand: "Moderate", salary: "₹4-20 LPA", skills: "Figma, User research, Design" }
  ];

  const events = [
    { name: "Hyderabad Tech Meetups", details: "Regular meetups for various tech stacks. Python, JavaScript, DevOps, AI/ML communities. Check Meetup.com." },
    { name: "GHCI (Grace Hopper)", details: "Celebrating Women in Computing. Asia's largest gathering. Usually Oct-Nov. Registration required." },
    { name: "PyConf Hyderabad", details: "Python conference. Talks, workshops. Usually Feb-Mar. Great networking." },
    { name: "DevOps Days", details: "DevOps community event. CI/CD, cloud, automation focus. Check schedule online." }
  ];

  const heroStats = [
    { value: "7,000+", label: "Startups" },
    { value: "1M+", label: "Tech Workforce" },
    { value: "100K+", label: "Graduates / Year" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        eyebrow="Tech Hub"
        title="The Skyline That Works Late"
        subtitle="HITEC City, the Financial District, and 7,000+ startups powered by a million-strong tech workforce."
        image={heroImage}
        imageAlt="Hyderabad tech hub"
        video="/videos/t-hub-junction.mp4"
      >
        <div className="flex flex-wrap gap-2.5">
          {heroStats.map((fact) => (
            <div key={fact.label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 text-white text-sm">
              <span className="font-semibold">{fact.value}</span> <span className="text-white/60">{fact.label}</span>
            </div>
          ))}
        </div>
      </PageHero>
      <SectionNav label="Work & Tech" links={[
        { title: "Work & Tech", path: "/work-tech" },
        { title: "Tech Hub", path: "/tech-hub" },
      ]} />

      {/* Tech Giants */}
      <section className="py-14 sm:py-28 px-6 sm:px-10">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
                <span className="text-muted-foreground/60 mr-3">01</span>The Giants
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Global tech at home.
              </h2>
            </div>
            <p className="text-muted-foreground text-base max-w-xs sm:text-right leading-relaxed">
              Some of these are the companies' largest campuses outside the US.
            </p>
          </Reveal>

          <SwipeRow className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {companies.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 100} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-6 sm:p-7 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-[0.15em] text-primary font-semibold mb-2">{c.stats}</p>
                  <h3 className="text-xl font-bold tracking-tight mb-3">{c.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.details}</p>
                </div>
              </Reveal>
            ))}
          </SwipeRow>
        </div>
      </section>

      {/* Startups */}
      <section className="py-14 sm:py-28 px-6 sm:px-10 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">02</span>The Builders
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Startup ecosystem.
            </h2>
          </Reveal>

          <SwipeRow className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {startups.map((s, i) => (
              <Reveal key={s.name} delay={(i % 2) * 100} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-7 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-[0.15em] text-primary font-semibold mb-2">{s.tag}</p>
                  <h3 className="text-xl font-bold tracking-tight mb-3">{s.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.details}</p>
                </div>
              </Reveal>
            ))}
          </SwipeRow>
        </div>
      </section>

      {/* Tech Parks */}
      <section className="py-14 sm:py-28 px-6 sm:px-10">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">03</span>The Map
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Where it all happens.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-border">
            {techParks.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div className="pt-8 pb-6 lg:pr-8 lg:border-r border-border last:border-r-0 h-full">
                  <p className="text-5xl font-bold tracking-tight text-muted-foreground/20 mb-5">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-bold text-lg tracking-tight mb-2">{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.details}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-14 sm:py-28 px-6 sm:px-10 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">04</span>The Advantage
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Why Hyderabad for tech?
            </h2>
          </Reveal>

          <SwipeRow className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {ecosystem.map((e, i) => (
              <Reveal key={e.aspect} delay={(i % 3) * 100} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-7 sm:p-8 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-5">
                    <e.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg tracking-tight mb-2">{e.aspect}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.details}</p>
                </div>
              </Reveal>
            ))}
          </SwipeRow>
        </div>
      </section>

      {/* Job Market */}
      <section className="py-14 sm:py-28 px-6 sm:px-10">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">05</span>The Market
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Roles in demand.
            </h2>
          </Reveal>

          <SwipeRow className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {jobMarket.map((j, i) => (
              <Reveal key={j.role} delay={(i % 3) * 100} className="h-full">
                <div className="relative h-full rounded-2xl bg-card border border-border p-6 sm:p-7 overflow-hidden">
                  <span className="absolute top-0 left-0 h-1 w-12 bg-primary rounded-br-lg" />
                  <h3 className="font-bold tracking-tight mb-1.5">{j.role}</h3>
                  <p className="text-2xl font-bold tracking-tight text-primary mb-3">
                    <CountUp value={j.salary} />
                  </p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p><span className="font-medium text-foreground">Demand:</span> {j.demand}</p>
                    <p><span className="font-medium text-foreground">Skills:</span> {j.skills}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </SwipeRow>
        </div>
      </section>

      {/* Events */}
      <section className="py-14 sm:py-28 px-6 sm:px-10 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">06</span>The Community
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
              Events & meetups.
            </h2>
          </Reveal>

          <SwipeRow className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {events.map((e, i) => (
              <Reveal key={e.name} delay={(i % 4) * 90} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-6 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1">
                  <h3 className="font-bold tracking-tight mb-2">{e.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.details}</p>
                </div>
              </Reveal>
            ))}
          </SwipeRow>
        </div>
      </section>

      <Footer />
    </div>
  );
}
