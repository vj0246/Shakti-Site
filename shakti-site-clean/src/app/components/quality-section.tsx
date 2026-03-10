import { Award, Shield, Target, Zap } from "lucide-react";

export function QualitySection() {
  return (
    <section id="quality" className="py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quality You Can Trust
            </h2>
            <p className="text-lg text-[#3a4a60] mb-8 leading-relaxed">
              We're ISO 9001:2015 certified because quality isn't just a goal — it's our promise. 
              Every product undergoes rigorous testing to ensure it meets the highest standards.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">ISO 9001:2015 Certified</h4>
                  <p className="text-sm text-[#3a4a60]">International quality management standards</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">100% Quality Tested</h4>
                  <p className="text-sm text-[#3a4a60]">Every batch tested in our advanced lab</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Fast Turnaround</h4>
                  <p className="text-sm text-[#3a4a60]">Quick processing without compromising quality</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Industry Recognition</h4>
                  <p className="text-sm text-[#3a4a60]">Trusted by leading companies worldwide</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-600 mb-1">99.9%</div>
                <div className="text-xs text-[#3a4a60]">Purity Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">24/7</div>
                <div className="text-xs text-[#3a4a60]">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">Zero</div>
                <div className="text-xs text-[#3a4a60]">Compromises</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1565031491910-e57fac031c41?w=1600&q=85"
                alt="Quality Testing"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Badge */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-cyan-600 to-blue-700 text-white p-6 rounded-xl shadow-2xl">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8" />
                <div>
                  <div className="font-bold text-lg">ISO Certified</div>
                  <div className="text-sm opacity-90">Since 2005</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
