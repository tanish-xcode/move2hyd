import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Building2, MapPin, Briefcase, Landmark, ShoppingBag, UtensilsCrossed, Trees, GraduationCap, Plane, Train } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

interface Location {
  name: string;
  coordinates: [number, number];
  type: 'asbl' | 'tech' | 'heritage' | 'lifestyle' | 'nature' | 'education' | 'transport';
  description: string;
  highlight?: string;
}

const locations: Location[] = [
  // ASBL Properties
  { name: 'ASBL Loft', coordinates: [17.4435, 78.3915], type: 'asbl', description: 'Premium 2 & 3 BHK apartments with modern amenities', highlight: '5 min to Financial District' },
  { name: 'ASBL Broadway', coordinates: [17.4400, 78.3850], type: 'asbl', description: 'Luxury high-rise living with panoramic city views', highlight: 'Ready to move' },
  { name: 'ASBL Spectra', coordinates: [17.4380, 78.3780], type: 'asbl', description: 'Contemporary homes with world-class clubhouse', highlight: 'Gated community' },
  { name: 'ASBL Spire', coordinates: [17.4550, 78.4200], type: 'asbl', description: 'Iconic tower with smart home features', highlight: 'Near IT corridor' },
  { name: 'ASBL Springs', coordinates: [17.4320, 78.3650], type: 'asbl', description: 'Serene living surrounded by nature', highlight: 'Low-density development' },
  { name: 'ASBL Landmark', coordinates: [17.4480, 78.4100], type: 'asbl', description: 'Premium residences in prime location', highlight: 'Investment hotspot' },
  
  // Tech & Business Hubs
  { name: 'HITEC City', coordinates: [17.4435, 78.3772], type: 'tech', description: 'India\'s premier IT hub housing Google, Microsoft, Amazon & 100+ companies', highlight: '500,000+ IT professionals' },
  { name: 'Financial District', coordinates: [17.4230, 78.3550], type: 'tech', description: 'Modern business district with Fortune 500 offices', highlight: 'Fastest growing CBD' },
  { name: 'Gachibowli', coordinates: [17.4401, 78.3489], type: 'tech', description: 'Major tech corridor with ISB, IIIT & IT parks', highlight: 'Education + Tech hub' },
  { name: 'Madhapur', coordinates: [17.4483, 78.3915], type: 'tech', description: 'Startup ecosystem with coworking spaces & cafes', highlight: 'Startup capital of South' },
  { name: 'Kokapet', coordinates: [17.4150, 78.3450], type: 'tech', description: 'Emerging IT hub with new developments', highlight: 'Next growth corridor' },
  { name: 'Nanakramguda', coordinates: [17.4200, 78.3600], type: 'tech', description: 'Home to TCS, Wipro & major tech campuses', highlight: 'Premium office space' },
  
  // Heritage & Culture
  { name: 'Charminar', coordinates: [17.3616, 78.4747], type: 'heritage', description: 'Iconic 16th-century monument & symbol of Hyderabad', highlight: 'UNESCO heritage zone' },
  { name: 'Golconda Fort', coordinates: [17.3833, 78.4011], type: 'heritage', description: 'Historic fortress known for acoustics & architecture', highlight: 'Sound & light show' },
  { name: 'Chowmahalla Palace', coordinates: [17.3575, 78.4720], type: 'heritage', description: 'Grand palace of the Nizams with vintage car collection', highlight: 'Royal heritage' },
  { name: 'Salar Jung Museum', coordinates: [17.3714, 78.4804], type: 'heritage', description: 'One of India\'s largest art museums', highlight: '43,000+ artifacts' },
  { name: 'Hussain Sagar', coordinates: [17.4239, 78.4747], type: 'heritage', description: 'Heart-shaped lake with 18m Buddha statue', highlight: 'City landmark' },
  { name: 'Ramoji Film City', coordinates: [17.2543, 78.6808], type: 'heritage', description: 'World\'s largest film studio complex', highlight: 'Guinness record holder' },
  
  // Lifestyle & Shopping
  { name: 'Jubilee Hills', coordinates: [17.4326, 78.4074], type: 'lifestyle', description: 'Upscale neighborhood with fine dining & boutiques', highlight: 'Celebrity hotspot' },
  { name: 'Banjara Hills', coordinates: [17.4156, 78.4445], type: 'lifestyle', description: 'Premium lifestyle destination with luxury brands', highlight: 'High-end retail' },
  { name: 'Inorbit Mall', coordinates: [17.4350, 78.3772], type: 'lifestyle', description: 'Major shopping & entertainment complex', highlight: '200+ stores' },
  { name: 'Forum Sujana Mall', coordinates: [17.4262, 78.3284], type: 'lifestyle', description: 'Modern mall near IT corridor', highlight: 'Multiplex & gaming' },
  { name: 'GVK One Mall', coordinates: [17.4267, 78.4484], type: 'lifestyle', description: 'Luxury mall with international brands', highlight: 'Premium shopping' },
  { name: 'Laad Bazaar', coordinates: [17.3605, 78.4736], type: 'lifestyle', description: 'Historic market famous for bangles & pearls', highlight: '200+ year old bazaar' },
  
  // Nature & Recreation
  { name: 'KBR National Park', coordinates: [17.4167, 78.4200], type: 'nature', description: 'Urban forest reserve with jogging trails', highlight: '400 acres of greenery' },
  { name: 'Durgam Cheruvu', coordinates: [17.4350, 78.3850], type: 'nature', description: 'Secret lake with cable-stayed bridge', highlight: 'Sunset views' },
  { name: 'Botanical Gardens', coordinates: [17.4563, 78.3748], type: 'nature', description: 'Vast gardens with rare plant species', highlight: 'Kondapur oasis' },
  { name: 'Osman Sagar', coordinates: [17.3722, 78.2986], type: 'nature', description: 'Scenic reservoir perfect for picnics', highlight: 'Weekend getaway' },
  { name: 'Shamirpet Lake', coordinates: [17.5922, 78.5456], type: 'nature', description: 'Serene lake surrounded by forests', highlight: 'Bird watching spot' },
  
  // Education
  { name: 'ISB Hyderabad', coordinates: [17.4300, 78.3400], type: 'education', description: 'Premier business school ranked #1 in India', highlight: 'World-class MBA' },
  { name: 'IIIT Hyderabad', coordinates: [17.4450, 78.3490], type: 'education', description: 'Top technology & research institute', highlight: 'AI & ML research hub' },
  { name: 'University of Hyderabad', coordinates: [17.4600, 78.3300], type: 'education', description: 'Central university with beautiful campus', highlight: '2300 acre campus' },
  { name: 'BITS Pilani Hyderabad', coordinates: [17.5469, 78.5728], type: 'education', description: 'Premier engineering institute', highlight: 'Top-tier placements' },
  
  // Transport
  { name: 'Rajiv Gandhi Airport', coordinates: [17.2403, 78.4294], type: 'transport', description: 'International airport with 100+ destinations', highlight: '25 million passengers/year' },
  { name: 'Secunderabad Junction', coordinates: [17.4344, 78.5013], type: 'transport', description: 'Major railway hub connecting all of India', highlight: 'Heritage station' },
  { name: 'MGBS Bus Station', coordinates: [17.3784, 78.4833], type: 'transport', description: 'Largest bus terminal in Asia', highlight: '10,000+ buses daily' },
];

const typeConfig: Record<string, { color: string; label: string; icon: React.ElementType }> = {
  asbl: { color: 'hsl(243, 30%, 31%)', label: 'ASBL Properties', icon: Building2 },
  tech: { color: 'hsl(217, 91%, 60%)', label: 'Tech & Business', icon: Briefcase },
  heritage: { color: 'hsl(35, 92%, 50%)', label: 'Heritage & Culture', icon: Landmark },
  lifestyle: { color: 'hsl(330, 80%, 60%)', label: 'Lifestyle & Shopping', icon: ShoppingBag },
  nature: { color: 'hsl(142, 71%, 45%)', label: 'Nature & Parks', icon: Trees },
  education: { color: 'hsl(262, 83%, 58%)', label: 'Education', icon: GraduationCap },
  transport: { color: 'hsl(200, 80%, 50%)', label: 'Transport', icon: Plane },
};

const createMarkerIcon = (type: string) => {
  const isAsbl = type === 'asbl';
  const size = isAsbl ? 34 : 26;
  const color = typeConfig[type]?.color || 'hsl(220, 9%, 46%)';
  
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: ${size}px;
        height: ${size}px;
        background-color: ${color};
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.25);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 600;
        font-size: ${isAsbl ? '12px' : '10px'};
        cursor: pointer;
        transition: transform 0.2s;
      ">
        ${isAsbl ? 'A' : ''}
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
  });
};

const HyderabadMap = () => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    mapRef.current = L.map(mapContainerRef.current, {
      center: [17.4200, 78.4000],
      zoom: 11,
      scrollWheelZoom: false,
      zoomControl: false,
    });

    L.control.zoom({ position: 'bottomright' }).addTo(mapRef.current);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
      maxZoom: 19,
    }).addTo(mapRef.current);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    const filteredLocations = activeFilter 
      ? locations.filter(loc => loc.type === activeFilter)
      : locations;
    
    filteredLocations.forEach((location) => {
      const config = typeConfig[location.type];
      const marker = L.marker(location.coordinates, {
        icon: createMarkerIcon(location.type),
      }).addTo(mapRef.current!);

      marker.bindPopup(`
        <div style="padding: 8px; min-width: 200px; max-width: 260px;">
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
            <span style="
              font-size: 9px; 
              color: ${config.color}; 
              text-transform: uppercase; 
              letter-spacing: 0.5px;
              font-weight: 600;
              background: ${config.color}15;
              padding: 2px 8px;
              border-radius: 10px;
            ">${config.label}</span>
          </div>
          <h3 style="font-weight: 700; color: #1a1a1a; font-size: 15px; margin: 0 0 4px 0;">${location.name}</h3>
          <p style="font-size: 12px; color: #555; margin: 0 0 8px 0; line-height: 1.5;">${location.description}</p>
          ${location.highlight ? `
            <div style="
              font-size: 11px;
              color: ${config.color};
              font-weight: 600;
              display: flex;
              align-items: center;
              gap: 4px;
              margin-bottom: 8px;
            ">
              <span style="font-size: 14px;">✦</span> ${location.highlight}
            </div>
          ` : ''}
          <a
            href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.name + ', Hyderabad')}"
            target="_blank"
            rel="noopener noreferrer"
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 6px;
              width: 100%;
              box-sizing: border-box;
              background: #18181b;
              color: #ffffff;
              font-size: 12px;
              font-weight: 600;
              text-decoration: none;
              padding: 9px 12px;
              border-radius: 9px;
            "
          ><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-6-5.686-6-10a6 6 0 0 1 12 0c0 4.314-6 10-6 10z"/><circle cx="12" cy="11" r="2"/></svg>Get directions</a>
        </div>
      `, { closeButton: false, maxWidth: 280 });

      markersRef.current.push(marker);
    });
  }, [activeFilter]);

  const FilterButton = ({ type, showAll = false }: { type?: string; showAll?: boolean }) => {
    const isActive = showAll ? activeFilter === null : activeFilter === type;
    const config = type ? typeConfig[type] : null;

    return (
      <button
        onClick={() => setActiveFilter(showAll ? null : type!)}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200 ${
          isActive
            ? "text-white border-transparent shadow-sm"
            : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-foreground/30"
        }`}
        style={isActive ? { backgroundColor: config?.color || "hsl(var(--primary))" } : {}}
      >
        {showAll ? (
          <MapPin className="w-3.5 h-3.5" />
        ) : (
          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: config?.color }} />
        )}
        {showAll ? "All places" : config?.label}
      </button>
    );
  };

  const shown = activeFilter ? locations.filter(l => l.type === activeFilter).length : locations.length;

  return (
    <section className="py-14 sm:py-28 px-6 sm:px-10 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">04</span>On the map
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Explore the city
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-xs sm:text-right leading-relaxed">
            {locations.length} hand-picked spots — ASBL homes, tech parks, heritage, food & green spaces.
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal delay={100} className="flex flex-wrap gap-2 mb-5">
          <FilterButton showAll />
          {Object.keys(typeConfig).map(type => (
            <FilterButton key={type} type={type} />
          ))}
        </Reveal>

        {/* Map */}
        <Reveal delay={180} y={36}>
        <div className="relative rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-medium)] [isolation:isolate]">
          <div ref={mapContainerRef} className="h-[460px] sm:h-[560px] w-full" />
          <div className="absolute top-4 left-4 z-[1000] px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-border text-xs font-medium shadow-sm pointer-events-none">
            Showing {shown} {shown === 1 ? "place" : "places"}
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-3">Tap any marker for details and directions.</p>
        </Reveal>
      </div>
    </section>
  );
};

export default HyderabadMap;
