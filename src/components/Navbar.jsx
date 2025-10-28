import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'Used Engines', 'Locations', 'Shop Parts', 'Blog'];

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <svg viewBox="0 0 100 100" className="w-full h-full">
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
            <div className="text-2xl sm:text-3xl font-bold tracking-wide text-blue-500">
              BLUE PRISM AUTOMOTIVE
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white hover:text-blue-400 transition-colors duration-200 text-lg"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block px-3 py-3 text-white hover:bg-gray-800 hover:text-blue-400 transition-colors duration-200 rounded-md text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}