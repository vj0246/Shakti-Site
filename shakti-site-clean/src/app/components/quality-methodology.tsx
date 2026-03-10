import { Layers, Cpu, BarChart2, Shield, Eye, Database, ArrowRight } from "lucide-react";

const aiFeatures = [
  {
    icon: Eye,
    title: "AI Visual Inspection",
    desc: "Computer vision cameras with 4K resolution detect surface defects, cracks, and dimensional deviations at 30 ingots/minute — 300x faster than manual inspection.",
    metric: "30 ingots/min",
    color: "text-[#7c90aa]",
    bg: "bg-blue-400/10 border-[#5a6a85]/20",
  },
  {
    icon: Brain,
    title: "Predictive Quality Engine",
    desc: "Machine learning models trained on 2M+ data points predict alloy chemistry deviations before they occur, enabling proactive furnace adjustments.",
    metric: "99.8% accuracy",
    color: "text-purple-400",
    bg: "bg-purple-400/10 border-purple-400/20",
  },
  {
    icon: Activity,
    title: "Real-Time Process Control",
    desc: "IoT sensors across 150+ critical process points feed live data into our central control system, enabling automated adjustments without human intervention.",
    metric: "150+ sensors",
    color: "text-[#a8bdd4]",
    bg: "bg-[#7c90aa]/10 border-[#7c90aa]/20",
  },
  {
    icon: Database,
    title: "Digital Batch Passport",
    desc: "Every ingot lot receives a blockchain-anchored digital passport with full traceability — from scrap source to final chemical test report and delivery confirmation.",
    metric: "100% traceability",
    color: "text-green-400",
    bg: "bg-green-400/10 border-green-400/20",
  },
  {
    icon: Cpu,
    title: "Smart Furnace Optimization",
    desc: "AI algorithms optimize furnace temperature profiles, charge mix ratios, and fluxing additions in real time — reducing energy consumption by 18% since implementation.",
    metric: "18% energy savings",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10 border-cyan-400/20",
  },
  {
    icon: Shield,
    title: "Automated Compliance",
    desc: "Automated generation of Certificate of Analysis, test reports, and compliance documentation aligned to ASTM, IS, JIS, and customer-specific standards.",
    metric: "Zero manual errors",
    color: "text-rose-400",
    bg: "bg-rose-400/10 border-rose-400/20",
  },
];

const milestoneAI = [
  { year: "2019", event: "OES Spectrometer integration" },
  { year: "2020", event: "IoT sensor deployment across plant" },
  { year: "2021", event: "First ML model for quality prediction" },
  { year: "2022", event: "AI visual inspection cameras live" },
  { year: "2023", event: "Digital Batch Passport launch" },
  { year: "2024", event: "Full AI-driven process control" },
];

export function QualityMethodology() {
  return (
    <section id="technology" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs uppercase tracking-widest px-4 py-2 mb-6 rounded-sm">
            <Layers className="w-4 h-4" />
            AI-Powered Manufacturing
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a1628] mb-4">
            Future-Ready. <span className="text-blue-600">Intelligence-Driven.</span>
          </h2>
          <p className="text-[#5a6a85] max-w-2xl mx-auto leading-relaxed">
            Shakti Alloys is not just a metal company — it's a data-driven manufacturing platform. 
            Our AI-augmented quality system ensures every ingot meets spec, every time.
          </p>
        </div>

        {/* AI feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {aiFeatures.map((feature, i) => (
            <div
              key={i}
              className={`border ${feature.bg} p-6 rounded-sm hover:shadow-lg hover:-translate-y-1 transition-all group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-sm flex items-center justify-center ${feature.bg} border`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <span className={`text-xs font-bold ${feature.color} bg-black/5 px-2 py-1 rounded-sm`}>
                  {feature.metric}
                </span>
              </div>
              <h3 className="font-bold text-[#0a1628] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#3a4a60] leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* AI Journey Timeline */}
        <div className="bg-[#0a1628] rounded-sm p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
            <div>
              <h3 className="text-2xl font-black text-white mb-2">
                Our Technology <span className="text-[#a8bdd4]">Journey</span>
              </h3>
              <p className="text-[#8a99b3] text-sm">From traditional to AI-augmented — 5 years of digital transformation</p>
            </div>
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#5a6a85] text-[#0a1628] font-bold text-sm rounded-sm hover:bg-[#7c90aa] transition-colors whitespace-nowrap"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 right-0 top-5 h-0.5 bg-white/10 hidden md:block" />
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              {milestoneAI.map((m, i) => (
                <div key={i} className="relative text-center">
                  <div className="w-10 h-10 rounded-full bg-[#5a6a85] text-[#0a1628] flex items-center justify-center font-black text-xs mx-auto mb-3 relative z-10">
                    {m.year.slice(2)}
                  </div>
                  <div className="text-[#a8bdd4] font-bold text-sm mb-1">{m.year}</div>
                  <div className="text-[#8a99b3] text-xs leading-relaxed">{m.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
