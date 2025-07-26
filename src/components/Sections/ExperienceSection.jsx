import { Briefcase, Calendar, Building2 } from "lucide-react";

// Helper function to format a single date
const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);

  if (isNaN(date.getTime())) return "Present";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

// Helper function to create a date range string
const formatDateRange = (start, end) => {
  const from = formatDate(start);
  const to = end ? formatDate(end) : "Present";
  return from ? `${from} – ${to}` : "—";
};

const ExperienceSection = ({ experiences }) => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 font-sans bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-[#050414] dark:to-purple-900/20 relative overflow-hidden"
    >
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Briefcase className="w-6 h-6 text-blue-600 dark:text-[#8245ec]" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              EXPERIENCE
            </h2>
          </div>

          {/* Underline */}
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
            A collection of my work experience and the roles I have taken in
            various organizations.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 to-purple-200 dark:from-gray-700 dark:to-[#8245ec]/30 h-full"></div>

          {(experiences || []).map((experience, index) => (
            <div
              key={experience._id || index}
              className="relative mb-8 lg:mb-16"
            >
              {/* MOBILE VIEW */}
              <div className="lg:hidden">
                <div className="bg-white dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl border border-gray-200 dark:border-gray-800/50 shadow-lg dark:shadow-[0_0_30px_rgba(130,69,236,0.1)] p-6 hover:shadow-xl dark:hover:shadow-[0_0_40px_rgba(130,69,236,0.2)] transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl overflow-hidden border-2 border-blue-200 dark:border-[#8245ec]/30 flex-shrink-0">
                      <img
                        src={experience.logoUrl}
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 leading-tight">
                        {experience.role}
                      </h3>
                      <div className="flex items-center gap-1 text-blue-600 dark:text-[#8245ec] mb-2">
                        <Building2 className="w-4 h-4 flex-shrink-0" />
                        <h4 className="text-sm font-medium truncate">
                          {experience.company}
                        </h4>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <p className="text-sm">
                          {formatDateRange(
                            experience.startDate,
                            experience.endDate
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {experience.description}
                  </p>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Skills:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {(experience.skills || []).map((skill, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 dark:bg-[#8245ec]/20 text-blue-800 dark:text-[#8245ec] px-3 py-1 text-xs font-medium rounded-full border border-blue-200 dark:border-[#8245ec]/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* DESKTOP VIEW */}
              <div className="hidden lg:flex items-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden xl:flex ">
                  <div className="bg-white dark:bg-gray-900 border-4 border-blue-500 dark:border-[#8245ec] w-20 h-20 rounded-full flex justify-center items-center shadow-lg">
                    <img
                      src={experience.logoUrl}
                      alt={experience.company}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </div>
                </div>

                <div
                  className={`w-full max-w-lg p-8 rounded-3xl border border-gray-200 dark:border-gray-800/50 bg-white dark:bg-gray-900/80 backdrop-blur-lg shadow-lg dark:shadow-[0_0_30px_rgba(130,69,236,0.1)] transform transition-all duration-500 hover:scale-105 hover:shadow-xl dark:hover:shadow-[0_0_40px_rgba(130,69,236,0.2)] ${
                    index % 2 === 0 ? "ml-auto mr-12" : "ml-12 mr-auto"
                  }`}
                >
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl overflow-hidden border-2 border-blue-200 dark:border-[#8245ec]/30">
                      <img
                        src={experience.logoUrl}
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {experience.role}
                      </h3>
                      <div className="flex items-center gap-1 text-blue-600 dark:text-[#8245ec] mb-2">
                        <Building2 className="w-4 h-4" />
                        <h4 className="text-base font-medium">
                          {experience.company}
                        </h4>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <p className="text-sm">
                          {formatDateRange(
                            experience.startDate,
                            experience.endDate
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {experience.description}
                  </p>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Skills:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {(experience.skills || []).map((skill, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 dark:bg-[#8245ec]/20 text-blue-800 dark:text-[#8245ec] px-3 py-1 text-sm font-medium rounded-full border border-blue-200 dark:border-[#8245ec]/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
