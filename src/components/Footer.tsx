import React from "react";

const Footer:React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-pink-50/90 via-purple-50/90 to-indigo-50/90 backdrop-blur-lg shadow-lg mt-8 rounded-t-3xl">
      <div className="max-w-6xl mx-auto px-2 md:px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="w-full md:w-1/2 md:h-[400px] md:h-full">
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1830.6427248694843!2d79.52534580405334!3d23.41405355704249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981aeedb71c8bef%3A0x137e9c0798f4eebe!2sPatan%20Rd%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1738599910312!5m2!1sen!2sin" 
              className="w-full md:h-[400px] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              loading="lazy"
            ></iframe>
          </div>

          <div className="w-full md:w-1/2 md:pl-8">
            <div className="grid grid-cols-2 gap-1 md:gap-8">
              <div className="bg-white/60 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-3">
                  Contact
                </h3>
                <div className="space-y-3 text-xs">
                  <p className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-200">
                    <span className="text-base">📍</span> Patan Road, Nunsar
                  </p>
                  <p className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-200">
                    <span className="text-base">📞</span> +91 8349681383
                  </p>
                  <p className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-200 break-words text-[9px]">
                    <span className="text-base">✉️</span> vikash123@gmail.com
                  </p>
                </div>
              </div>

              <div className="bg-white/60 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-3">
                  Hours
                </h3>
                <div className="space-y-3 text-xs">
                  <p className="hover:translate-x-1 transition-transform duration-200">
                    Mon-Fri: 9am - 7pm
                  </p>
                  <p className="hover:translate-x-1 transition-transform duration-200">
                    Saturday: 10am - 5pm
                  </p>
                  <p className="hover:translate-x-1 transition-transform duration-200">
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white/60 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-4">
                Follow Us
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:scale-105 transition-transform duration-300"
                >
                  <i className="fab fa-facebook text-base"></i>
                  <span className="text-xs">Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white hover:scale-105 transition-transform duration-300"
                >
                  <i className="fab fa-instagram text-base"></i>
                  <span className="text-xs">Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-400 text-white hover:scale-105 transition-transform duration-300"
                >
                  <i className="fab fa-twitter text-base"></i>
                  <span className="text-xs">Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white hover:scale-105 transition-transform duration-300"
                >
                  <i className="fab fa-youtube text-base"></i>
                  <span className="text-xs">YouTube</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:scale-105 transition-transform duration-300"
                >
                  <i className="fab fa-linkedin text-base"></i>
                  <span className="text-xs">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-r from-black to-gray-800 text-white hover:scale-105 transition-transform duration-300"
                >
                  <i className="fab fa-tiktok text-base"></i>
                  <span className="text-xs">TikTok</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 mt-8 pt-6 border-t border-gray-200">
          <div className="mb-4 md:mb-0">
            © 2024 Mobile Repair Shop. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="hover:text-pink-500 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-purple-500 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-indigo-500 transition-colors duration-200"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
