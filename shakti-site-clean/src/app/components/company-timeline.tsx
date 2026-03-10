import { useState } from "react";
import { Flag, Award, TrendingUp, Globe, Cpu, Star } from "lucide-react";

const milestones = [
  {
    year: "2006",
    icon: Flag,
    title: "The Foundation",
    description: "Shakti Alloys Private Limited established in New Delhi with a vision to revolutionize India's non-ferrous recycling sector. Initial 2,000 MT capacity with 2 rotary furnaces.",
    metrics: ["₹5 Cr initial investment", "12 founding employees", "2,000 MT/year capacity"],
    color: "amber",
  },
  {
    year: "2009",
    icon: Award,
    title: "ISO Certification & Quality Milestone",
    description: "Achieved ISO 9001:2015 certification — a landmark validation of our quality management systems. First exports to UAE and Qatar marking our international debut.",
    metrics: ["ISO 9001:2015 certified", "First Middle East exports", "5,000 MT achieved"],
    color: "blue",
  },
  {
    year: "2010",
    icon: TrendingUp,
    title: "Scale-Up & Market Leadership",
    description: "Tripled capacity to 8,000 MT with new automated casting lines. Entered Southeast Asian markets with long-term supply agreements with Thai die casters.",
    metrics: ["8,000 MT capacity", "15+ export countries", "₹100 Cr revenue milestone"],
    color: "green",
  },
  {
    year: "2015",
    icon: Cpu,
    title: "Technology Modernization",
    description: "Complete plant modernization with OES spectroscopic lab, automated casting controls, and ERP deployment. Production efficiency improved by 40% in 24 months.",
    metrics: ["OES lab installed", "40% efficiency gain", "300+ clients"],
    color: "purple",
  },
  {
    year: "2020",
    icon: Globe,
    title: "Global Dominance",
    description: "Despite global headwinds, expanded to 40+ export countries. Launched AI-assisted quality inspection. Recognized by EEPC India as a Star Export House.",
    metrics: ["40+ countries", "EEPC Star Export House", "600+ clients worldwide"],
    color: "cyan",
  },
  {
    year: "2024",
    icon: Star,
    title: "Industry Leadership",
    description: "Reached 15,000 MT annual capacity. Full AI-driven manufacturing deployment. 52 export destinations. Positioned as India's #1 ADC12 alloy exporter.",
    metrics: ["15,000 MT/year", "52 export nations", "850+ global clients"],
    color: "amber",
  },
];

const colorMap: Record<string, { dot: string; border: string; text: string; bg: string; lightBg: string; chip: string }> = {
  amber:  { dot: "bg-[#5a6a85]",  border: "border-[#5a6a85]",  text: "text-amber-600",   bg: "bg-[#5a6a85]",  lightBg: "bg-amber-50",  chip: "bg-amber-100 text-amber-700 border-amber-200" },
  blue:   { dot: "bg-[#2a4a7f]",   border: "border-[#1e3560]",   text: "text-blue-600",    bg: "bg-[#2a4a7f]",   lightBg: "bg-blue-50",   chip: "bg-blue-100 text-blue-700 border-blue-200" },
  green:  { dot: "bg-green-500",  border: "border-green-500",  text: "text-green-600",   bg: "bg-green-500",  lightBg: "bg-green-50",  chip: "bg-green-100 text-green-700 border-green-200" },
  purple: { dot: "bg-purple-500", border: "border-purple-500", text: "text-purple-600",  bg: "bg-purple-500", lightBg: "bg-purple-50", chip: "bg-purple-100 text-purple-700 border-purple-200" },
  cyan:   { dot: "bg-cyan-500",   border: "border-cyan-500",   text: "text-cyan-600",    bg: "bg-cyan-500",   lightBg: "bg-cyan-50",   chip: "bg-cyan-100 text-cyan-700 border-cyan-200" },
};

const kpis = [
  { label: "Capacity Growth", value: "7.5×", sub: "2006 → 2024" },
  { label: "Revenue CAGR", value: "18%", sub: "23-Year Track" },
  { label: "Export Nations", value: "52", sub: "6 Continents" },
  { label: "Client Retention", value: "94%", sub: "Annual Average" },
];

export function CompanyTimeline() {
  const [activeYear, setActiveYear] = useState<string | null>(null);

  return (
    <section id="timeline" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs uppercase tracking-widest px-4 py-2 mb-4 rounded-sm">
            23 Years of Legacy
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a1628] mb-4">
            Growth That Speaks <span className="text-[#7c90aa]">For Itself</span>
          </h2>
          <p className="text-[#5a6a85] max-w-xl mx-auto">
            From a 2,000 MT startup to India's premier aluminum alloy exporter — every year a new chapter of discipline, ambition, and excellence.
          </p>
        </div>

        {/* KPI Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {kpis.map((kpi, i) => (
            <div key={i} className="bg-[#0a1628] text-white p-6 text-center rounded-sm">
              <div className="text-3xl font-black text-[#a8bdd4] mb-1">{kpi.value}</div>
              <div className="font-semibold text-sm mb-1">{kpi.label}</div>
              <div className="text-[#5a6a85] text-xs">{kpi.sub}</div>
            </div>
          ))}
        </div>

        {/* Timeline - vertical on all screens */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

          <div className="space-y-6">
            {milestones.map((m, i) => {
              const c = colorMap[m.color];
              const isActive = activeYear === m.year;
              const isRight = i % 2 !== 0;

              return (
                <div key={m.year} className="relative flex items-start gap-6 md:gap-0">
                  {/* Dot - mobile */}
                  <div className={`md:hidden w-5 h-5 rounded-full ${c.dot} border-4 border-white shadow-lg flex-shrink-0 mt-5 z-10`} />

                  {/* Desktop: alternating layout */}
                  <div className={`flex-1 md:flex md:items-start md:gap-8 ${isRight ? "md:flex-row-reverse" : ""}`}>
                    {/* Card */}
                    <div className="flex-1">
                      <div
                        className={`border rounded-sm p-6 cursor-pointer transition-all hover:shadow-lg ${
                          isActive ? `${c.lightBg} ${c.border}` : "bg-white border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setActiveYear(isActive ? null : m.year)}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-sm flex items-center justify-center ${c.bg} flex-shrink-0`}>
                            <m.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className={`text-2xl font-black ${c.text}`}>{m.year}</div>
                        </div>
                        <h3 className="font-black text-[#0a1628] text-lg mb-2">{m.title}</h3>
                        <p className="text-[#3a4a60] text-sm leading-relaxed mb-4">{m.description}</p>
                        {isActive && (
                          <div className="flex flex-wrap gap-2">
                            {m.metrics.map((metric, mi) => (
                              <span key={mi} className={`text-xs px-3 py-1 rounded-sm font-medium border ${c.chip}`}>
                                {metric}
                              </span>
                            ))}
                          </div>
                        )}
                        {!isActive && (
                          <p className="text-xs text-[#8a99b3] mt-2">Click to see key metrics →</p>
                        )}
                      </div>
                    </div>

                    {/* Center dot - desktop */}
                    <div className="hidden md:flex flex-col items-center flex-shrink-0 w-10">
                      <div className={`w-5 h-5 rounded-full ${c.dot} border-4 border-white shadow-lg z-10`} />
                    </div>

                    {/* Spacer for alternating */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
