import { GraduationCap, School, Calendar, Award } from "lucide-react";
import { fetchEducation } from "../../services/publicDataService.js";
import { useEffect, useState } from "react";

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const formatDateRange = (start, end) => {
  const from = formatDate(start);
  const to = formatDate(end);
  return from && to ? `${from} – ${to}` : from || to || "—";
};

const EducationSection = () => {
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEducations = async () => {
      try {
        const data = await fetchEducation();
        setEducations(data);
      } catch (error) {
        console.error("Error fetching education:", error);
      } finally {
        setLoading(false);
      }
    };

    loadEducations();
  }, []);

  return (
    <section
      id="education"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 font-sans bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-[#050414] dark:to-purple-900/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <GraduationCap className="w-6 h-6 text-blue-600 dark:text-[#8245ec]" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              EDUCATION
            </h2>
          </div>

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
            My education has been a journey of learning and development. Here
            are the details of my academic background.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Loading education...
          </p>
        ) : (
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 to-purple-200 dark:from-gray-700 dark:to-[#8245ec]/30 h-full"></div>

            {educations.map((edu, index) => (
              <div key={edu._id || index} className="relative mb-8 lg:mb-16">
                {/* Mobile Card */}
                <div className="lg:hidden">
                  <div className="bg-white dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl border border-gray-200 dark:border-gray-800/50 shadow-lg p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-blue-200 dark:border-[#8245ec]/30 flex-shrink-0">
                        <img
                          src={edu.logoUrl}
                          alt={edu.institution}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-1 text-blue-600 dark:text-[#8245ec]">
                          <School className="w-4 h-4" />
                          <h4 className="text-sm font-medium">
                            {edu.institution}
                          </h4>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm mt-1">
                          <Calendar className="w-4 h-4" />
                          <p>{formatDateRange(edu.startDate, edu.endDate)}</p>
                        </div>
                        <div className="flex items-center gap-1 text-green-600 dark:text-green-400 text-sm mt-1">
                          <Award className="w-4 h-4" />
                          <p>Grade: {edu.grade}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.description}
                    </p>
                  </div>
                </div>

                {/* Desktop Card */}
                <div className="hidden lg:flex items-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden xl:flex">
                    <div className="bg-white dark:bg-gray-900 border-4 border-blue-500 dark:border-[#8245ec] w-20 h-20 rounded-full flex justify-center items-center shadow-lg overflow-hidden">
                      <img
                        src={edu.logoUrl}
                        alt={edu.institution}
                        className="w-12 h-12 object-cover rounded-full"
                      />
                    </div>
                  </div>

                  <div
                    className={`w-full max-w-lg p-8 rounded-3xl border border-gray-200 dark:border-gray-800/50 bg-white dark:bg-gray-900/80 backdrop-blur-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                      index % 2 === 0 ? "ml-auto mr-12" : "ml-12 mr-auto"
                    }`}
                  >
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-20 h-16 overflow-hidden rounded-2xl border-2 border-blue-200 dark:border-[#8245ec]/30">
                        <img
                          src={edu.logoUrl}
                          alt={edu.institution}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-1 text-blue-600 dark:text-[#8245ec]">
                          <School className="w-4 h-4" />
                          <h4 className="text-base">{edu.institution}</h4>
                        </div>
                        <div className="flex items-center gap-4 text-sm mt-1">
                          <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <p>{formatDateRange(edu.startDate, edu.endDate)}</p>
                          </div>
                          <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                            <Award className="w-4 h-4" />
                            <p>Grade: {edu.grade}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EducationSection;
