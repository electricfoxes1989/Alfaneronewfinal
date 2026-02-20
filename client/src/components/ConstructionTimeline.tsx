/**
 * Construction Timeline Component
 * A visual timeline infographic showing ALFA NERO's construction and launch milestones
 */

import { useEffect, useState, useRef } from "react";

interface TimelineEvent {
  year: string;
  month?: string;
  title: string;
  description: string;
  highlight?: boolean;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2002",
    title: "Oceanco Acquisition",
    description: "Theodore Angelopoulos acquires Oceanco, steering the Dutch yard toward 80m+ custom builds.",
  },
  {
    year: "2004",
    month: "Q1",
    title: "Project Y702 Begins",
    description: "Construction commences at Oceanco's Alblasserdam facility. Steel hull fabrication starts.",
    highlight: true,
  },
  {
    year: "2004",
    month: "Q3",
    title: "Design Finalisation",
    description: "Nuvolari Lenard completes exterior design. Alberto Pinto begins interior specifications.",
  },
  {
    year: "2005",
    month: "Q2",
    title: "Hull Completion",
    description: "Steel hull and aluminium superstructure joined. Complex stern section takes shape.",
  },
  {
    year: "2006",
    month: "Q1",
    title: "Systems Integration",
    description: "Twin MTU engines installed. Hydraulic pool floor system engineering begins.",
  },
  {
    year: "2006",
    month: "Q4",
    title: "Interior Fit-Out",
    description: "Alberto Pinto's pop art-inspired interiors installed. Custom furnishings arrive from Paris.",
  },
  {
    year: "2007",
    month: "Feb",
    title: "Sea Trials",
    description: "North Sea trials confirm 17.5 knot top speed. Stability and seakeeping exceed expectations.",
    highlight: true,
  },
  {
    year: "2007",
    month: "Apr",
    title: "Delivery",
    description: "ALFA NERO delivered to owner. 82 metres of innovation ready for her maiden voyage.",
    highlight: true,
  },
  {
    year: "2007",
    month: "Sep",
    title: "Monaco Debut",
    description: "Public premiere at Monaco Yacht Show. Industry response is immediate and overwhelming.",
    highlight: true,
  },
  {
    year: "2008",
    title: "Award Sweep",
    description: "Wins World Superyacht Award, ShowBoats Design Award, and five other major honours.",
    highlight: true,
  },
];

export default function ConstructionTimeline() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleItems((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const items = timelineRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-16 md:py-24 bg-neutral-950" ref={timelineRef}>
      <div className="container max-w-5xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[0.6rem] font-medium tracking-[0.45em] uppercase text-red-600 mb-4">
            From Blueprint to Icon
          </p>
          <h2 
            className="font-cantata font-light text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-white"
          >
            Construction Timeline
          </h2>
          <p className="font-light text-sm text-white/50 mt-4 max-w-xl mx-auto leading-relaxed">
            Six years from acquisition to award sweep
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-600/50 via-white/20 to-red-600/50 transform md:-translate-x-px" />

          {/* Timeline Events */}
          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                data-index={index}
                className={`relative flex items-start md:items-center transition-all duration-700 ${
                  visibleItems.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Desktop: Alternating layout */}
                <div className={`hidden md:flex w-full items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <div className={`inline-block ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                      <div className="flex items-center gap-2 mb-2 justify-end">
                        {index % 2 !== 0 && event.month && (
                          <span className="text-xs text-white/40 font-light">{event.month}</span>
                        )}
                        <span className={`text-sm font-medium tracking-wider ${event.highlight ? "text-red-500" : "text-white/60"}`}>
                          {event.year}
                        </span>
                        {index % 2 === 0 && event.month && (
                          <span className="text-xs text-white/40 font-light">{event.month}</span>
                        )}
                      </div>
                      <h3 className={`font-cantata text-lg md:text-xl mb-2 ${event.highlight ? "text-white" : "text-white/80"}`}>
                        {event.title}
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed max-w-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      event.highlight 
                        ? "bg-red-600 border-red-600 shadow-lg shadow-red-600/50" 
                        : "bg-neutral-900 border-white/30"
                    }`} />
                  </div>

                  {/* Spacer */}
                  <div className="w-[calc(50%-2rem)]" />
                </div>

                {/* Mobile: Left-aligned layout */}
                <div className="md:hidden flex items-start w-full pl-12">
                  {/* Dot */}
                  <div className="absolute left-4 z-10 flex items-center justify-center -translate-x-1/2">
                    <div className={`w-3 h-3 rounded-full border-2 ${
                      event.highlight 
                        ? "bg-red-600 border-red-600 shadow-lg shadow-red-600/50" 
                        : "bg-neutral-900 border-white/30"
                    }`} />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-medium tracking-wider ${event.highlight ? "text-red-500" : "text-white/60"}`}>
                        {event.year}
                      </span>
                      {event.month && (
                        <span className="text-xs text-white/40 font-light">{event.month}</span>
                      )}
                    </div>
                    <h3 className={`font-cantata text-base mb-1 ${event.highlight ? "text-white" : "text-white/80"}`}>
                      {event.title}
                    </h3>
                    <p className="text-xs text-white/50 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="flex justify-center gap-8 md:gap-16 mt-16 flex-wrap">
          <div className="text-center">
            <div className="font-cantata font-light text-2xl md:text-3xl text-white leading-none">3</div>
            <div className="text-[0.58rem] tracking-[0.3em] uppercase text-white/35 mt-1">Years Build</div>
          </div>
          <div className="text-center">
            <div className="font-cantata font-light text-2xl md:text-3xl text-white leading-none">81m</div>
            <div className="text-[0.58rem] tracking-[0.3em] uppercase text-white/35 mt-1">Length</div>
          </div>
          <div className="text-center">
            <div className="font-cantata font-light text-2xl md:text-3xl text-white leading-none">17.5</div>
            <div className="text-[0.58rem] tracking-[0.3em] uppercase text-white/35 mt-1">Knots Max</div>
          </div>
          <div className="text-center">
            <div className="font-cantata font-light text-2xl md:text-3xl text-red-500 leading-none">7</div>
            <div className="text-[0.58rem] tracking-[0.3em] uppercase text-white/35 mt-1">Awards 2008</div>
          </div>
        </div>
      </div>
    </div>
  );
}
