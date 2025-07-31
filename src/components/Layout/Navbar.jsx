import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

import { useTheme } from "../../hooks/useTheme";
import { iconMap } from "../../utils/iconMap.js";
import { FaGlobe } from "react-icons/fa";

const Navbar = ({ socials, about }) => {
  const location = useLocation();
  const isProjectsPage = location.pathname === "/projects";

  const menuItems = [
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "experience", title: "Experience" },
    { id: "projects", title: "Projects" },
    { id: "education", title: "Education" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const nameParts = about?.name?.split(" ") || ["FirstName", "LastName"];
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log(socials);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 ${
        isScrolled
          ? "bg-white/80 dark:bg-[#050414]/80 backdrop-blur-xl shadow-lg border-b border-gray-200/20 dark:border-gray-800/30"
          : "bg-transparent"
      }`}
    >
      <div className="text-gray-900 dark:text-white py-4 sm:py-5 flex justify-between items-center max-w-7xl mx-auto">
        <a href={isProjectsPage ? "/" : "#"}>
          <div className="text-lg sm:text-xl font-serif cursor-pointer select-none">
            <span className="text-blue-600 dark:text-[#8245ec]">&lt;</span>
            <span className="text-gray-900 dark:text-white font-medium">
              {firstName}
            </span>
            <span className="text-blue-600 dark:text-[#8245ec]">/</span>
            <span className="text-gray-900 dark:text-white font-medium">
              {lastName}
            </span>
            <span className="text-blue-600 dark:text-[#8245ec]">&gt;</span>
          </div>
        </a>

        {/* Desktop Menu (Hidden on /projects route) */}
        {!isProjectsPage && (
          <ul className="hidden md:flex space-x-6 lg:space-x-8 text-gray-600 dark:text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer transition-colors duration-200 hover:text-blue-600 dark:hover:text-[#8245ec] font-medium ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-[#8245ec]"
                    : ""
                }`}
              >
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className="py-2"
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Theme Toggle & Socials */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="relative w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#8245ec] focus:ring-opacity-50"
            aria-label="Toggle theme"
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                theme === "dark" ? "translate-x-6" : "translate-x-0"
              }`}
            >
              {theme === "dark" ? (
                <svg
                  className="w-3 h-3 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-3 h-3 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </div>
          </button>

          <div className="flex space-x-3">
            {(socials?.data || [])
              .filter(
                (social) =>
                  social.isActive &&
                  ["github", "linkedin"].includes(social.name.toLowerCase())
              )
              .map((social, index) => {
                const Icon = iconMap[social.icon] || FaGlobe;
                return (
                  <a
                    key={social._id || index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-[#8245ec] transition-colors duration-200 p-2 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
          </div>
        </div>

        {/* Mobile Menu Toggle (Hidden on /projects route) */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="relative w-12 h-7 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 focus:outline-none"
            aria-label="Toggle theme"
          >
            <div
              className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                theme === "dark" ? "translate-x-5" : "translate-x-0"
              }`}
            >
              {theme === "dark" ? (
                <svg
                  className="w-3 h-3 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-3 h-3 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </div>
          </button>

          {!isProjectsPage &&
            (isOpen ? (
              <X
                className="w-7 h-7 text-blue-600 dark:text-[#8245ec] cursor-pointer transition-transform duration-200 hover:scale-110"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <Menu
                className="w-7 h-7 text-blue-600 dark:text-[#8245ec] cursor-pointer transition-transform duration-200 hover:scale-110"
                onClick={() => setIsOpen(true)}
              />
            ))}
        </div>
      </div>

      {/* Mobile Menu Items (Hidden on /projects route) */}
      {!isProjectsPage && isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[90%] max-w-sm bg-white/95 dark:bg-[#050414]/95 backdrop-blur-xl z-50 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-800/50 mt-2 md:hidden">
          <ul className="flex flex-col items-center space-y-1 py-6 text-gray-600 dark:text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer w-full text-center transition-colors duration-200 hover:text-blue-600 dark:hover:text-white font-medium ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-[#8245ec]"
                    : ""
                }`}
              >
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className="py-3 px-6 w-full hover:bg-gray-50 dark:hover:bg-gray-800/30 rounded-lg mx-4"
                >
                  {item.title}
                </button>
              </li>
            ))}
            <div className="flex space-x-6 pt-4 border-t border-gray-200 dark:border-gray-700 mt-4 w-full justify-center">
              {(socials?.data || [])
                .filter((social) => {
                  console.log(
                    "Checking social:",
                    social.name,
                    "isActive:",
                    social.isActive
                  );
                  return (
                    social.isActive &&
                    ["github", "linkedin"].includes(social.name.toLowerCase())
                  );
                })
                .map((social, index) => {
                  const Icon = iconMap[social.icon] || FaGlobe;
                  return (
                    <a
                      key={social._id || index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-[#8245ec] transition-colors duration-200 p-2 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
