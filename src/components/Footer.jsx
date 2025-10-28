export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo and DMCA */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-3">
              <svg viewBox="0 0 100 100" className="w-12 h-12">
                <path
                  d="M50 10 L90 90 L10 90 Z"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="6"
                />
                <path
                  d="M50 30 L70 70 L30 70 Z"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="6"
                />
              </svg>
            </div>
            <div className="text-xl font-semibold text-blue-500">
              Blue Prism Automotive
            </div>
            <div className="bg-white px-3 py-2 rounded">
              <div className="text-black font-bold text-xs">PROTECTED BY</div>
              <div className="text-black font-bold text-2xl">DMCA</div>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <a href="#shop-parts" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Shop Parts
                </a>
              </li>
              <li>
                <a href="#used-engines" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Used Engines
                </a>
              </li>
              <li>
                <a href="#used-transmission" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Used Transmission
                </a>
              </li>
              <li>
                <a href="#oem-body-parts" className="text-gray-400 hover:text-blue-400 transition-colors">
                  OEM Body Parts
                </a>
              </li>
              <li>
                <a href="#accessories" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* The Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">The Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about-us" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#warranty-policy" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Warranty Policy
                </a>
              </li>
              <li>
                <a href="#privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#return-policy" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#premium-club" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Premium Club
                </a>
              </li>
              <li>
                <a href="#texas" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Texas
                </a>
              </li>
              <li>
                <a href="#florida" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Florida
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@blueprismautomotive.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  support@blueprismautomotive.com
                </a>
              </li>
              <li className="text-gray-400 pt-2">
                3419 Westminster Ave. Ste 1037
              </li>
              <li className="text-gray-400">
                Dallas, TX 75205
              </li>
              <li className="pt-2">
                <a href="tel:+14304134976" className="text-gray-400 hover:text-blue-400 transition-colors underline">
                  Tel : (430) 413-4976
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#instagram" className="text-gray-400 hover:text-blue-400 transition-colors underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#linkedin" className="text-gray-400 hover:text-blue-400 transition-colors underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#twitter" className="text-gray-400 hover:text-blue-400 transition-colors underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#facebook" className="text-gray-400 hover:text-blue-400 transition-colors underline">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h3 className="text-center text-lg font-semibold mb-6">Payment Methods</h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {/* Mastercard */}
            <div className="bg-white rounded px-4 py-2 h-12 flex items-center justify-center min-w-[60px]">
              <span className="text-red-600 font-bold text-2xl">●●</span>
            </div>
            
            {/* PayPal */}
            <div className="bg-blue-600 rounded px-4 py-2 h-12 flex items-center justify-center min-w-[60px]">
              <span className="text-white font-bold">PayPal</span>
            </div>
            
            {/* Clover */}
            <div className="bg-white rounded px-4 py-2 h-12 flex items-center justify-center min-w-[60px]">
              <span className="text-green-600 font-bold">clover</span>
            </div>
            
            {/* American Express */}
            <div className="bg-blue-500 rounded px-4 py-2 h-12 flex items-center justify-center min-w-[60px]">
              <span className="text-white font-bold text-xs">AMERICAN<br/>EXPRESS</span>
            </div>
            
            {/* Zelle */}
            <div className="bg-purple-600 rounded px-4 py-2 h-12 flex items-center justify-center min-w-[60px]">
              <span className="text-white font-bold">zelle</span>
            </div>
            
            {/* Visa */}
            <div className="bg-white rounded px-4 py-2 h-12 flex items-center justify-center min-w-[60px]">
              <span className="text-blue-900 font-bold text-xl">VISA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}