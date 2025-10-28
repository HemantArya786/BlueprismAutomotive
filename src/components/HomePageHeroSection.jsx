import { useState } from "react";
import { Users, Truck, Wrench } from "lucide-react";
import herosection from "../../public/Image/herosection.jpeg"

export default function HomePageHeroSection() {
  const [formData, setFormData] = useState({
    year: "",
    make: "",
    model: "",
    part: "",
    engineSize: "",
    vin: "",
    email: "",
    fullName: "",
    countryCode: "US +1",
    phone: "",
    zipcode: "",
    consent: false,
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section className="relative min-h-screen  overflow-hidden">
      ✅ Correct background video
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/car-bg.mp4" type="video/mp4" /> */}
        {/* YouTube links don't work in <video>; use a .mp4 file from /public/videos */}
      {/* </video> */}

      {/* ✅ Dark overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-70"></div> */}




      {/* ✅ Background Image instead of Video */}
<div
  className="absolute inset-0 w-full h-full bg-cover bg-center"
  style={{
    backgroundImage: `url(${herosection})`, // place your image inside /public/images
  }}
></div>

{/* ✅ Dark overlay */}
<div className="absolute inset-0 bg-black bg-opacity-70"></div>


      <div className="relative z-10 w-full  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* ===== LEFT CONTENT ===== */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                Shop Our Exclusive Used Car Parts
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight text-white">
                Build Your Dream Car Today.
              </h2>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light">
                Now <span className="text-white font-semibold">15% Off</span>{" "}
                On All Items.
              </h3>
            </div>

            {/* Icons Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {[
                {
                  icon: Truck,
                  title1: "Free shipping",
                  title2: "to commercial address",
                },
                {
                  icon: Wrench,
                  title1: "Tested & Inspected",
                  title2: "Used engine and transmission",
                },
                {
                  icon: Users,
                  title1: "1 Year Complimentary",
                  title2: "Warranty",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <item.icon className="w-8 h-8 flex-shrink-0 text-white" />
                  <div className="border-l-2 border-white pl-3">
                    <p className="text-sm sm:text-base">{item.title1}</p>
                    <p className="text-sm sm:text-base">{item.title2}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              {[
                { num: "11,669+", text: "Happy Customers" },
                { num: "12,890+", text: "Orders Delivered" },
                { num: "12,000+", text: "Parts Inventory" },
                { num: "265+", text: "Premium Members" },
              ].map((stat, i) => (
                <div key={i} className="border-l-4 border-white pl-4">
                  <div className="text-2xl sm:text-3xl font-bold mb-1">
                    {stat.num}
                  </div>
                  <div className="text-sm sm:text-base">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== RIGHT FORM ===== */}
          <div className="bg-black bg-opacity-80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl w-full">
            <h3 className="text-2xl sm:text-3xl text-blue-400 font-light mb-8 text-center">
              Part Request Form
            </h3>

            <div className="space-y-6">
              {/* Input Fields */}
              {[
                { label: "Year", field: "year", type: "select", required: true },
                { label: "Make", field: "make", type: "select" },
                { label: "Model", field: "model", type: "text" },
                { label: "Part", field: "part", type: "select" },
                { label: "Engine Size", field: "engineSize", type: "text" },
                { label: "VIN", field: "vin", type: "text" },
                { label: "Email", field: "email", type: "email" },
                { label: "Full Name", field: "fullName", type: "text" },
              ].map((item, i) => (
                <div key={i}>
                  <label className="block text-white text-sm mb-2">
                    {item.label}
                    {item.required && <span className="text-red-500">*</span>}
                  </label>
                  {item.type === "select" ? (
                    <select
                      value={formData[item.field]}
                      onChange={(e) =>
                        handleChange(item.field, e.target.value)
                      }
                      className="w-full bg-transparent border-b-2 border-white text-white py-2 px-0 focus:outline-none focus:border-blue-400 text-sm"
                    >
                      <option value="" className="bg-black">
                        Select {item.label}
                      </option>
                      <option value="Option 1" className="bg-black">
                        Option 1
                      </option>
                      <option value="Option 2" className="bg-black">
                        Option 2
                      </option>
                    </select>
                  ) : (
                    <input
                      type={item.type}
                      value={formData[item.field]}
                      onChange={(e) =>
                        handleChange(item.field, e.target.value)
                      }
                      className="w-full bg-transparent border-b-2 border-white text-white py-2 px-0 focus:outline-none focus:border-blue-400 text-sm"
                    />
                  )}
                </div>
              ))}

              {/* Country Code + Phone */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-white text-sm mb-2">Code</label>
                  <select
                    value={formData.countryCode}
                    onChange={(e) => handleChange("countryCode", e.target.value)}
                    className="w-full bg-transparent border-b-2 border-white text-white py-2 px-0 focus:outline-none focus:border-blue-400 text-sm"
                  >
                    <option value="US +1" className="bg-black">
                      US +1
                    </option>
                    <option value="IN +91" className="bg-black">
                      IN +91
                    </option>
                    <option value="UK +44" className="bg-black">
                      UK +44
                    </option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-white text-sm mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="w-full bg-transparent border-b-2 border-white text-white py-2 px-0 focus:outline-none focus:border-blue-400 text-sm"
                  />
                </div>
              </div>

              {/* Zipcode */}
              <div>
                <label className="block text-white text-sm mb-2">Zipcode</label>
                <input
                  type="text"
                  value={formData.zipcode}
                  onChange={(e) => handleChange("zipcode", e.target.value)}
                  className="w-full bg-transparent border-b-2 border-white text-white py-2 px-0 focus:outline-none focus:border-blue-400 text-sm"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => handleChange("consent", e.target.checked)}
                  className="mt-1 w-4 h-4"
                  id="consent"
                />
                <label htmlFor="consent" className="text-white text-xs">
                  I consent to receive SMS text messages and calls for the above
                  request.{" "}
                  <span className="text-blue-400 underline cursor-pointer">
                    View terms of use
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-full text-base sm:text-lg transition-all duration-300"
              >
                Get Quote Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
