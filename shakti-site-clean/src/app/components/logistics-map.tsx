import { Globe, MapPin, Package, ArrowRight } from "lucide-react";

export function LogisticsMap() {
  const importRegions = [
    { name: "North America", volume: 15, flag: "🇺🇸" },
    { name: "Europe", volume: 25, flag: "🇪🇺" },
    { name: "Middle East", volume: 20, flag: "🇦🇪" },
    { name: "Southeast Asia", volume: 30, flag: "🇸🇬" },
    { name: "Australia", volume: 10, flag: "🇦🇺" },
  ];

  const exportMarkets = [
    { name: "China", product: "ADC12 Aluminum Ingots", volume: "Primary Market", flag: "🇨🇳", percentage: 60 },
    { name: "India", product: "Aluminum Alloys", volume: "Secondary Market", flag: "🇮🇳", percentage: 25 },
    { name: "UAE", product: "Specialty Alloys", volume: "Growing Market", flag: "🇦🇪", percentage: 15 },
  ];

  return (
    <section id="logistics" className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-[#FF6B35] rounded-full mb-4">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase tracking-wide">Global Operations</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            International Logistics Network
          </h2>
          <p className="text-xl text-[#3a4a60] leading-relaxed">
            Strategic import-export infrastructure spanning six continents, optimized for 
            efficiency, compliance, and reliability.
          </p>
        </div>

        {/* Map Visualization */}
        <div className="mb-16 bg-white rounded-3xl shadow-xl p-12 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#2a4a7f] rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500 rounded-full blur-3xl" />
          </div>

          <div className="relative min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="relative inline-block mb-8">
                <Globe className="w-48 h-48 text-[#0066CC] opacity-20" strokeWidth={0.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gradient-to-br from-[#0066CC] to-[#0052A3] text-white rounded-2xl p-8 shadow-xl">
                    <Package className="w-12 h-12 mx-auto mb-3" />
                    <div className="text-3xl font-bold mb-1">6</div>
                    <div className="text-sm opacity-90">Continents</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-[#0066CC] rounded-full">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-semibold">Import from 5 Continents</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#8a99b3]" />
                  <div className="flex items-center gap-2 px-4 py-2 bg-orange-100 text-[#FF6B35] rounded-full">
                    <Package className="w-4 h-4" />
                    <span className="text-sm font-semibold">Export to Asia & Beyond</span>
                  </div>
                </div>
                <p className="text-[#3a4a60]">
                  Comprehensive logistics network ensuring timely delivery and quality assurance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Import/Export Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Import Sources */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#0066CC]" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Scrap Import Sources
              </h3>
            </div>
            <div className="space-y-4">
              {importRegions.map((region, index) => (
                <div key={index} className="group hover:bg-blue-50 rounded-xl p-4 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{region.flag}</span>
                      <span className="font-semibold text-gray-900">{region.name}</span>
                    </div>
                    <span className="text-[#0066CC] font-bold">{region.volume}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-full transition-all duration-500"
                      style={{ width: `${region.volume}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Export Markets */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-[#FF6B35]" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Export Markets
              </h3>
            </div>
            <div className="space-y-6">
              {exportMarkets.map((market, index) => (
                <div key={index} className="group hover:bg-orange-50 rounded-xl p-4 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{market.flag}</span>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">{market.name}</div>
                        <div className="text-sm text-[#3a4a60]">{market.product}</div>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-orange-100 text-[#FF6B35] rounded-full text-xs font-bold">
                      {market.percentage}%
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FF8555] rounded-full"
                        style={{ width: `${market.percentage}%` }}
                      />
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-[#5a6a85] font-medium">
                    {market.volume}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-[#0066CC] mb-2">50+</div>
            <div className="text-[#3a4a60] font-medium">Countries Served</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-[#28a745] mb-2">99.8%</div>
            <div className="text-[#3a4a60] font-medium">On-Time Delivery</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-[#FF6B35] mb-2">24/7</div>
            <div className="text-[#3a4a60] font-medium">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
