import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { SwipeRow } from "@/components/SwipeRow";
import { EditorialList } from "@/components/EditorialList";
import { FeatureRows } from "@/components/FeatureRows";
import { BentoGrid } from "@/components/BentoGrid";
import { Rocket } from "lucide-react";
import heroImage from "@/assets/hero-work-tech-new.jpg";

export default function WorkTech() {
  const topCompanies = [
    {
      name: "Microsoft",
      employees: "10,000+",
      description: "Largest R&D center outside USA. Works on Windows, Azure, Office 365, AI research, LinkedIn.",
      roles: "Software Engineer, Cloud Architect, AI/ML Engineer, Product Manager, Data Scientist",
      salary: "₹8L - ₹50L+",
      benefits: "RSUs, health insurance, gym, food, WFH flexibility",
      applyUrl: "https://careers.microsoft.com/"
    },
    {
      name: "Google",
      employees: "15,000+",
      description: "Largest Google campus outside US. Works on Android, Cloud, Search, YouTube, AI, Payments.",
      roles: "Software Developer, SRE, Data Scientist, Product Manager, UX Designer",
      salary: "₹10L - ₹60L+",
      benefits: "RSUs, free food, gym, transport, generous PTO",
      applyUrl: "https://www.google.com/about/careers/applications/jobs/results#!t=jo&jid=127025001&"
    },
    {
      name: "Amazon",
      employees: "15,000+",
      description: "Largest campus in India. Works on AWS, Alexa, e-commerce, delivery tech, Prime Video.",
      roles: "SDE, Solutions Architect, Data Engineer, Business Analyst, Operations",
      salary: "₹8L - ₹45L+",
      benefits: "RSUs, health insurance, relocation support",
      applyUrl: "https://www.amazon.jobs/"
    },
    {
      name: "Apple",
      employees: "6,000+",
      description: "Design and development center. Works on Maps, iOS features, Siri, developer tools.",
      roles: "Software Engineer, Maps Analyst, iOS Developer, QA Engineer, ML Engineer",
      salary: "₹9L - ₹45L+",
      benefits: "RSUs, product discounts, health insurance",
      applyUrl: "https://www.apple.com/careers/"
    },
    {
      name: "Meta",
      employees: "2,000+",
      description: "Engineering center working on Facebook, WhatsApp, Instagram infrastructure, Reality Labs.",
      roles: "Software Engineer, Data Scientist, Product Designer, Research Scientist",
      salary: "₹12L - ₹65L+",
      benefits: "RSUs, unlimited PTO, wellness benefits",
      applyUrl: "https://www.metacareers.com/"
    },
    {
      name: "Qualcomm",
      employees: "3,000+",
      description: "Largest Qualcomm center outside USA. Chip design, wireless tech, 5G, automotive.",
      roles: "Hardware Engineer, Embedded Systems, VLSI Designer, Firmware Engineer",
      salary: "₹7L - ₹35L+",
      benefits: "Patent bonuses, health insurance, flexible hours",
      applyUrl: "https://www.qualcomm.com/company/careers"
    },
    {
      name: "ServiceNow",
      employees: "5,000+",
      description: "Major development center for enterprise workflow automation platform.",
      roles: "Software Engineer, DevOps, Product Manager, Solutions Consultant",
      salary: "₹10L - ₹45L+",
      benefits: "RSUs, wellness programs, learning budgets",
      applyUrl: "https://careers.servicenow.com/"
    },
    {
      name: "Salesforce",
      employees: "4,000+",
      description: "Cloud CRM development, AI features, platform engineering.",
      roles: "Software Engineer, Technical Architect, Success Manager",
      salary: "₹10L - ₹50L+",
      benefits: "RSUs, volunteer time off, wellness reimbursement",
      applyUrl: "https://www.salesforce.com/company/careers/"
    }
  ];

  const salaryGuide = [
    { level: "Entry (0-2 yrs)", range: "₹3.5L - ₹12L", examples: "Software Developer, QA Engineer, Data Analyst, Support Engineer", negotiation: "10-15% buffer typical" },
    { level: "Mid (2-5 yrs)", range: "₹8L - ₹28L", examples: "Senior Engineer, Product Manager, DevOps, Team Lead", negotiation: "15-20% buffer, ask for RSUs" },
    { level: "Senior (5-8 yrs)", range: "₹18L - ₹50L", examples: "Tech Lead, Engineering Manager, Architect, Principal PM", negotiation: "20-30% buffer, significant RSUs" },
    { level: "Leadership (8+ yrs)", range: "₹35L - ₹1Cr+", examples: "Director, VP, Principal Engineer, CTO, Distinguished Engineer", negotiation: "Highly negotiable, equity heavy" }
  ];

  const roleSpecificSalaries = [
    { role: "Frontend Developer", entry: "₹4-8L", mid: "₹10-20L", senior: "₹22-40L" },
    { role: "Backend Developer", entry: "₹5-10L", mid: "₹12-25L", senior: "₹25-50L" },
    { role: "Full Stack Developer", entry: "₹5-10L", mid: "₹12-28L", senior: "₹28-55L" },
    { role: "Data Scientist", entry: "₹6-12L", mid: "₹15-30L", senior: "₹30-60L" },
    { role: "DevOps/SRE", entry: "₹5-10L", mid: "₹12-25L", senior: "₹25-50L" },
    { role: "Product Manager", entry: "₹8-15L", mid: "₹18-35L", senior: "₹35-70L" },
    { role: "UX Designer", entry: "₹4-8L", mid: "₹10-20L", senior: "₹20-40L" },
    { role: "QA Engineer", entry: "₹3-6L", mid: "₹8-15L", senior: "₹15-30L" }
  ];

  const negotiationTips = [
    "Product companies and FAANG pay 20-40% higher than service companies",
    "Always ask for RSUs/ESOPs - they can double your effective compensation",
    "Most offers have 10-20% buffer - always negotiate",
    "Factor in benefits: insurance, food, transport can add ₹1-2L value annually"
  ];

  const industryGrowth = [
    { sector: "Information Technology", growth: "+25% YoY", companies: "1,500+", trend: "AI/ML integration, cloud migration", jobs: "500K+ open positions" },
    { sector: "Global Capability Centers", growth: "+40% YoY", companies: "500+", trend: "40% of new GCCs choosing Hyderabad", jobs: "High-value R&D roles" },
    { sector: "Startups & Product", growth: "+35% YoY", companies: "2,000+", trend: "Multiple unicorns and decacorns", jobs: "Equity-heavy compensation" },
    { sector: "Fintech & Banking", growth: "+30% YoY", companies: "300+", trend: "Digital banking, UPI, crypto", jobs: "Finance + tech hybrid roles" },
    { sector: "Pharma & Biotech", growth: "+20% YoY", companies: "200+", trend: "Vaccine development, R&D", jobs: "Research scientists, bioinformatics" },
    { sector: "Gaming & Entertainment", growth: "+45% YoY", companies: "100+", trend: "Mobile gaming, streaming", jobs: "Game developers, content creators" }
  ];

  const startupEcosystem = [
    {
      name: "T-Hub",
      type: "India's Largest Incubator",
      description: "2,000+ startups supported. Regular events, mentorship, funding connections. World's largest innovation campus.",
      highlight: "Free coworking days available for visitors",
      programs: "Incubation, acceleration, corporate innovation"
    },
    {
      name: "NASSCOM CoE",
      type: "AI & Data Science Hub",
      description: "Focus on AI/ML startups. Industry partnerships, POC opportunities, mentorship.",
      highlight: "Direct access to enterprise customers",
      programs: "AI acceleration, industry connect"
    },
    {
      name: "WeWork & Coworking",
      type: "50+ Premium Spaces",
      description: "₹6,000-15,000/month per seat. Day passes ₹500-800. Hot desks to private offices.",
      highlight: "Great for networking and remote work",
      programs: "Flexible membership, community events"
    },
    {
      name: "91springboard",
      type: "Startup Community",
      description: "Affordable coworking with startup focus. Multiple locations. ₹5,000-10,000/month.",
      highlight: "Strong founder community",
      programs: "Mentorship, investor connects"
    },
    {
      name: "Notable Unicorns",
      type: "Success Stories",
      description: "Darwinbox (HR Tech), Skyroot Aerospace (Space), UrbanPiper (Restaurant Tech), Hesa (Agritech)",
      highlight: "Proving Hyderabad can build billion-dollar companies",
      programs: "Alumni network, angel investing"
    }
  ];

  const workCulture = [
    { aspect: "Work Hours", detail: "9-10 hours typical in service companies. Product companies more flexible (8-9 hrs). Startups can vary widely.", tip: "Clarify expectations during interviews" },
    { aspect: "Work-Life Balance", detail: "Better than Bangalore/Mumbai. 25-35 min average commute. Less traffic stress. More time for life.", tip: "Living close to office is achievable here" },
    { aspect: "Remote Work", detail: "Most companies offer 2-3 WFH days. Some fully remote options. Hybrid is the norm post-COVID.", tip: "Negotiate WFH policy before joining" },
    { aspect: "Learning & Growth", detail: "Large companies offer ₹50K-2L training budgets. Tech meetups weekly. Conferences like JSConf, ReactConf.", tip: "Utilize learning budgets - most go unused" },
    { aspect: "Compensation", detail: "Competitive with Bangalore (95-100%). Lower cost of living = 30-40% higher savings. ESOPs common in startups.", tip: "Factor in cost of living when comparing offers" },
    { aspect: "Diversity & Inclusion", detail: "Good gender diversity in tech. Women in Tech programs at most companies. LGBTQ+ friendly workplaces.", tip: "Check company D&I ratings on Glassdoor" },
    { aspect: "Food & Perks", detail: "Most offices have subsidized cafeterias. Free snacks common. Gym facilities in many campuses.", tip: "Office food can save ₹5-10K/month" },
    { aspect: "Team Culture", detail: "Mix of local and pan-India talent. Telugu common but not required. English is business language.", tip: "Teams are generally welcoming to outsiders" }
  ];

  const techEvents = [
    { name: "JSConf Hyderabad", type: "Conference", frequency: "Annual", description: "JavaScript community conference with international speakers" },
    { name: "DevFest Hyderabad", type: "Conference", frequency: "Annual", description: "Google Developer Groups event covering all Google technologies" },
    { name: "Hyderabad Tech Meetups", type: "Meetup", frequency: "Weekly", description: "Various meetups on React, Python, DevOps, AI/ML" },
    { name: "Startup Grind", type: "Networking", frequency: "Monthly", description: "Founder stories, investor connects, networking" }
  ];

  const stats = [
    { value: "1,500+", label: "Tech Companies", note: "Global companies with offices here" },
    { value: "18%", label: "Job Growth", note: "Annual IT job growth rate" },
    { value: "2,000+", label: "Startups", note: "Growing startup ecosystem" },
    { value: "1M+", label: "Tech Workforce", note: "IT professionals in the city" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        eyebrow="Careers"
        title="Work & Tech Hub"
        subtitle="Complete guide to tech careers, salaries, top companies, and the startup ecosystem."
        image={heroImage}
        imageAlt="Work and Tech in Hyderabad"
        video="/videos/google-campus.mp4"
      >
        <div className="flex flex-wrap gap-2.5">
          {[
            { value: "1,500+", label: "Tech Companies" },
            { value: "18%", label: "Job Growth" },
            { value: "₹8-50L", label: "Avg. IT Salary" },
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
              India's fastest-growing tech city.
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

      {/* Top Companies */}
      <section id="employers" className="py-12 sm:py-16 px-6 sm:px-10 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7 sm:mb-8">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
                <span className="text-muted-foreground/50 mr-2">02</span>The Employers
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Top companies hiring.
              </h2>
            </div>
            <p className="text-muted-foreground text-base max-w-xs sm:text-right leading-relaxed">
              Global giants building world-class products in Hyderabad.
            </p>
          </Reveal>

          <EditorialList
            items={topCompanies.map((company) => ({
              title: company.name,
              value: company.salary,
              meta: `${company.employees} employees`,
              description: company.description,
              note: `Roles: ${company.roles}`,
            }))}
          />
        </div>
      </section>

      {/* Salaries */}
      <section id="salary" className="py-12 sm:py-16 px-6 sm:px-10 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-7 sm:mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
              <span className="text-muted-foreground/50 mr-2">03</span>The Money
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              What you can earn.
            </h2>
          </Reveal>

          <div className="mb-12 max-w-4xl">
            <EditorialList
              items={salaryGuide.map((level) => ({
                title: level.level,
                value: level.range,
                description: level.examples,
                note: level.negotiation,
              }))}
            />
          </div>

          <Reveal className="mb-10">
            <div className="overflow-x-auto rounded-2xl border border-border bg-card">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 sm:p-5 text-left text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">Role</th>
                    <th className="p-4 sm:p-5 text-center text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">Entry Level</th>
                    <th className="p-4 sm:p-5 text-center text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">Mid Level</th>
                    <th className="p-4 sm:p-5 text-center text-xs uppercase tracking-[0.15em] text-primary font-semibold">Senior Level</th>
                  </tr>
                </thead>
                <tbody>
                  {roleSpecificSalaries.map((role, index) => (
                    <tr key={role.role} className={index < roleSpecificSalaries.length - 1 ? "border-b border-border" : ""}>
                      <td className="p-4 sm:p-5 font-medium">{role.role}</td>
                      <td className="p-4 sm:p-5 text-center text-muted-foreground">{role.entry}</td>
                      <td className="p-4 sm:p-5 text-center text-muted-foreground">{role.mid}</td>
                      <td className="p-4 sm:p-5 text-center text-primary font-semibold">{role.senior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl bg-card border border-border p-7 sm:p-8">
              <h3 className="text-xl font-bold tracking-tight mb-5">Negotiation tips</h3>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-3">
                {negotiationTips.map((tip) => (
                  <p key={tip} className="text-sm text-muted-foreground flex gap-2 leading-relaxed">
                    <span className="text-primary">·</span>{tip}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Industry Growth */}
      <section className="py-12 sm:py-16 px-6 sm:px-10 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-7 sm:mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
              <span className="text-muted-foreground/50 mr-2">04</span>The Momentum
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Every sector is growing.
            </h2>
          </Reveal>

          <BentoGrid
            items={industryGrowth.map((industry) => ({
              lead: industry.growth,
              title: industry.sector,
              subtitle: `${industry.companies} companies`,
              description: `${industry.trend} · ${industry.jobs}`,
            }))}
          />
        </div>
      </section>

      {/* Startups & Events */}
      <section id="ecosystem" className="py-12 sm:py-16 px-6 sm:px-10 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-7 sm:mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
              <span className="text-muted-foreground/50 mr-2">05</span>The Ecosystem
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Startups & community.
            </h2>
          </Reveal>

          <SwipeRow outerClassName="mb-14" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {startupEcosystem.map((item, i) => (
              <Reveal key={item.name} delay={(i % 3) * 100} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-6 sm:p-7 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 flex flex-col">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-5">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.15em] text-primary font-semibold mb-2">{item.type}</p>
                  <h3 className="text-xl font-bold tracking-tight mb-3">{item.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                  <p className="text-sm text-muted-foreground mb-4"><span className="font-medium text-foreground">Programs:</span> {item.programs}</p>
                  <p className="mt-auto text-sm text-primary font-medium">{item.highlight}</p>
                </div>
              </Reveal>
            ))}
          </SwipeRow>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-border">
            {techEvents.map((event, i) => (
              <Reveal key={event.name} delay={i * 100}>
                <div className="pt-8 pb-6 lg:pr-8 lg:border-r border-border last:border-r-0 h-full">
                  <p className="text-xs uppercase tracking-[0.15em] text-primary font-semibold mb-3">{event.type} · {event.frequency}</p>
                  <h3 className="font-bold tracking-tight mb-2">{event.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Work Culture */}
      <section id="culture" className="py-12 sm:py-16 px-6 sm:px-10 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-7 sm:mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
              <span className="text-muted-foreground/50 mr-2">06</span>The Culture
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              What working here feels like.
            </h2>
          </Reveal>

          <FeatureRows
            items={workCulture.map((item) => ({
              title: item.aspect,
              description: item.detail,
              tip: item.tip,
            }))}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
