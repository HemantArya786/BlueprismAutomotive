// import { useState } from "react";

// // Quick View Modal Component
// export default function QuickViewModal({ product, isOpen, onClose }) {
//   const [quantity, setQuantity] = useState(1);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
  

//   if (!isOpen || !product) return null;

//   const images = [product.image, product.image, product.image, product.image];

//   const handleAddToCart = () => {
//     console.log(`Added ${quantity} of ${product.title} to cart`);
//     alert(`Added ${quantity} item(s) to cart!`);
//   };

//   const incrementQuantity = () => setQuantity(prev => prev + 1);
//   const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 animate-fadeIn">
//       <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
//         >
//           <X className="w-6 h-6" />
//         </button>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
//           {/* Left Side - Image */}
//           <div>
//             <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
//               <img
//                 src={images[currentImageIndex]}
//                 alt={product.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
            
//             {/* Image Dots */}
//             <div className="flex justify-center gap-2">
//               {images.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentImageIndex(index)}
//                   className={`w-3 h-3 rounded-full transition-colors ${
//                     index === currentImageIndex ? 'bg-black' : 'bg-gray-300'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Right Side - Details */}
//           <div className="flex flex-col">
//             <h2 className="text-2xl font-light mb-4">{product.title}</h2>
            
//             <div className="text-3xl font-semibold mb-4">
//               ${product.price.toFixed(2)}
//             </div>

//             <div className="text-sm text-gray-600 mb-6">
//               SKU: {product.sku}
//             </div>

//             <div className="mb-6">
//               <p className="text-gray-700 leading-relaxed">
//                 {product.description}
//               </p>
//             </div>

//             {/* Quantity Selector */}
//             <div className="mb-6">
//               <label className="block text-sm font-medium mb-2">
//                 Quantity <span className="text-red-500">*</span>
//               </label>
//               <div className="flex items-center border border-gray-300 rounded-lg w-36">
//                 <button
//                   onClick={decrementQuantity}
//                   className="p-3 hover:bg-gray-100 transition-colors"
//                 >
//                   <Minus className="w-4 h-4" />
//                 </button>
//                 <input
//                   type="text"
//                   value={quantity}
//                   readOnly
//                   className="flex-1 text-center border-x border-gray-300 py-2 focus:outline-none"
//                 />
//                 <button
//                   onClick={incrementQuantity}
//                   className="p-3 hover:bg-gray-100 transition-colors"
//                 >
//                   <Plus className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>

//             {/* Add to Cart Button */}
//             <button
//               onClick={handleAddToCart}
//               className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors mb-4"
//             >
//               Add to Cart
//             </button>

//             {/* View More Details Link */}
//             <a
//               href={`/product/${product.id}`}
//               className="text-center text-black underline hover:no-underline"
//             >
//               View More Details
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }