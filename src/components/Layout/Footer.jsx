import { Heart, ArrowUp } from "lucide-react";
import { fetchSocials } from "../../services/publicDataService.js";
import { useEffect, useState } from "react";
import { iconMap } from "../../utils/iconMap.js";
import { FaGlobe } from "react-icons/fa";

const Footer = ({ socials, about }) => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900/90 text-gray-800 dark:text-white py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 relative border-t border-gray-200 dark:border-gray-800">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Scroll to top */}
        <div className="flex justify-center mb-8">
          <button
            onClick={scrollToTop}
            className="group bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-[#8245ec] p-3 rounded-full border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
          </button>
        </div>

        <div className="text-center space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#8245ec] dark:to-purple-400 bg-clip-text text-transparent mb-2">
              {about.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-medium">
              Full Stack Developer & Tech Enthusiast
            </p>
          </div>

          {/* Navigation links using social names */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {socials?.data.map((social, index) => (
              <button
                key={social._id || index}
                onClick={() => handleScroll(social.name.toLowerCase())}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-[#8245ec] text-sm sm:text-base font-medium transition-colors duration-200 py-2 px-1 relative group"
              >
                {social.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-[#8245ec] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 sm:gap-6">
            {socials?.data.map((social, index) => {
              const Icon = iconMap[social.icon] || FaGlobe;
              return (
                <a
                  key={social._id || index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-[#8245ec] p-3 rounded-full border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                  aria-label={social.name}
                >
                  <Icon size={20} className="group-hover:animate-pulse" />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

          {/* Footer Note */}
          <div className="text-center space-y-2">
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
              © {new Date().getFullYear()} Mahesh Hattimare. Made with
              <Heart
                className="w-4 h-4 text-red-500 animate-pulse"
                fill="currentColor"
              />
              All rights reserved.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Designed & Developed with passion for creating amazing experiences
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
