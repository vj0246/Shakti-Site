import { Truck, Settings, Star, Building2 } from "lucide-react";

export function ProcessGrid() {
  const steps = [
    {
      icon: Truck,
      title: "Collection",
      description: "We source quality aluminum scrap from trusted suppliers worldwide",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Settings,
      title: "Processing",
      description: "Advanced machinery transforms raw materials into refined metal",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Sparkles,
      title: "Quality Check",
      description: "Rigorous testing ensures every batch meets our high standards",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Precision casting creates premium ADC12 aluminum ingots",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Simple Process
          </h2>
          <p className="text-lg text-[#3a4a60] leading-relaxed">
            From scrap to premium ingots — a streamlined journey powered by technology and expertise.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center group">
                  {/* Icon */}
                  <div className="relative inline-block mb-4">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#0b1120] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-[#3a4a60] leading-relaxed">{step.description}</p>
                </div>

                {/* Connector line (except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent" />
                )}
              </div>
            );
          })}
        </div>

        {/* Process Image */}
        <div className="mt-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=800&q=85"
              alt="Modern Facility"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a]/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 max-w-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-2">State-of-the-Art Facilities</h4>
                <p className="text-sm text-[#3a4a60]">
                  Our modern manufacturing plant is equipped with the latest technology to ensure 
                  efficiency, quality, and environmental responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
