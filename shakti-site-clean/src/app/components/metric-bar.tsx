import { Award, CheckCircle2, Globe, TrendingUp } from "lucide-react";

export function MetricBar() {
  const metrics = [
    {
      icon: CheckCircle2,
      value: "500+",
      label: "Successful Projects",
      color: "bg-blue-100 text-[#0066CC]",
    },
    {
      icon: Award,
      value: "ISO 9001:2015",
      label: "Quality Certified",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Globe2,
      value: "6 Continents",
      label: "Global Network",
      color: "bg-orange-100 text-[#FF6B35]",
    },
    {
      icon: TrendingUp,
      value: "25+ Years",
      label: "Industry Leadership",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <section className="relative bg-[#f8f9fa] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${metric.color} mb-4`}>
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </div>
                <div className="text-[#3a4a60] font-medium">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
