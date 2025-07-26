import { useEffect, useState } from "react";
import { Code, Sparkles } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { fetchSkills } from "../../services/publicDataService";

const SkillsSection = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch skills on mount
  const loadSkills = async () => {
    try {
      setLoading(true);
      const data = await fetchSkills(); // Ensure this returns res.data
      setSkills(data);
    } catch (error) {
      // ✅ FIXED: corrected variable name from 'err' to 'error'
      console.error("Error fetching skills:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSkills();
  }, []);

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 font-sans bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:via-[#050414] dark:to-purple-900/20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Code className="w-6 h-6 text-blue-600 dark:text-[#8245ec]" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              SKILLS
            </h2>
            <Sparkles className="w-6 h-6 text-blue-600 dark:text-[#8245ec]" />
          </div>

          {/* Decorative underline */}
          <div className="w-24 h-4 mx-auto mb-6">
            <svg
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M0 5 Q 25 3, 50 5 T 100 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-blue-600 dark:text-[#8245ec]"
              />
            </svg>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-lg lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            A collection of my technical skills and expertise honed through
            various projects and experiences.
          </p>
        </div>

        {/* ✅ Added error/fallback UI */}
        {!loading && skills.length === 0 && (
          <p className="text-center text-red-500 mb-6">
            Failed to load skills. Please try again later.
          </p>
        )}

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((category, index) => (
            <div
              // ✅ FIXED misleading use of "_id" for index
              key={category._id || index}
              className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg px-6 sm:px-8 py-8 rounded-3xl border border-gray-200/50 dark:border-white/10 shadow-lg hover:shadow-2xl dark:shadow-[0_0_30px_rgba(130,69,236,0.2)] transition-all duration-500 hover:-translate-y-2"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center group-hover:text-blue-600 dark:group-hover:text-[#8245ec] transition-colors duration-300">
                {category.category}
              </h3>

              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1500}
                gyroscope={true}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {category.entries.map((skill, idx) => (
                    <div
                      // ✅ FIXED: changed confusing '_id' use, fallback to index
                      key={skill._id || idx}
                      className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700/50 rounded-2xl py-3 px-3 sm:px-4 hover:bg-blue-50 dark:hover:bg-gray-700/70 hover:border-blue-200 dark:hover:border-[#8245ec]/30 hover:scale-105 transition-all duration-300 group/skill"
                      style={{
                        animationDelay: `${idx * 100}ms`,
                      }}
                    >
                      <img
                        src={skill.iconUrl}
                        alt={`${skill.name} logo`}
                        className="w-6 h-6 sm:w-8 sm:h-8 shrink-0 group-hover/skill:scale-110 transition-transform duration-300"
                      />
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
