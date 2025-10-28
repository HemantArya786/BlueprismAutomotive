import { DollarSign, Award, Recycle } from 'lucide-react';

export default function OneStopShop() {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Side - Main Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight">
              The One-Stop Shop<br />
              for Automotive<br />
              Enthusiasts
            </h1>

            <div className="space-y-6 text-base sm:text-lg">
              <p className="leading-relaxed">
                Welcome to Blue Prism Automotive!
              </p>

              <p className="leading-relaxed">
                We take great gratification in providing the best choices in used Auto parts and truck parts in our inventory and are sincere about our strong commitment to quality and customer satisfaction.
              </p>

              <p className="leading-relaxed">
                Call us today! and we will get your order out to you with our fast and reliable shipping. We offer a standard warranty on all our parts.
              </p>

              <p className="leading-relaxed">
                Our vision is to be your "One-Stop Shop" Used Auto parts store.
              </p>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
              Learn more
            </button>
          </div>

          {/* Right Side - Why Choose Us Cards */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-light mb-8">Why Choose Us?</h2>
            
            <div className="space-y-0 border border-gray-700">
              
              {/* Card 1 - Affordable */}
              <div className="flex items-start gap-4 p-6 border-b border-gray-700">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <DollarSign className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm sm:text-base leading-relaxed">
                    Buying new auto parts for your vehicle, regardless of the make and model, can be expensive. Buying used auto parts for your vehicle is affordable and comes with replacement and warranty options.
                  </p>
                </div>
              </div>

              {/* Card 2 - Rare Collection */}
              <div className="flex items-start gap-4 p-6 border-b border-gray-700">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xs font-bold leading-tight">RARE</div>
                        <div className="text-xs font-bold leading-tight">COLLECTION</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm sm:text-base leading-relaxed">
                    Old classic rare cars may consist of parts that are no longer made. Your only choice is to have a part custom-made or find used. In case you find it difficult to find used/rare auto parts, Blue Prism Automotive is the best option for you to find the used car and truck parts
                  </p>
                </div>
              </div>

              {/* Card 3 - Environmental */}
              <div className="flex items-start gap-4 p-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Recycle className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm sm:text-base leading-relaxed">
                    The auto recycling business prevents a mass abundance of toxic car fluids from seeping into soil and groundwater.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}