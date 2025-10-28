export default function PopularBrands() {
  const brands = [
    { name: 'Cadillac', image: 'cadillac-logo.png' },
    { name: 'Ford', image: 'ford-logo.png' },
    { name: 'Chrysler', image: 'chrysler-logo.png' },
    { name: 'Buick', image: 'buick-logo.png' },
    { name: 'Chevrolet', image: 'chevrolet-logo.png' },
    { name: 'Subaru', image: 'subaru-logo.png' },
    { name: 'Infiniti', image: 'infiniti-logo.png' },
    { name: 'Honda', image: 'honda-logo.png' },
    { name: 'Dodge', image: 'dodge-logo.png' },
    { name: 'Volkswagen', image: 'volkswagen-logo.png' },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-12">
          Our Popular Brands
        </h2>

     <div className="grid grid-cols-2 max-w-5xl mx-auto sm:grid-cols-3 md:grid-cols-5 border border-gray-700">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="aspect-square flex items-center justify-center p-6 sm:p-8 border-r border-b border-gray-700 hover:bg-gray-900 transition-colors duration-300 cursor-pointer"
              style={{
                borderRight: (index + 1) % 5 === 0 ? 'none' : '',
                borderBottom: index >= 5 ? 'none' : ''
              }}
            >
              <img
                src={brand.image}
                alt={`${brand.name} logo`}
                className="w-full h-full object-contain max-w-[120px] max-h-[120px]"
              />
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
}