import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { Download, MessageCircle } from "lucide-react";
import { fetchAbout } from "../../services/publicDataService";
import { useEffect, useState } from "react";

const AboutSection = () => {
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadAbout = async () => {
    try {
      const data = await fetchAbout();
      setAbout(data);
    } catch (error) {
      console.error("Error fetching about", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAbout();
  }, []);

  return (
    <section
      id="about"
      className="py-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 font-sans mt-16 md:mt-24 lg:mt-32 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* Left Side */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Greeting */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#8245ec] dark:to-purple-400 bg-clip-text text-transparent">
                {about.name}
              </span>
            </h1>

            {/* Skills Heading with Typing Effect */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6 leading-tight">
              <span className="text-gray-700 dark:text-white">
                I am a&nbsp;
              </span>
              <span className="text-blue-600 dark:text-[#8245ec]">
                <Typewriter
                  words={[
                    "Fullstack Developer",
                    "MERN Stack Developer",
                    "Tech Enthusiast",
                    "Coder",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h3>

            {/* About Me Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl">
              {about.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              {/* Download CV */}
              <a
                href={about ? about.resumeUrl : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-white py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#8245ec] dark:to-purple-400 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 dark:hover:shadow-purple-500/25"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download CV
              </a>

              {/* Hire Me */}
              <a
                href="#contact"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-gray-100 dark:bg-white text-blue-600 dark:text-[#8245ec] font-semibold py-3 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out text-base sm:text-lg border border-gray-200 dark:border-transparent hover:bg-white dark:hover:bg-gray-50"
              >
                <MessageCircle
                  size={20}
                  className="group-hover:animate-pulse"
                />
                Hire Me
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <Tilt
              className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1500}
              gyroscope={true}
            >
              <div className="relative w-full h-full">
                {/* Gradient border ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-[#8245ec] dark:via-purple-400 dark:to-pink-400 animate-spin-slow p-1">
                  <div className="w-full h-full rounded-full bg-white dark:bg-[#050414]"></div>
                </div>

                {/* Profile image */}
                <img
                  src={about.avatarUrl}
                  alt={about.name}
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-cover shadow-2xl"
                />

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-[#8245ec]/20 dark:via-purple-400/20 dark:to-pink-400/20 blur-xl animate-pulse"></div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
