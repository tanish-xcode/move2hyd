import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Home, TrendingUp, Wind, Clock, DollarSign, MapPin, Wallet, Sparkles, Train, Trophy, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";

interface CityMetrics {
  rent: string;
  trafficTime: string;
  airQuality: string;
  jobGrowth: string;
  costOfLiving: string;
}

interface Preferences {
  budget: number;
  commute: number;
  lifestyle: number;
}

const hyderabadData = {
  rent: "₹15,000 - ₹25,000",
  trafficTime: "25-35 min",
  airQuality: "Moderate (AQI 80-120)",
  jobGrowth: "18% annually",
  costOfLiving: "₹30,000 - ₹45,000/mo"
};

// Indicative city averages, for comparison against Hyderabad
const otherCities: Record<string, typeof hyderabadData> = {
  Mumbai: {
    rent: "₹38,000 - ₹65,000",
    trafficTime: "50-80 min",
    airQuality: "Poor (AQI 150-200)",
    jobGrowth: "12% annually",
    costOfLiving: "₹65,000 - ₹95,000/mo"
  },
  Bengaluru: {
    rent: "₹28,000 - ₹48,000",
    trafficTime: "50-90 min",
    airQuality: "Moderate (AQI 90-140)",
    jobGrowth: "15% annually",
    costOfLiving: "₹50,000 - ₹75,000/mo"
  },
  "Delhi NCR": {
    rent: "₹26,000 - ₹46,000",
    trafficTime: "45-75 min",
    airQuality: "Severe (AQI 200-400)",
    jobGrowth: "13% annually",
    costOfLiving: "₹48,000 - ₹72,000/mo"
  },
  Pune: {
    rent: "₹20,000 - ₹36,000",
    trafficTime: "35-55 min",
    airQuality: "Moderate (AQI 95-140)",
    jobGrowth: "14% annually",
    costOfLiving: "₹40,000 - ₹60,000/mo"
  },
  Chennai: {
    rent: "₹18,000 - ₹34,000",
    trafficTime: "35-55 min",
    airQuality: "Moderate (AQI 90-130)",
    jobGrowth: "12% annually",
    costOfLiving: "₹38,000 - ₹58,000/mo"
  }
};

const neighborhoods = [
  {
    name: "Hitech City",
    budget: 80,
    commute: 90,
    lifestyle: 85,
    description: "Tech hub with modern amenities, great connectivity, and vibrant nightlife",
    rent: "₹20,000 - ₹35,000",
    distanceFromMadhapur: 2,
    distanceFromFinancialDistrict: 8,
    hasMetro: false
  },
  {
    name: "Jubilee Hills",
    budget: 60,
    commute: 70,
    lifestyle: 95,
    description: "Upscale area with luxury shopping, fine dining, and entertainment options",
    rent: "₹25,000 - ₹50,000",
    distanceFromMadhapur: 5,
    distanceFromFinancialDistrict: 12,
    hasMetro: false
  },
  {
    name: "Gachibowli",
    budget: 85,
    commute: 95,
    lifestyle: 80,
    description: "IT corridor with excellent infrastructure and proximity to tech companies",
    rent: "₹18,000 - ₹30,000",
    distanceFromMadhapur: 4,
    distanceFromFinancialDistrict: 6,
    hasMetro: true
  },
  {
    name: "Banjara Hills",
    budget: 65,
    commute: 75,
    lifestyle: 90,
    description: "Affluent residential area with parks, cafes, and cultural spots",
    rent: "₹22,000 - ₹40,000",
    distanceFromMadhapur: 6,
    distanceFromFinancialDistrict: 10,
    hasMetro: false
  },
  {
    name: "Kondapur",
    budget: 90,
    commute: 85,
    lifestyle: 75,
    description: "Affordable with good connectivity to IT hubs and essential amenities",
    rent: "₹15,000 - ₹25,000",
    distanceFromMadhapur: 3,
    distanceFromFinancialDistrict: 9,
    hasMetro: false
  },
  {
    name: "Madhapur",
    budget: 75,
    commute: 88,
    lifestyle: 82,
    description: "Central location near tech parks with diverse dining and shopping",
    rent: "₹17,000 - ₹28,000",
    distanceFromMadhapur: 0,
    distanceFromFinancialDistrict: 8,
    hasMetro: false
  },
  {
    name: "Uppal",
    budget: 95,
    commute: 75,
    lifestyle: 70,
    description: "Budget-friendly area with excellent metro connectivity to major work hubs",
    rent: "₹12,000 - ₹20,000",
    distanceFromMadhapur: 18,
    distanceFromFinancialDistrict: 10,
    hasMetro: true
  },
  {
    name: "Miyapur",
    budget: 93,
    commute: 72,
    lifestyle: 68,
    description: "Affordable residential area with metro access and growing infrastructure",
    rent: "₹13,000 - ₹22,000",
    distanceFromMadhapur: 15,
    distanceFromFinancialDistrict: 20,
    hasMetro: true
  },
  {
    name: "Nanakramguda",
    budget: 82,
    commute: 92,
    lifestyle: 78,
    description: "Close to Financial District with good mix of affordability and accessibility",
    rent: "₹16,000 - ₹27,000",
    distanceFromMadhapur: 5,
    distanceFromFinancialDistrict: 3,
    hasMetro: false
  },
  {
    name: "Raidurg",
    budget: 78,
    commute: 90,
    lifestyle: 80,
    description: "Prime IT location with metro connectivity and upscale residential complexes",
    rent: "₹18,000 - ₹32,000",
    distanceFromMadhapur: 3,
    distanceFromFinancialDistrict: 5,
    hasMetro: true
  },
  {
    name: "Manikonda",
    budget: 88,
    commute: 85,
    lifestyle: 72,
    description: "Affordable residential area close to IT hubs with growing amenities",
    rent: "₹14,000 - ₹24,000",
    distanceFromMadhapur: 6,
    distanceFromFinancialDistrict: 4,
    hasMetro: false
  },
  {
    name: "Puppalaguda",
    budget: 90,
    commute: 82,
    lifestyle: 68,
    description: "Emerging residential area with budget-friendly options near Financial District",
    rent: "₹12,000 - ₹20,000",
    distanceFromMadhapur: 8,
    distanceFromFinancialDistrict: 5,
    hasMetro: false
  },
  {
    name: "Kokapet",
    budget: 75,
    commute: 88,
    lifestyle: 82,
    description: "Rapidly developing area with premium villas and proximity to Financial District",
    rent: "₹20,000 - ₹40,000",
    distanceFromMadhapur: 10,
    distanceFromFinancialDistrict: 4,
    hasMetro: false
  },
  {
    name: "Narsingi",
    budget: 85,
    commute: 80,
    lifestyle: 75,
    description: "Growing suburb with gated communities and good connectivity to IT hubs",
    rent: "₹15,000 - ₹28,000",
    distanceFromMadhapur: 12,
    distanceFromFinancialDistrict: 6,
    hasMetro: false
  },
  {
    name: "Gandipet",
    budget: 88,
    commute: 75,
    lifestyle: 78,
    description: "Scenic lakeside area with peaceful environment and weekend getaway vibes",
    rent: "₹14,000 - ₹25,000",
    distanceFromMadhapur: 15,
    distanceFromFinancialDistrict: 8,
    hasMetro: false
  },
  {
    name: "Tellapur",
    budget: 92,
    commute: 70,
    lifestyle: 65,
    description: "Affordable emerging suburb with new residential projects and open spaces",
    rent: "₹11,000 - ₹18,000",
    distanceFromMadhapur: 18,
    distanceFromFinancialDistrict: 15,
    hasMetro: false
  },
  {
    name: "Gopanpally",
    budget: 86,
    commute: 84,
    lifestyle: 70,
    description: "Quiet residential area with affordable housing near Gachibowli IT hub",
    rent: "₹13,000 - ₹22,000",
    distanceFromMadhapur: 7,
    distanceFromFinancialDistrict: 8,
    hasMetro: false
  },
  {
    name: "Nallagandla",
    budget: 87,
    commute: 78,
    lifestyle: 72,
    description: "Growing residential area with gated communities and family-friendly environment",
    rent: "₹14,000 - ₹24,000",
    distanceFromMadhapur: 10,
    distanceFromFinancialDistrict: 12,
    hasMetro: false
  },
  {
    name: "Lingampally",
    budget: 92,
    commute: 72,
    lifestyle: 65,
    description: "Budget-friendly area with MMTS connectivity and proximity to IT corridor",
    rent: "₹10,000 - ₹18,000",
    distanceFromMadhapur: 12,
    distanceFromFinancialDistrict: 16,
    hasMetro: true
  },
  {
    name: "Chandanagar",
    budget: 90,
    commute: 70,
    lifestyle: 68,
    description: "Affordable suburb with good local markets and developing infrastructure",
    rent: "₹11,000 - ₹19,000",
    distanceFromMadhapur: 14,
    distanceFromFinancialDistrict: 18,
    hasMetro: false
  },
  {
    name: "Hafeezpet",
    budget: 88,
    commute: 80,
    lifestyle: 70,
    description: "Well-connected area between Kondapur and Miyapur with affordable options",
    rent: "₹12,000 - ₹20,000",
    distanceFromMadhapur: 8,
    distanceFromFinancialDistrict: 14,
    hasMetro: false
  },
  {
    name: "Bachupally",
    budget: 93,
    commute: 68,
    lifestyle: 62,
    description: "Emerging residential area with very affordable housing and open spaces",
    rent: "₹9,000 - ₹16,000",
    distanceFromMadhapur: 18,
    distanceFromFinancialDistrict: 22,
    hasMetro: false
  },
  {
    name: "Pragathi Nagar",
    budget: 91,
    commute: 70,
    lifestyle: 65,
    description: "Budget-friendly locality near Kukatpally with good local amenities",
    rent: "₹10,000 - ₹17,000",
    distanceFromMadhapur: 12,
    distanceFromFinancialDistrict: 18,
    hasMetro: false
  },
  {
    name: "Alwal",
    budget: 90,
    commute: 60,
    lifestyle: 68,
    description: "Peaceful residential area in Secunderabad with affordable housing and local markets",
    rent: "₹10,000 - ₹18,000",
    distanceFromMadhapur: 20,
    distanceFromFinancialDistrict: 24,
    hasMetro: false
  },
  {
    name: "Kompally",
    budget: 92,
    commute: 58,
    lifestyle: 65,
    description: "Fast-growing suburb with gated communities and excellent schools",
    rent: "₹11,000 - ₹20,000",
    distanceFromMadhapur: 22,
    distanceFromFinancialDistrict: 26,
    hasMetro: false
  },
  {
    name: "LB Nagar",
    budget: 91,
    commute: 50,
    lifestyle: 72,
    description: "Major commercial hub with metro connectivity and diverse shopping options",
    rent: "₹10,000 - ₹18,000",
    distanceFromMadhapur: 20,
    distanceFromFinancialDistrict: 25,
    hasMetro: true
  },
  {
    name: "Abids",
    budget: 88,
    commute: 55,
    lifestyle: 72,
    description: "Historic commercial hub with affordable housing and bustling markets",
    rent: "₹10,000 - ₹18,000",
    distanceFromMadhapur: 12,
    distanceFromFinancialDistrict: 18,
    hasMetro: false
  },
  {
    name: "Basheerbagh",
    budget: 82,
    commute: 58,
    lifestyle: 75,
    description: "Central location with good connectivity to old and new city areas",
    rent: "₹12,000 - ₹22,000",
    distanceFromMadhapur: 10,
    distanceFromFinancialDistrict: 16,
    hasMetro: false
  },
  {
    name: "Narayanguda",
    budget: 85,
    commute: 55,
    lifestyle: 70,
    description: "Well-connected residential area with hospitals and educational institutions",
    rent: "₹11,000 - ₹20,000",
    distanceFromMadhapur: 11,
    distanceFromFinancialDistrict: 17,
    hasMetro: false
  },
  {
    name: "Malakpet",
    budget: 92,
    commute: 50,
    lifestyle: 65,
    description: "Affordable old city area with metro connectivity and local markets",
    rent: "₹8,000 - ₹14,000",
    distanceFromMadhapur: 15,
    distanceFromFinancialDistrict: 20,
    hasMetro: true
  },
  {
    name: "Dilsukhnagar",
    budget: 91,
    commute: 48,
    lifestyle: 72,
    description: "Major commercial hub with excellent shopping and metro access",
    rent: "₹9,000 - ₹16,000",
    distanceFromMadhapur: 16,
    distanceFromFinancialDistrict: 22,
    hasMetro: true
  },
  {
    name: "Tarnaka",
    budget: 88,
    commute: 55,
    lifestyle: 70,
    description: "Quiet residential area near universities with good local amenities",
    rent: "₹10,000 - ₹18,000",
    distanceFromMadhapur: 14,
    distanceFromFinancialDistrict: 18,
    hasMetro: true
  },
  {
    name: "Secunderabad",
    budget: 85,
    commute: 60,
    lifestyle: 78,
    description: "Twin city with railway hub, cantonment area, and diverse neighborhoods",
    rent: "₹12,000 - ₹22,000",
    distanceFromMadhapur: 12,
    distanceFromFinancialDistrict: 16,
    hasMetro: true
  },
  {
    name: "Begumpet",
    budget: 78,
    commute: 65,
    lifestyle: 80,
    description: "Well-developed area near airport with corporate offices and restaurants",
    rent: "₹15,000 - ₹28,000",
    distanceFromMadhapur: 9,
    distanceFromFinancialDistrict: 14,
    hasMetro: true
  },
  {
    name: "Somajiguda",
    budget: 75,
    commute: 68,
    lifestyle: 82,
    description: "Prime location with hotels, shopping centers, and easy connectivity",
    rent: "₹16,000 - ₹30,000",
    distanceFromMadhapur: 8,
    distanceFromFinancialDistrict: 13,
    hasMetro: false
  },
  {
    name: "Ameerpet",
    budget: 86,
    commute: 70,
    lifestyle: 75,
    description: "Educational hub with coaching centers, metro access, and affordable rentals",
    rent: "₹12,000 - ₹20,000",
    distanceFromMadhapur: 7,
    distanceFromFinancialDistrict: 12,
    hasMetro: true
  },
  {
    name: "Mehdipatnam",
    budget: 87,
    commute: 60,
    lifestyle: 73,
    description: "Major junction connecting old and new city with vibrant local markets",
    rent: "₹11,000 - ₹20,000",
    distanceFromMadhapur: 8,
    distanceFromFinancialDistrict: 10,
    hasMetro: false
  },
  {
    name: "Tolichowki",
    budget: 88,
    commute: 65,
    lifestyle: 72,
    description: "Affordable area near Golconda Fort with growing residential complexes",
    rent: "₹10,000 - ₹18,000",
    distanceFromMadhapur: 7,
    distanceFromFinancialDistrict: 8,
    hasMetro: false
  },
  {
    name: "Nampally",
    budget: 86,
    commute: 55,
    lifestyle: 74,
    description: "Central location with railway station, hospitals, and heritage buildings",
    rent: "₹10,000 - ₹18,000",
    distanceFromMadhapur: 11,
    distanceFromFinancialDistrict: 17,
    hasMetro: true
  },
  {
    name: "Khairatabad",
    budget: 80,
    commute: 62,
    lifestyle: 76,
    description: "Well-connected area near Hussain Sagar with government offices nearby",
    rent: "₹13,000 - ₹24,000",
    distanceFromMadhapur: 9,
    distanceFromFinancialDistrict: 14,
    hasMetro: true
  },
  {
    name: "Musheerabad",
    budget: 88,
    commute: 58,
    lifestyle: 68,
    description: "Residential area with metro access and proximity to central Hyderabad",
    rent: "₹10,000 - ₹17,000",
    distanceFromMadhapur: 10,
    distanceFromFinancialDistrict: 15,
    hasMetro: true
  },
  {
    name: "Himayatnagar",
    budget: 82,
    commute: 60,
    lifestyle: 80,
    description: "Popular residential area with cafes, restaurants, and good connectivity",
    rent: "₹14,000 - ₹25,000",
    distanceFromMadhapur: 10,
    distanceFromFinancialDistrict: 15,
    hasMetro: false
  }
];

export const CityComparisonTool = () => {
  const [preferences, setPreferences] = useState<Preferences>({
    budget: 70,
    commute: 70,
    lifestyle: 70
  });

  const [showRecommendations, setShowRecommendations] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string>("Mumbai");

  const handleGetRecommendations = () => {
    setShowRecommendations(true);
  };

  const getMatchScore = (neighborhood: typeof neighborhoods[0]) => {
    // Normalize preferences to weights (how much each factor matters)
    const totalWeight = preferences.budget + preferences.commute + preferences.lifestyle;
    const budgetWeight = preferences.budget / totalWeight;
    const commuteWeight = preferences.commute / totalWeight;
    const lifestyleWeight = preferences.lifestyle / totalWeight;

    // Budget score: High user priority + high neighborhood affordability = good match
    // If user wants budget-friendly (high slider), match with high-budget neighborhoods
    const budgetMatch = 100 - Math.abs(preferences.budget - neighborhood.budget);
    
    // Commute score: Calculate based on actual distance and metro availability
    const avgDistance = (neighborhood.distanceFromMadhapur + neighborhood.distanceFromFinancialDistrict) / 2;
    // Convert distance to a 0-100 score (closer = higher score)
    const maxDistance = 25; // max expected distance in km
    let distanceScore = Math.max(0, 100 - (avgDistance / maxDistance) * 100);
    
    // Metro bonus: adds effective commute improvement
    if (neighborhood.hasMetro) {
      distanceScore = Math.min(100, distanceScore + 15);
    }
    
    // If commute priority is low, distance matters less - blend with base commute rating
    const commuteMatch = preferences.commute > 50 
      ? distanceScore 
      : (distanceScore * 0.4) + (neighborhood.commute * 0.6);
    
    // Lifestyle score: Direct similarity match
    const lifestyleMatch = 100 - Math.abs(preferences.lifestyle - neighborhood.lifestyle);

    // Calculate weighted final score
    const weightedScore = (
      (budgetMatch * budgetWeight) +
      (commuteMatch * commuteWeight) +
      (lifestyleMatch * lifestyleWeight)
    );

    // Apply bonus modifiers for special cases
    let finalScore = weightedScore;
    
    // Bonus: Budget-conscious users get extra points for very affordable areas
    if (preferences.budget >= 80 && neighborhood.budget >= 90) {
      finalScore += 5;
    }
    
    // Bonus: Commute-focused users get extra points for IT corridor proximity
    if (preferences.commute >= 80 && avgDistance <= 6) {
      finalScore += 5;
    }
    
    // Bonus: Lifestyle-focused users get extra points for premium areas
    if (preferences.lifestyle >= 80 && neighborhood.lifestyle >= 85) {
      finalScore += 5;
    }

    return Math.min(100, Math.max(0, finalScore));
  };

  const sortedNeighborhoods = [...neighborhoods].sort((a, b) => 
    getMatchScore(b) - getMatchScore(a)
  );

  const sliders = [
    { key: "budget" as const, icon: Wallet, label: "Budget friendly", help: "Higher = prioritise more affordable areas" },
    { key: "commute" as const, icon: Clock, label: "Short commute", help: "Higher = closer to Madhapur / Financial District" },
    { key: "lifestyle" as const, icon: Sparkles, label: "Lifestyle & nightlife", help: "Higher = more dining, bars & entertainment" },
  ];

  const metricRows = [
    { key: "rent" as const, icon: Home, label: "Rent (1BHK)", short: "Rent" },
    { key: "trafficTime" as const, icon: Clock, label: "Commute (one-way)", short: "Commute" },
    { key: "airQuality" as const, icon: Wind, label: "Air Quality", short: "Air" },
    { key: "jobGrowth" as const, icon: TrendingUp, label: "Job Growth", short: "Jobs" },
    { key: "costOfLiving" as const, icon: Wallet, label: "Cost of Living", short: "Cost" },
  ];

  return (
    <section className="py-14 sm:py-28 px-4 sm:px-10">
      <div className="container mx-auto max-w-6xl">
        <Reveal className="mb-10 sm:mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            <span className="text-muted-foreground/60 mr-3">05</span>Interactive Tool
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Find your fit.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-5 leading-relaxed">
            Match your priorities to the right neighbourhood — or see how Hyderabad stacks up against your current city.
          </p>
        </Reveal>

        <Reveal delay={120} y={36}>
        <Tabs defaultValue="neighborhoods" className="w-full">
          <TabsList className="inline-flex w-full sm:w-auto mb-8 p-1 bg-muted rounded-full h-12">
            <TabsTrigger value="neighborhoods" className="flex-1 sm:flex-none text-sm font-medium rounded-full px-3 sm:px-6 data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">
              <Home className="w-4 h-4 mr-2" />
              Find a neighbourhood
            </TabsTrigger>
            <TabsTrigger value="compare" className="flex-1 sm:flex-none text-sm font-medium rounded-full px-3 sm:px-6 data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">
              <TrendingUp className="w-4 h-4 mr-2" />
              Compare cities
            </TabsTrigger>
          </TabsList>

          <TabsContent value="compare" className="mt-0">
            {/* City picker */}
            <p className="text-sm font-medium mb-3">Pick a city to compare against Hyderabad:</p>
            <div className="flex flex-wrap gap-2 mb-7">
              {Object.keys(otherCities).map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                    selectedCity === city
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-card text-foreground border-border hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>

            {/* Comparison table */}
            <div className="rounded-2xl border border-border overflow-hidden bg-card">
              {/* Header row */}
              <div className="grid grid-cols-3 sm:grid-cols-[1.2fr_1fr_1fr]">
                <div className="p-3 sm:p-5 text-xs uppercase tracking-wider text-muted-foreground font-medium flex items-end">
                  Metric
                </div>
                <div className="p-3 sm:p-5 text-sm sm:text-base font-bold text-center border-l border-border break-words">
                  {selectedCity}
                </div>
                <div className="p-3 sm:p-5 text-sm sm:text-base font-bold text-center border-l border-border text-primary bg-primary/[0.05]">
                  Hyderabad
                </div>
              </div>

              {metricRows.map((row) => {
                const Icon = row.icon;
                return (
                  <div key={row.key} className="grid grid-cols-[1.2fr_1fr_1fr] border-t border-border">
                    <div className="p-3 sm:p-5 flex items-center gap-2 text-sm font-medium">
                      <Icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="hidden sm:inline">{row.label}</span>
                      <span className="sm:hidden">{row.short}</span>
                    </div>
                    <div className="p-3 sm:p-5 text-xs sm:text-sm text-center text-muted-foreground border-l border-border flex items-center justify-center break-words">
                      {otherCities[selectedCity][row.key]}
                    </div>
                    <div className="p-3 sm:p-5 text-center border-l border-border bg-primary/[0.05] flex flex-col items-center justify-center gap-1.5">
                      <span className="text-xs sm:text-sm font-semibold break-words">{hyderabadData[row.key]}</span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-primary uppercase tracking-wide">
                        <Check className="w-3 h-3" /> Better
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Figures are indicative city averages for comparison purposes.
            </p>
          </TabsContent>

          <TabsContent value="neighborhoods" className="mt-0">
            <div className="grid lg:grid-cols-5 gap-5">
              {/* Controls */}
              <div className="lg:col-span-2 rounded-2xl bg-card border border-border p-6 sm:p-8 h-fit">
                <h3 className="text-lg font-bold tracking-tight">What matters most to you?</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-6">Drag each slider, then get your matches.</p>

                <div className="divide-y divide-border">
                  {sliders.map(({ key, icon: Icon, label, help }) => (
                    <div key={key} className="py-5 first:pt-0">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4 text-primary" />
                          <Label className="text-sm font-semibold">{label}</Label>
                        </div>
                        <span className="text-sm font-bold text-primary tabular-nums">{preferences[key]}%</span>
                      </div>
                      <Slider
                        value={[preferences[key]]}
                        onValueChange={(value) => setPreferences(prev => ({ ...prev, [key]: value[0] }))}
                        max={100}
                        step={1}
                      />
                      <p className="text-xs text-muted-foreground mt-2">{help}</p>
                    </div>
                  ))}
                </div>

                <Button onClick={handleGetRecommendations} size="lg" className="w-full mt-6">
                  Get my matches
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Results */}
              <div className="lg:col-span-3">
                {showRecommendations ? (
                  <div className="space-y-3">
                    {sortedNeighborhoods.slice(0, 5).map((neighborhood, index) => {
                      const score = Math.round(getMatchScore(neighborhood));
                      const isTop = index === 0;
                      return (
                        <div
                          key={neighborhood.name}
                          className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 ${
                            isTop ? "border-primary bg-primary/[0.04] shadow-[var(--shadow-lift)]" : "border-border bg-card hover:shadow-md"
                          }`}
                          style={{ animation: `fade-in 0.4s ease-out ${index * 0.06}s backwards` }}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-3 min-w-0">
                              <span className={`flex-shrink-0 w-8 h-8 rounded-full grid place-items-center text-sm font-bold ${
                                isTop ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                              }`}>
                                {isTop ? <Trophy className="w-4 h-4" /> : index + 1}
                              </span>
                              <div className="min-w-0">
                                <h4 className="font-bold leading-tight">{neighborhood.name}</h4>
                                <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">{neighborhood.description}</p>
                              </div>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <p className="text-2xl font-bold text-primary leading-none tabular-nums">{score}<span className="text-sm">%</span></p>
                              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">match</p>
                            </div>
                          </div>
                          {/* score bar */}
                          <div className="h-1.5 rounded-full bg-muted mt-4 overflow-hidden">
                            <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${score}%` }} />
                          </div>
                          <div className="flex flex-wrap gap-2 mt-4 text-xs">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                              <DollarSign className="w-3 h-3" /> {neighborhood.rent}
                            </span>
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                              <MapPin className="w-3 h-3" /> {neighborhood.distanceFromMadhapur}km to Madhapur
                            </span>
                            {neighborhood.hasMetro && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                                <Train className="w-3 h-3" /> Metro
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                    <p className="text-center text-xs text-muted-foreground pt-1">
                      Top 5 of {sortedNeighborhoods.length} neighbourhoods · adjust the sliders to refine
                    </p>
                  </div>
                ) : (
                  <div className="h-full min-h-[320px] rounded-2xl border border-dashed border-border flex flex-col items-center justify-center text-center p-10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 grid place-items-center mb-4">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-semibold">Your matches will appear here</p>
                    <p className="text-sm text-muted-foreground mt-1 max-w-xs">Set your priorities on the left and hit "Get my matches".</p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
        </Reveal>
      </div>
    </section>
  );
};