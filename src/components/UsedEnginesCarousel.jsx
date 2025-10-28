import { useState } from "react";
import Slider from "react-slick";
import { X, Plus, Minus } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import herosection from "../../public/Image/herosection.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample products
const productsData = [
  {
    id: 1,
    title: "2018 2019 Jaguar E-Pace 2.0L, VIN X 8th Digit Gasoline Engine For Sale",
    price: 7000.0,
    sku: "USED-ENG-1950",
    image: herosection,
    description: "High-quality used Jaguar E-Pace engine. Tested and inspected. Comes with warranty.",
  },
  {
    id: 2,
    title: "2001 Jaguar S-Type 3.0L VIN C, 8th Digit Engine For Sale",
    price: 1700.0,
    sku: "USED-ENG-1951",
    image: herosection,
    description: "Reliable used Jaguar S-Type engine. Well maintained and ready to install.",
  },
  {
    id: 3,
    title: "2000 Jaguar S-Type 3.0L VIN C, 8th Digit Engine For Sale",
    price: 1600.0,
    sku: "USED-ENG-1952",
    image: herosection,
    description: "Quality tested used engine with warranty. Perfect replacement part.",
  },
  {
    id: 4,
    title: "2023 2024 Maserati Ghibli 3.0L V6 Twin-Turbo Engine For Sale",
    price: 6820.0,
    sku: "USED-ENG-1953",
    image: herosection,
    description: "Premium Maserati engine. Low mileage, excellent condition.",
  },
  {
    id: 5,
    title: "2020 BMW 3-Series 2.0L Engine For Sale",
    price: 5500.0,
    sku: "USED-ENG-1954",
    image: herosection,
    description: "BMW quality engine, tested and certified for performance.",
  },
];

// Product Card
function ProductCard({ product, onQuickView }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-black rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-transform duration-300 mx-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative w-full h-64 cursor-pointer">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="w-full bg-white/80 text-black py-3 font-semibold hover:bg-white transition"
            >
              Quick View
            </button>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 text-white space-y-2">
        <h3 className="text-sm font-light leading-snug line-clamp-2">
          {product.title}
        </h3>
        <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

// Quick View Modal
function QuickViewModal({ product, isOpen, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  if (!isOpen || !product) return null;

  const images = [product.image, product.image, product.image];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 animate-fadeIn">
      <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Image Section */}
          <div>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img
                src={images[currentImageIndex]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? "bg-black" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <h2 className="text-2xl font-light mb-4">{product.title}</h2>
            <div className="text-3xl font-semibold mb-4">
              ${product.price.toFixed(2)}
            </div>
            <div className="text-sm text-gray-600 mb-6">
              SKU: {product.sku}
            </div>
            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="flex items-center border border-gray-300 rounded-lg w-36 mb-6">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-3 hover:bg-gray-100"
              >
                <Minus className="w-4 h-4" />
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="flex-1 text-center border-x border-gray-300 py-2"
              />
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="p-3 hover:bg-gray-100"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition mb-4">
              Add to Cart
            </button>
            <a
              href={`/product/${product.id}`}
              className="text-center text-black underline hover:no-underline"
            >
              View More Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Carousel
export default function UsedEnginesCarousel() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // react-slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: (
      <div className="text-white absolute right-[-30px] top-1/2 -translate-y-1/2 cursor-pointer">
        <ChevronRight size={32} />
      </div>
    ),
    prevArrow: (
      <div className="text-white absolute left-[-30px] top-1/2 -translate-y-1/2 cursor-pointer">
        <ChevronLeft size={32} />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-12">
          Used Engines for Salle
        </h2>

        <Slider {...settings}>
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => {
                setSelectedProduct(p);
                setIsModalOpen(true);
              }}
            />
          ))}
        </Slider>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
