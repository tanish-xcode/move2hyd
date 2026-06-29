import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, ArrowRight, Home, Ruler, Calendar, CheckCircle2, Play } from "lucide-react";
import heroImage from "@/assets/hero-financial-district.jpg";
import asblLoftImage from "@/assets/asbl-loft.png";
import asblBroadwayImage from "@/assets/asbl-broadway.png";
import asblSpectraImage from "@/assets/asbl-spectra.png";
import asblSpireImage from "@/assets/asbl-spire.png";
import asblSpringsImage from "@/assets/asbl-springs.png";
import asblLandmarkImage from "@/assets/asbl-landmark.png";

const podcasts = [{
  id: 1,
  title: "Ajitesh and Sharan on hyderabad real estate",
  videoId: "BRH2aMTlECk",
  thumbnail: "https://img.youtube.com/vi/BRH2aMTlECk/maxresdefault.jpg"
}, {
  id: 2,
  title: "Real estate in Hyderabad vs other metro cities",
  videoId: "3wqXcVLGqoA",
  thumbnail: "https://img.youtube.com/vi/3wqXcVLGqoA/maxresdefault.jpg"
}];

const properties = [{
  id: "loft",
  name: "ASBL Loft",
  tagline: "The Key to Envy",
  location: "Financial District, Gachibowli",
  type: "3 BHK Luxury Apartments",
  size: "1695 sq.ft",
  price: "₹1.84 Cr onwards",
  status: "Under Construction",
  possession: "December 2026",
  rera: "P02400006761",
  image: asblLoftImage,
  highlights: ["G+50 Floors Tower", "Double-height living spaces", "Smart home features", "Rooftop infinity pool"],
  link: "https://www.asbl.in/loft"
}, {
  id: "broadway",
  name: "ASBL Broadway",
  tagline: "The Pulse of Life",
  location: "Financial District, Hyderabad",
  type: "Exclusive 3 BHK",
  size: "Premium sizes available",
  price: "Contact for pricing",
  status: "New Launch",
  possession: "2028",
  rera: "P02400009684",
  image: asblBroadwayImage,
  highlights: ["G+50 Floors", "1,07,000+ sq.ft indoor amenities", "Privacy-focused design", "Urban lifestyle amenities"],
  link: "https://www.asbl.in/broadway"
}, {
  id: "spectra",
  name: "ASBL Spectra",
  tagline: "Room-sized Outdoor Living",
  location: "Financial District, Hyderabad",
  type: "Premium 3 BHK",
  size: "1980 - 2220 sq.ft",
  price: "₹2.25 Cr - ₹2.50 Cr",
  status: "Under Construction",
  possession: "2026",
  rera: "P02400003071",
  image: asblSpectraImage,
  highlights: ["Large outdoor balconies", "Heart of IT corridor", "Premium specifications", "Lake-facing views"],
  link: "https://www.asbl.in/spectra"
}, {
  id: "spire",
  name: "ASBL Spire",
  tagline: "The Pinnacle of Kokapet",
  location: "Kokapet, Hyderabad",
  type: "Luxurious 3 BHK",
  size: "Premium sizes available",
  price: "Contact for pricing",
  status: "Ready to Move",
  possession: "2025",
  rera: "P02400002261",
  image: asblSpireImage,
  highlights: ["Single tower G+35 floors", "75% Open area", "Lake-facing apartments", "Outdoor living balconies"],
  link: "https://www.asbl.in/spire"
}, {
  id: "springs",
  name: "ASBL Springs",
  tagline: "Ready to Move In",
  location: "Pocharam, Hyderabad",
  type: "2 & 3 BHK Apartments",
  size: "Various sizes available",
  price: "₹67 Lakhs onwards",
  status: "Ready to Move",
  possession: "Immediate",
  rera: "P02200002897",
  image: asblSpringsImage,
  highlights: ["OC Received - No GST", "Affordable luxury", "Ready possession", "Family-friendly community"],
  link: "https://www.asbl.in/springs"
}, {
  id: "landmark",
  name: "ASBL Landmark",
  tagline: "The Great Upgrade",
  location: "Y Junction, Kukatpally",
  type: "Spacious 3, 3.5 & 4 BHK",
  size: "Various sizes available",
  price: "Contact for pricing",
  status: "Under Construction",
  possession: "2027",
  rera: "P02200008770",
  image: asblLandmarkImage,
  highlights: ["G+19 & 20 Floors", "Prime Kukatpally location", "Spacious configurations", "Modern amenities"],
  link: "https://www.asbl.in/landmark"
}];

const stats = [
  { value: "6+", label: "Projects" },
  { value: "5,000+", label: "Happy Families" },
  { value: "15+", label: "Years Legacy" },
  { value: "4", label: "Prime Locations" }
];

const whyAsbl = [
  { icon: CheckCircle2, title: "100% RERA Compliant", text: "Every ASBL project is fully registered with RERA, ensuring complete transparency and legal protection for your investment." },
  { icon: Calendar, title: "On-Time Delivery", text: "We have a proven track record of delivering projects on schedule. No delays, no excuses — your home when you expect it." },
  { icon: Ruler, title: "No Hidden Costs", text: "Transparent pricing with all costs disclosed upfront. What you see is what you pay — no surprises at possession." },
  { icon: Building2, title: "Premium Construction", text: "We use only the finest materials and partner with top-tier contractors to ensure lasting quality in every detail." },
  { icon: Home, title: "Thoughtful Design", text: "Homes designed for Indian families with Vastu compliance, cross-ventilation, natural light, and practical layouts." },
  { icon: MapPin, title: "Prime Locations Only", text: "Strategic locations in Gachibowli, Financial District, Kokapet & Kukatpally — close to IT hubs, schools & hospitals." }
];

const Properties = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        eyebrow="ASBL Properties"
        title="Find Your Dream Home"
        subtitle="Premium living spaces crafted by ASBL across Hyderabad's most sought-after locations."
        image={heroImage}
        imageAlt="Financial District, Hyderabad"
        video="/videos/kokapet-towers.mp4"
      />

      {/* About ASBL — editorial split */}
      <section className="py-20 sm:py-28 px-6 sm:px-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
                <span className="text-muted-foreground/60 mr-3">01</span>The Builder
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
                Built on trust, delivered as promised.
              </h2>
            </Reveal>
            <Reveal delay={120} className="space-y-5 text-muted-foreground leading-relaxed lg:pt-12">
              <p>
                Founded in 2009, ASBL has emerged as one of Hyderabad's most trusted real estate developers.
                With over 5,000 happy families and 6+ successful projects, we've built our reputation on
                transparency, quality, and customer-first values.
              </p>
              <p>
                Unlike many developers who prioritise volume, ASBL focuses on crafting premium living experiences —
                thoughtful outdoor spaces, community amenities, and sustainable building practices. We don't just
                build apartments, we create thriving communities.
              </p>
            </Reveal>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-14">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 90}>
                <div className="relative h-full rounded-2xl bg-card border border-border p-5 sm:p-7 overflow-hidden">
                  <span className="absolute top-0 left-0 h-1 w-12 bg-primary rounded-br-lg" />
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary leading-none">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="font-semibold text-sm sm:text-base mt-4">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
                <span className="text-muted-foreground/60 mr-3">02</span>The Portfolio
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Our properties
              </h2>
            </div>
            <p className="text-muted-foreground text-base max-w-xs sm:text-right leading-relaxed">
              Six premium developments across the city's fastest-growing corridors.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {properties.map((property, i) => (
              <Reveal key={property.id} delay={(i % 3) * 100} className="h-full">
                <Card className="group h-full flex flex-col overflow-hidden rounded-2xl border border-border shadow-none hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 transition-all duration-300 bg-card">
                  <div className="relative h-52 overflow-hidden">
                    {property.image ? (
                      <img src={property.image} alt={property.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-muted">
                        <Building2 className="h-16 w-16 text-primary/30" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                    <Badge className={`absolute top-3 left-3 rounded-full px-3 ${property.status === "Ready to Move" ? "bg-green-600 hover:bg-green-600" : property.status === "New Launch" ? "bg-secondary hover:bg-secondary" : "bg-primary hover:bg-primary"}`}>
                      {property.status}
                    </Badge>
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">{property.name}</h3>
                      <p className="text-sm text-white/65">{property.tagline}</p>
                    </div>
                  </div>

                  <CardContent className="p-5 flex flex-col flex-1 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      {property.location}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Home className="h-4 w-4 text-muted-foreground/60" />
                        <span>{property.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Ruler className="h-4 w-4 text-muted-foreground/60" />
                        <span>{property.size}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground/60" />
                        <span>{property.possession}</span>
                      </div>
                      <div className="font-semibold text-primary">
                        {property.price}
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-3 border-t border-border flex-1">
                      {property.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <a href={property.link} target="_blank" rel="noopener noreferrer" className="block pt-1">
                      <Button variant="hero" className="w-full group/btn">
                        View Property
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </a>

                    <p className="text-[10px] text-muted-foreground/70 text-center">
                      RERA: {property.rera}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why ASBL */}
      <section className="py-20 sm:py-28 px-6 sm:px-10">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">03</span>Why ASBL
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              What sets us apart.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {whyAsbl.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 100} className="h-full">
                <div className="h-full rounded-2xl bg-card border border-border p-7 sm:p-8 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-5">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">04</span>Know Your Builder
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
              Hear it from the team.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl">
            {podcasts.map((podcast, i) => (
              <Reveal key={podcast.id} delay={i * 120}>
                <a href={`https://www.youtube.com/watch?v=${podcast.videoId}`} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="overflow-hidden rounded-2xl border border-border bg-card hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <img src={podcast.thumbnail} alt={podcast.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="h-6 w-6 text-foreground ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {podcast.title}
                      </h3>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — dark statement band */}
      <section className="relative bg-foreground text-background overflow-hidden grain">
        <div className="relative z-10 container mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-24">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] text-background">
                Ready to find your perfect home?
              </h2>
              <p className="text-background/50 text-base mt-4 leading-relaxed">
                Schedule a site visit and experience ASBL's premium living spaces firsthand.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://www.asbl.in" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full bg-background text-foreground hover:bg-background/90 px-7 shadow-none hover:scale-100">
                  Visit ASBL Website
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </a>
              <a href="tel:+919289589630">
                <Button variant="outline" className="rounded-full border-background/30 text-background hover:bg-background/10 hover:border-background/60 px-7">
                  Call: +91 92895 89630
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Properties;
