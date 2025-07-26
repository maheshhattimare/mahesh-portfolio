import React, { useEffect, useState } from "react";
import {
  Folder,
  Github,
  ExternalLink,
  X,
  Code2,
  Eye,
  Star,
} from "lucide-react";
import { fetchProjects } from "../../services/publicDataService.js";

const WorkSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        // Sort featured projects first
        const sorted = data.sort((a, b) => b.isFeatured - a.isFeatured);
        setProjects(sorted);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const parts = dateStr.split("-");
    if (parts.length === 2) {
      return `${new Date(parts[0], parts[1] - 1).toLocaleString("default", {
        month: "short",
        year: "numeric",
      })}`;
    }
    return dateStr;
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 font-sans bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:via-[#050414] dark:to-purple-900/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Folder className="w-6 h-6 text-blue-600 dark:text-[#8245ec]" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              PROJECTS
            </h2>
            <Code2 className="w-6 h-6 text-blue-600 dark:text-[#8245ec]" />
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
            A showcase of the projects I have worked on, highlighting my skills
            and experience in various technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project._id || index}
              onClick={() => handleOpenModal(project)}
              className="group bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800/50 rounded-3xl shadow-lg dark:shadow-[0_0_30px_rgba(130,69,236,0.1)] overflow-hidden cursor-pointer hover:shadow-2xl dark:hover:shadow-[0_0_40px_rgba(130,69,236,0.3)] hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-4 sm:p-6">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 sm:h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    {project.isFeatured && (
                      <div className="bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300 p-2 rounded-full shadow">
                        <Star className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-2">
                      <Eye className="w-4 h-4 text-blue-600 dark:text-[#8245ec]" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#8245ec] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {(project.technologies || [])
                      .slice(0, 4)
                      .map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 dark:bg-[#8245ec]/20 text-blue-800 dark:text-[#8245ec] text-xs font-medium rounded-full px-3 py-1 border border-blue-200 dark:border-[#8245ec]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    {(project.technologies || []).length > 4 && (
                      <span className="text-gray-500 dark:text-gray-400 text-xs font-medium px-2 py-1">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(project.startDate)} —{" "}
                    {formatDate(project.endDate)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            <div className="bg-white dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative animate-in zoom-in-95 duration-300">
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={handleCloseModal}
                  className="bg-white/90 dark:bg-gray-800/90 hover:bg-red-50 dark:hover:bg-red-900/30 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto max-h-[90vh]">
                <div className="overflow-y-auto max-h-[90vh]">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8">
                    <img
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      className="w-full max-h-80 object-contain rounded-2xl shadow-lg"
                    />
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      {selectedProject.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-base sm:text-lg leading-relaxed">
                      {selectedProject.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {(selectedProject.technologies || []).map(
                          (tech, index) => (
                            <span
                              key={index}
                              className="bg-blue-100 dark:bg-[#8245ec]/20 text-blue-800 dark:text-[#8245ec] text-sm font-medium rounded-full px-3 py-1 border border-blue-200 dark:border-[#8245ec]/30"
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Project Duration:
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(selectedProject.startDate)} —{" "}
                        {formatDate(selectedProject.endDate)}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-2xl font-semibold text-center transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <Github className="w-5 h-5 group-hover:animate-pulse" />
                        View Code
                      </a>
                      <a
                        href={selectedProject.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#8245ec] dark:to-purple-400 hover:from-blue-700 hover:to-purple-700 dark:hover:from-[#7c3aed] dark:hover:to-purple-500 text-white px-6 py-3 rounded-2xl font-semibold text-center transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                      >
                        <ExternalLink className="w-5 h-5 group-hover:animate-bounce" />
                        View Live
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkSection;
