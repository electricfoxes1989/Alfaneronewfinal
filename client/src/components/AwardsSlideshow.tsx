/**
 * Awards Slideshow Component
 * Infinite scrolling awards carousel with hover pause
 */

import { useEffect, useState } from "react";

interface Award {
  year: string;
  name: string;
  org: string;
  desc: string;
  icon: React.ReactNode;
}

const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none stroke-1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const MedalIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none stroke-1">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none stroke-1">
    <path d="M6 9H4.5a2.5 2.5 0 010-5C7 4 7 7 7 7"></path>
    <path d="M18 9h1.5a2.5 2.5 0 000-5C17 4 17 7 17 7"></path>
    <path d="M4 22h16"></path>
    <path d="M10 22V2h4v20"></path>
  </svg>
);

const RibbonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none stroke-1">
    <path d="M12 15a7 7 0 100-14 7 7 0 000 14z"></path>
    <path d="M9.75 12L12 14.25 14.25 9.75"></path>
    <path d="M12 15v6"></path>
    <path d="M8 21h8"></path>
  </svg>
);

const ArchitectureIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none stroke-1">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
);

const WrenchIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none stroke-1">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const awards: Award[] = [
  {
    year: "2008",
    name: "Best Motor Yacht Over 45 Metres",
    org: "ISS Design & Leadership Awards",
    desc: "Recognised for exceptional design innovation and engineering achievement among the world's largest motor yachts.",
    icon: <StarIcon />,
  },
  {
    year: "2008",
    name: "Motor Yacht of the Year",
    org: "ShowBoats International",
    desc: "The industry's most coveted prize, recognising the single most outstanding motor yacht delivered that year worldwide.",
    icon: <MedalIcon />,
  },
  {
    year: "2008",
    name: "Best Interior Design",
    org: "World Superyacht Awards",
    desc: "Alberto Pinto's fusion of Pop Art and Art Deco was recognised as the finest yacht interior of the year.",
    icon: <TrophyIcon />,
  },
  {
    year: "2008",
    name: "Best Exterior Styling",
    org: "World Superyacht Awards",
    desc: "Nuvolari Lenard's dramatic black hull and low-stern profile redefined what a superyacht could look like.",
    icon: <RibbonIcon />,
  },
  {
    year: "2008",
    name: "Best Naval Architecture",
    org: "International Yacht & Aviation Awards",
    desc: "Oceanco's naval architecture praised for the innovative pool-to-helipad transformation and structural engineering.",
    icon: <ArchitectureIcon />,
  },
  {
    year: "2024",
    name: "Comprehensive Refit Complete",
    org: "Systems, Interiors & Mechanical",
    desc: "A full mechanical and cosmetic refit in 2024 brought every system to current standards while preserving the original design vision.",
    icon: <WrenchIcon />,
  },
];

// Duplicate awards for seamless infinite scroll
const duplicatedAwards = [...awards, ...awards];

export default function AwardsSlideshow() {
  const [visible, setVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative w-full py-24 md:py-32 bg-black text-white overflow-hidden">
      {/* Subtle gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 50%, rgba(196,30,42,0.03), transparent),
            radial-gradient(ellipse 60% 60% at 80% 40%, rgba(196,30,42,0.02), transparent)
          `
        }}
      />

      {/* Corner marks */}
      <div className="hidden md:block absolute top-7 left-7 w-10 h-10 border-t border-l border-red-600/20" />
      <div className="hidden md:block absolute top-7 right-7 w-10 h-10 border-t border-r border-red-600/20" />
      <div className="hidden md:block absolute bottom-7 left-7 w-10 h-10 border-b border-l border-red-600/20" />
      <div className="hidden md:block absolute bottom-7 right-7 w-10 h-10 border-b border-r border-red-600/20" />

      {/* Header */}
      <div className={`text-center px-5 mb-12 relative z-10 ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <p className="text-[0.6rem] font-medium tracking-[0.45em] uppercase text-red-600 mb-4">
          Recognition & Legacy
        </p>
        <h2 className="font-cantata font-light text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight" style={{color: '#ffffff'}}>
          Every Major Award <em className="italic text-red-600">in a Single Year</em>
        </h2>
        <p className="font-light text-sm text-white/50 mt-4 max-w-xl mx-auto leading-relaxed">
          ALFA NERO swept the industry's most prestigious prizes in 2008, establishing herself as one of the most celebrated superyachts ever built.
        </p>
      </div>

      {/* Awards Track */}
      <div 
        className="relative z-10 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="flex gap-6 px-4"
          style={{
            width: 'max-content',
            animation: `scrollTrack 45s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
          {duplicatedAwards.map((award, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-[340px] bg-[rgba(17,17,17,0.85)] border border-white/5 p-7 md:p-9 relative overflow-hidden backdrop-blur-xl transition-all duration-400 hover:border-red-600/35 hover:-translate-y-1 hover:shadow-2xl group"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              
              <div className="font-cantata font-light text-5xl text-red-600/15 leading-none mb-4" style={{color: '#ffffff'}}>
                {award.year}
              </div>
              <div className="w-8 h-8 mb-4 text-red-600">
                {award.icon}
              </div>
              <div className="font-cantata font-normal text-xl leading-tight mb-2 text-white">
                {award.name}
              </div>
              <div className="text-[0.65rem] tracking-[0.25em] uppercase text-red-600 mb-3">
                {award.org}
              </div>
              <div className="font-light text-xs leading-relaxed text-white/50">
                {award.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className={`flex justify-center gap-8 md:gap-16 mt-12 relative z-10 flex-wrap ${visible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
        <div className="text-center">
          <div className="font-cantata font-light text-3xl text-red-600 leading-none" style={{color: '#ffffff'}}>6+</div>
          <div className="text-[0.58rem] tracking-[0.3em] uppercase text-white/35 mt-1">Major Awards</div>
        </div>
        <div className="text-center">
          <div className="font-cantata font-light text-3xl text-red-600 leading-none">2008</div>
          <div className="text-[0.58rem] tracking-[0.3em] uppercase text-white/35 mt-1">Clean Sweep</div>
        </div>
        <div className="text-center">
          <div className="font-cantata font-light text-3xl text-red-600 leading-none">17+</div>
          <div className="text-[0.58rem] tracking-[0.3em] uppercase text-white/35 mt-1">Years of Legacy</div>
        </div>
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes scrollTrack {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s ease forwards;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
