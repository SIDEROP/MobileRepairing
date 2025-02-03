import React, { useRef, useState } from "react";
import userImg from "../../public/user.png"


const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef(null);
  const serviceCardsRef = useRef<HTMLDivElement[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageSlide, setCurrentImageSlide] = useState(0);

  const slides = [
    {
      title: "Fast Repairs 🚀",
      description: "Most repairs done same day! 90-day warranty included ✨",
    },
    {
      title: "Expert Techs 👨‍💻", 
      description: "10+ years experience fixing phones & tablets 💪",
    },
    {
      title: "Quality Parts ⭐",
      description: "Only genuine parts with full warranty coverage 💯",
    },
    {
      title: "Best Prices 💰",
      description: "We'll beat any competitor's price - guaranteed! 🤝",
    },
    {
      title: "Easy Service 🙌",
      description: "Walk in or book online - we got you covered! 📱",
    },
    {
      title: "Data Recovery 💾",
      description: "Lost data? We can help recover your precious memories! 🔄",
    },
    {
      title: "Store Products 🛍️",
      description:
        "Visit our store for cases, chargers, accessories & more! 🏪",
    },
    {
      title: "Charging Port Fix ⚡",
      description: "No more loose connections - fast charging restored! 🔌",
    },
  ];

  const imageSlides = [
    {
      url: "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      caption: "Pro Phone Repair 📱",
    },
    {
      url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      caption: "Screen Fix 🔧",
    },
    {
      url: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      caption: "Battery Service ⚡",
    },
    {
      url: "https://images.unsplash.com/photo-1542641728-6ca359b085f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      caption: "Data Recovery 💾",
    },
    {
      url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      caption: "Store Products 🛍️",
    },
  ];

  return (
    <div ref={containerRef} className="space-y-4 sm:space-y-6 md:space-y-8">
      
      <section id="home" className="bg-gradient-to-br from-sky-200 via-indigo-100 to-purple-200 text-gray-800 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500">
        <div className="max-w-3xl mx-auto text-center slide-text backdrop-blur-sm bg-white/60 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-indigo-600 animate-pulse">
            {slides[currentSlide].title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-700">
            {slides[currentSlide].description}
          </p>
          <div className="flex justify-center space-x-2 sm:space-x-3 md:space-x-4 mt-4 sm:mt-6 md:mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full transition-all duration-500 hover:scale-110 ${
                  index === currentSlide
                    ? "bg-indigo-400 shadow-md scale-125"
                    : "bg-indigo-200 hover:bg-indigo-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* why choose us */}
      <section className="bg-gradient-to-br from-purple-100 via-white to-pink-100 rounded-xl md:rounded-2xl shadow-xl p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-6 md:mb-8">
            <div className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden mb-3 md:mb-4 ring-4 md:ring-8 ring-purple-500/30 shadow-2xl hover:scale-110 transition-all duration-500 hover:rotate-3">
              <img 
                src={userImg}
                alt="Mobile Fix Masters Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 animate-gradient hover:scale-105 transition-transform">
              Why Choose Mobile Fix Masters? 🏆
            </h2>
            <div className="mt-4 md:mt-6 text-center backdrop-blur-sm bg-white/50 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition">
              <p className="text-base md:text-lg text-gray-700">Owned & Operated by</p>
              <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Vikash Kumar</p>
              <p className="text-sm md:text-md text-gray-600 italic">Mobile Fix Masters - Your Trusted Repair Shop</p>
              <a 
                href="https://wa.me/918349681383"
                className="inline-block mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Chat on WhatsApp
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="text-center p-4 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-2">
              <div className="text-4xl md:text-6xl mb-3 md:mb-4 animate-bounce">⚡</div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-800">Fast Service</h3>
              <p className="text-sm md:text-base text-gray-700">Most repairs completed within 24 hours. Get your device back quickly!</p>
            </div>

            <div className="text-center p-4 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-2">
              <div className="text-4xl md:text-6xl mb-3 md:mb-4 animate-pulse">💪</div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-800">Expert Team</h3>
              <p className="text-sm md:text-base text-gray-700">Certified technicians with 10+ years of combined experience</p>
            </div>

            <div className="text-center p-4 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-2">
              <div className="text-4xl md:text-6xl mb-3 md:mb-4 animate-bounce">✨</div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-800">Quality Parts</h3>
              <p className="text-sm md:text-base text-gray-700">Only genuine replacement parts used for all repairs</p>
            </div>
          </div>

          <div className="mt-8 md:mt-16 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-6 md:mb-10">
              <div className="w-full md:w-auto bg-gradient-to-r from-green-200 to-green-300 px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <span className="text-2xl md:text-3xl text-green-800 font-bold">10,000+</span>
                <span className="text-base md:text-lg text-green-700"> Devices Repaired</span>
              </div>
              <div className="w-full md:w-auto bg-gradient-to-r from-blue-200 to-blue-300 px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <span className="text-2xl md:text-3xl text-blue-800 font-bold">4.9/5</span>
                <span className="text-base md:text-lg text-blue-700"> Customer Rating</span>
              </div>
              <div className="w-full md:w-auto bg-gradient-to-r from-purple-200 to-purple-300 px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <span className="text-2xl md:text-3xl text-purple-800 font-bold">5+</span>
                <span className="text-base md:text-lg text-purple-700"> Years in Business</span>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-700 italic font-medium bg-gradient-to-r from-purple-50 to-pink-50 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-inner">
              "Your satisfaction is our top priority. We treat every device as if it were our own."
            </p>
          </div>
        </div>
      </section>
      {/* why choose us */}

      <section className="relative h-[250px] md:h-[600px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out slide-image"
          style={{ transform: `translateX(-${currentImageSlide * 100}%)` }}
        >
          {imageSlides.map((slide, index) => (
            <div key={index} className="min-w-full h-full relative group">
              <img
                src={slide.url}
                alt={slide.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white p-3 md:p-8">
                <p className="text-lg md:text-3xl font-bold">{slide.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-2 md:bottom-6 right-2 md:right-6 flex space-x-1 md:space-x-3 z-10">
          {imageSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 md:w-5 md:h-5 rounded-full border-2 border-white transition-all duration-300 ${
                index === currentImageSlide
                  ? "bg-white scale-110 md:scale-125"
                  : "bg-transparent scale-100"
              }`}
              onClick={() => setCurrentImageSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="welcome-section bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl md:rounded-2xl shadow-xl p-3 md:p-8 text-white">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 md:mb-4">
          📱 Welcome to Mobile Fix Masters ✨
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          Your go-to spot for all things mobile repair! 🚀 We fix phones,
          tablets, laptops - you name it! Our tech wizards have fixed over 10k
          devices and counting. 💪 Drop by for a free check-up today!
          #MobileRepair #TechFix #PhoneRepair
        </p>
      </section>

      <section
        id="services"
        ref={servicesRef}
        className="bg-white rounded-xl md:rounded-2xl shadow-xl p-3 md:p-8"
      >
        <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-6">
          🛠️ Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
          <div
            ref={(el) => (serviceCardsRef.current[0] = el!)}
            className="p-3 md:p-6 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 cursor-pointer transition-all duration-300"
          >
            <h3 className="text-base md:text-xl font-bold">📱 Screen Repair</h3>
            <p className="text-sm md:text-base text-gray-700">
              Same-day screen fixes for all brands! Full warranty included.
              #ScreenRepair
            </p>
          </div>
          <div
            ref={(el) => (serviceCardsRef.current[1] = el!)}
            className="p-3 md:p-6 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 cursor-pointer transition-all duration-300"
          >
            <h3 className="text-base md:text-xl font-bold">🔋 Battery Swap</h3>
            <p className="text-sm md:text-base text-gray-700">
              Get your power back! 90-day guarantee on all batteries.
              #BatteryLife
            </p>
          </div>
          <div
            ref={(el) => (serviceCardsRef.current[2] = el!)}
            className="p-3 md:p-6 rounded-xl bg-gradient-to-br from-pink-100 to-red-100 cursor-pointer transition-all duration-300"
          >
            <h3 className="text-base md:text-xl font-bold">💧 Water Damage</h3>
            <p className="text-sm md:text-base text-gray-700">
              85% success rate on water damage! Pro ultrasonic cleaning.
              #WaterDamage
            </p>
          </div>
          <div
            ref={(el) => (serviceCardsRef.current[3] = el!)}
            className="p-3 md:p-6 rounded-xl bg-gradient-to-br from-red-100 to-orange-100 cursor-pointer transition-all duration-300"
          >
            <h3 className="text-base md:text-xl font-bold">🔧 Software Fix</h3>
            <p className="text-sm md:text-base text-gray-700">
              Bye-bye bugs & viruses! Data recovery available. #TechSupport
            </p>
          </div>
          <div
            ref={(el) => (serviceCardsRef.current[4] = el!)}
            className="p-3 md:p-6 rounded-xl bg-gradient-to-br from-orange-100 to-yellow-100 cursor-pointer transition-all duration-300"
          >
            <h3 className="text-base md:text-xl font-bold">🛍️ Store Products</h3>
            <p className="text-sm md:text-base text-gray-700">
              Visit our store for cases, chargers & accessories!
              #MobileAccessories
            </p>
          </div>
          <div
            ref={(el) => (serviceCardsRef.current[5] = el!)}
            className="p-3 md:p-6 rounded-xl bg-gradient-to-br from-yellow-100 to-green-100 cursor-pointer transition-all duration-300"
          >
            <h3 className="text-base md:text-xl font-bold">🔌 Charging Port</h3>
            <p className="text-sm md:text-base text-gray-700">
              Fast charging restored! No more loose connections. #ChargingFix
            </p>
          </div>
        </div>
      </section>

      

      <section className="bg-white rounded-xl md:rounded-2xl shadow-xl p-3 md:p-8 text-gray-800">
        <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-6">
          ✨ Why We're Different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
          <div className="text-center p-3 md:p-6 bg-gray-50 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl md:text-5xl mb-2 md:mb-4">⭐</div>
            <h3 className="text-base md:text-xl font-bold mb-1 md:mb-3">
              5-Star Vibes
            </h3>
            <p className="text-sm md:text-base">1000+ happy customers can't be wrong! #CustomerLove</p>
          </div>
          <div className="text-center p-3 md:p-6 bg-gray-50 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl md:text-5xl mb-2 md:mb-4">🛠️</div>
            <h3 className="text-base md:text-xl font-bold mb-1 md:mb-3">
              Certified Pros
            </h3>
            <p className="text-sm md:text-base">Factory-trained techs using genuine parts! #QualityFirst</p>
          </div>
          <div className="text-center p-3 md:p-6 bg-gray-50 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl md:text-5xl mb-2 md:mb-4">⚡</div>
            <h3 className="text-base md:text-xl font-bold mb-1 md:mb-3">
              Lightning Fast
            </h3>
            <p className="text-sm md:text-base">24hr turnaround on most repairs! #SpeedyFix</p>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section className="bg-gray-100 rounded-xl md:rounded-2xl shadow-xl p-3 md:p-8 text-gray-800">
        <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-6 flex items-center gap-2">
          <span className="text-2xl md:text-3xl">🛍️</span> Our Store
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {/* Phone Cases */}
          <div className="bg-white rounded-2xl p-3 md:p-4 hover:scale-105 transition-all shadow-lg">
            <img src="https://images.unsplash.com/photo-1601593346740-925612772716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Phone Case" className="w-full h-32 md:h-40 object-cover rounded-xl mb-2 md:mb-3" />
            <h3 className="font-bold text-sm md:text-lg text-gray-800">Premium Phone Case</h3>
            <p className="text-xs md:text-sm text-gray-600">₹999</p>
          </div>
          
          <div className="bg-white rounded-2xl p-3 md:p-4 hover:scale-105 transition-all shadow-lg">
            <img src="https://m.media-amazon.com/images/I/61u1VALn6JL._SL1500_.jpg" alt="Wireless Headphones" className="w-full h-32 md:h-40 object-cover rounded-xl mb-2 md:mb-3" />
            <h3 className="font-bold text-sm md:text-lg text-gray-800">Wireless Headphones</h3>
            <p className="text-xs md:text-sm text-gray-600">₹1,499</p>
          </div>

          <div className="bg-white rounded-2xl p-3 md:p-4 hover:scale-105 transition-all shadow-lg">
            <img src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Fast Charger" className="w-full h-32 md:h-40 object-cover rounded-xl mb-2 md:mb-3" />
            <h3 className="font-bold text-sm md:text-lg text-gray-800">20W Fast Charger</h3>
            <p className="text-xs md:text-sm text-gray-600">₹799</p>
          </div>

          <div className="bg-white rounded-2xl p-3 md:p-4 hover:scale-105 transition-all shadow-lg">
            <img src="https://m.media-amazon.com/images/I/71lVwl3q-kL._SL1500_.jpg" alt="Power Bank" className="w-full h-32 md:h-40 object-cover rounded-xl mb-2 md:mb-3" />
            <h3 className="font-bold text-sm md:text-lg text-gray-800">10000mAh Power Bank</h3>
            <p className="text-xs md:text-sm text-gray-600">₹999</p>
          </div>

          <div className="bg-white rounded-2xl p-3 md:p-4 hover:scale-105 transition-all shadow-lg">
            <img src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd" alt="Screen Protector" className="w-full h-32 md:h-40 object-cover rounded-xl mb-2 md:mb-3" />
            <h3 className="font-bold text-sm md:text-lg text-gray-800">Tempered Glass</h3>
            <p className="text-xs md:text-sm text-gray-600">₹299</p>
          </div>

          <div className="bg-white rounded-2xl p-3 md:p-4 hover:scale-105 transition-all shadow-lg">
            <img src="https://m.media-amazon.com/images/I/61B0+qQriPL._SL1500_.jpg" alt="Phone Stand" className="w-full h-32 md:h-40 object-cover rounded-xl mb-2 md:mb-3" />
            <h3 className="font-bold text-sm md:text-lg text-gray-800">Phone Stand</h3>
            <p className="text-xs md:text-sm text-gray-600">₹399</p>
          </div>

          <div className="bg-white rounded-2xl p-3 md:p-4 hover:scale-105 transition-all shadow-lg">
            <img src="https://images.unsplash.com/photo-1583863788434-e58a36330cf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="USB Cable" className="w-full h-32 md:h-40 object-cover rounded-xl mb-2 md:mb-3" />
            <h3 className="font-bold text-sm md:text-lg text-gray-800">USB-C Cable</h3>
            <p className="text-xs md:text-sm text-gray-600">₹299</p>
          </div>

          <div className="bg-white rounded-2xl p-3 md:p-4 hover:scale-105 transition-all shadow-lg">
            <img src="https://m.media-amazon.com/images/I/61f1IQifWXL._SL1500_.jpg" alt="Wireless Earbuds" className="w-full h-32 md:h-40 object-cover rounded-xl mb-2 md:mb-3" />
            <h3 className="font-bold text-sm md:text-lg text-gray-800">Wireless Earbuds</h3>
            <p className="text-xs md:text-sm text-gray-600">₹1,999</p>
          </div>

          <div className="bg-white rounded-2xl p-3 md:p-4 hover:scale-105 transition-all shadow-lg">
            <img src="https://images.unsplash.com/photo-1615834307821-5a4c7c5ac0a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Car Holder" className="w-full h-32 md:h-40 object-cover rounded-xl mb-2 md:mb-3" />
            <h3 className="font-bold text-sm md:text-lg text-gray-800">Car Phone Holder</h3>
            <p className="text-xs md:text-sm text-gray-600">₹499</p>
          </div>

          <div className="bg-white rounded-2xl p-3 md:p-4 hover:scale-105 transition-all shadow-lg">
            <img src="https://m.media-amazon.com/images/I/71K6mroOBJL._SL1500_.jpg" alt="Bluetooth Speaker" className="w-full h-32 md:h-40 object-cover rounded-xl mb-2 md:mb-3" />
            <h3 className="font-bold text-sm md:text-lg text-gray-800">Bluetooth Speaker</h3>
            <p className="text-xs md:text-sm text-gray-600">₹999</p>
          </div>

          {/* View More Button */}
          <div className="col-span-full text-center mt-4 md:mt-6">
            <button className="bg-white hover:bg-gray-50 px-6 md:px-8 py-2 md:py-3 rounded-full font-bold transition-all text-gray-800 shadow-lg flex items-center gap-2 mx-auto text-sm md:text-base">
              <span>View All Products</span>
              <span className="text-lg md:text-xl">🛍️</span>
            </button>
          </div>
        </div>
      </section>

      
      <section className="bg-white rounded-xl md:rounded-2xl shadow-xl p-3 md:p-8 text-gray-800" id="contact">
        <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-6 animate-bounce text-center">
          📱 Let's Connect!
        </h2>
        <div className="flex justify-center">
          <div className="bg-gray-50 rounded-xl p-3 md:p-6 shadow-lg hover:shadow-xl transition-all max-w-md w-full">
            <form className="space-y-3 md:space-y-4">
              <div>
                <label className="block mb-1 md:mb-2 font-bold text-sm md:text-base text-gray-700">Your Name</label>
                <input 
                  type="text"
                  className="w-full px-3 md:px-4 py-2 rounded-lg bg-white border-2 border-gray-200 focus:outline-none focus:border-gray-300 transition-colors text-sm md:text-base"
                  placeholder="Type your name..."
                />
              </div>
              <div>
                <label className="block mb-1 md:mb-2 font-bold text-sm md:text-base text-gray-700">Your Email</label>
                <input 
                  type="email"
                  className="w-full px-3 md:px-4 py-2 rounded-lg bg-white border-2 border-gray-200 focus:outline-none focus:border-gray-300 transition-colors text-sm md:text-base"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block mb-1 md:mb-2 font-bold text-sm md:text-base text-gray-700">What's Up?</label>
                <textarea
                  className="w-full px-3 md:px-4 py-2 rounded-lg bg-white border-2 border-gray-200 focus:outline-none focus:border-gray-300 transition-colors h-24 md:h-32 text-sm md:text-base"
                  placeholder="Tell us what you need..."
                ></textarea>
              </div>
              <button className="w-full bg-gray-800 text-white font-bold py-2 md:py-3 px-3 md:px-4 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-md text-sm md:text-base">
                Send it! 🚀
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
