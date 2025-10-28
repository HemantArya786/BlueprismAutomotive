// import { useState } from "react";

// // Product Card Component
// export default function ProductCard({ product, onQuickView, onImageClick }) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div 
//       className="mx-2 bg-black rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="relative aspect-[4/3] overflow-hidden cursor-pointer">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-full object-cover"
//           onClick={() => onImageClick(product.id)}
//         />
        
//         {/* Quick View Overlay */}
//         {isHovered && (
//           <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300">
//             <button
//               onClick={() => onQuickView(product)}
//               className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
//             >
//               Quick View
//             </button>
//           </div>
//         )}
//       </div>
      
//       <div className="p-4 bg-black text-white">
//         <h3 className="text-sm font-light mb-2 line-clamp-2 min-h-[40px]">
//           {product.title}
//         </h3>
//         <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// }