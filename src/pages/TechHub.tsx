import { Navigation } from "@/components/Navigation";
import { SectionNav } from "@/components/SectionNav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { EditorialList } from "@/components/EditorialList";
import { FeatureRows } from "@/components/FeatureRows";
import { BentoGrid } from "@/components/BentoGrid";
import { Building2, Users, TrendingUp, Award, Zap } from "lucide-react";
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
        <div className="container mx-auto max-w-4xl">
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

          <EditorialList
            items={companies.map((c) => ({
              title: c.name,
              value: c.stats,
              description: c.details,
            }))}
          />
        </div>
      </section>

      {/* Startups */}
      <section className="py-14 sm:py-28 px-6 sm:px-10 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">02</span>The Builders
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Startup ecosystem.
            </h2>
          </Reveal>

          <EditorialList
            items={startups.map((s) => ({
              lead: s.tag,
              title: s.name,
              description: s.details,
            }))}
          />
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

          <BentoGrid
            items={techParks.map((p) => ({
              title: p.name,
              description: p.details,
            }))}
          />
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

          <FeatureRows
            items={ecosystem.map((e) => ({
              title: e.aspect,
              description: e.details,
              icon: e.icon,
            }))}
          />
        </div>
      </section>

      {/* Job Market */}
      <section className="py-14 sm:py-28 px-6 sm:px-10">
        <div className="container mx-auto max-w-4xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">05</span>The Market
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Roles in demand.
            </h2>
          </Reveal>

          <EditorialList
            items={jobMarket.map((j) => ({
              title: j.role,
              value: j.salary,
              meta: j.demand,
              description: j.skills,
            }))}
          />
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

          <BentoGrid
            items={events.map((e) => ({
              title: e.name,
              description: e.details,
            }))}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
