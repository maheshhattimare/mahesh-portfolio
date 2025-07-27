import { useState, useMemo } from "react";
import {
  Folder,
  Github,
  ExternalLink,
  X,
  Code2,
  Eye,
  Star,
  Search,
  Grid3X3,
  List,
  Calendar,
  Tag,
} from "lucide-react";

const ProjectsPage = ({ projects = [] }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date");
  const [viewMode, setViewMode] = useState("grid");

  //All Category
  const categories = useMemo(() => {
    const allCategories = projects.flatMap((project) =>
      (project.category || []).map((cat) => cat.trim().toUpperCase())
    );
    const uniqueCategories = Array.from(new Set(allCategories));
    return ["All", ...uniqueCategories];
  }, [projects]);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (project.technologies || []).some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All" ||
        (project.category || [])
          .map((cat) => cat.trim().toUpperCase())
          .includes(selectedCategory.toUpperCase());

      return matchesSearch && matchesCategory;
    });

    // Sort projects
    filtered.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case "date":
          comparison = new Date(b.startDate || 0) - new Date(a.startDate || 0);
          break;
        case "name":
          comparison = a.title.localeCompare(b.title);
          break;
        case "featured":
          comparison = b.isFeatured - a.isFeatured;
          break;
        default:
          comparison = 0;
      }
    });

    return filtered;
  }, [projects, searchTerm, selectedCategory, sortBy]);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:via-[#050414] dark:to-purple-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      <div className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 mb-4 mt-5">
              <Folder className="w-8 h-8 text-blue-600 dark:text-[#8245ec]" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                ALL PROJECTS
              </h1>
              <Code2 className="w-8 h-8 text-blue-600 dark:text-[#8245ec]" />
            </div>

            <div className="w-32 h-4 mx-auto mb-6">
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

            <p className="text-gray-600 dark:text-gray-400 text-lg lg:text-xl font-medium max-w-4xl mx-auto leading-relaxed">
              Explore my complete portfolio of projects, showcasing diverse
              technologies and innovative solutions across different categories.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-lg dark:shadow-[0_0_30px_rgba(130,69,236,0.1)] p-6 mb-8 border border-gray-200 dark:border-gray-800/50">
            <div className="flex flex-row gap-4 items-center">
              {/* Search Input */}
              <div className="relative flex-1 w-full lg:w-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#8245ec] text-sm text-gray-900 dark:text-white"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-2xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-xl transition-all duration-200 ${
                    viewMode === "grid"
                      ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-[#8245ec] shadow-sm"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-xl transition-all duration-200 ${
                    viewMode === "list"
                      ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-[#8245ec] shadow-sm"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex gap-3 pb-2 px-2 sm:px-4 whitespace-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-blue-300 dark:scrollbar-thumb-[#8245ec]/60 scrollbar-track-transparent">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex-shrink-0 px-5 py-2.5 rounded-full font-medium transition-all duration-300 text-sm ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#8245ec] dark:to-purple-400 text-white shadow"
                      : "bg-white dark:bg-gray-900/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800"
                  }`}
                >
                  {category}
                  <span className="ml-1 text-xs opacity-60">
                    (
                    {category === "All"
                      ? projects.length
                      : projects.filter((p) =>
                          (p.category || []).includes(category)
                        ).length}
                    )
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid/List */}
          {viewMode === "grid" ? (
            <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <div
                  key={project._id || index}
                  onClick={() => handleOpenModal(project)}
                  className="group bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800/50 rounded-3xl shadow-lg dark:shadow-[0_0_30px_rgba(130,69,236,0.1)] overflow-hidden cursor-pointer hover:shadow-2xl dark:hover:shadow-[0_0_40px_rgba(130,69,236,0.3)] hover:-translate-y-2 transition-all duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="p-4 sm:p-6">
                    <div className="relative overflow-hidden rounded-2xl mb-6">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-48 sm:h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4 flex gap-2 text-center items-center">
                        {project.isFeatured && (
                          <div className="bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300 p-2 rounded-full shadow">
                            <Star className="w-4 h-4" />
                          </div>
                        )}
                        {(project.category || []).map((item, index) => (
                          <div
                            key={index}
                            className="bg-blue-100 dark:bg-[#8245ec]/20 text-blue-800 dark:text-[#8245ec] px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {item}
                          </div>
                        ))}
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
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-blue-100 dark:bg-[#8245ec]/20 text-blue-800 dark:text-[#8245ec] text-xs font-medium rounded-full px-3 py-1 border border-blue-200 dark:border-[#8245ec]/30"
                            >
                              {tech}
                            </span>
                          ))}
                        {(project.technologies || []).length > 3 && (
                          <span className="text-gray-500 dark:text-gray-400 text-xs font-medium px-2 py-1">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(project.startDate)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProjects.map((project, index) => (
                <div
                  key={project._id || index}
                  onClick={() => handleOpenModal(project)}
                  className="group bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800/50 rounded-2xl shadow-lg dark:shadow-[0_0_30px_rgba(130,69,236,0.1)] overflow-hidden cursor-pointer hover:shadow-xl dark:hover:shadow-[0_0_40px_rgba(130,69,236,0.2)] transition-all duration-300 p-6"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-64 flex-shrink-0">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-40 md:h-32 object-cover rounded-xl"
                      />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#8245ec] transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          {project.isFeatured && (
                            <Star className="w-5 h-5 text-yellow-500" />
                          )}
                          {(project.category || []).map((item, index) => (
                            <span
                              key={index}
                              className="bg-blue-100 dark:bg-[#8245ec]/20 text-blue-800 dark:text-[#8245ec] px-2 py-1 rounded-lg text-xs font-medium "
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(project.technologies || [])
                          .slice(0, 5)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg px-2 py-1"
                            >
                              {tech}
                            </span>
                          ))}
                        {(project.technologies || []).length > 5 && (
                          <span className="text-gray-500 dark:text-gray-400 text-xs font-medium px-2 py-1">
                            +{project.technologies.length - 5} more
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(project.startDate)} —{" "}
                        {formatDate(project.endDate)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="mb-4">
                <Search className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Try adjusting your search terms or filters to find what you're
                looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="px-6 py-3 bg-blue-600 dark:bg-[#8245ec] text-white rounded-2xl font-semibold hover:bg-blue-700 dark:hover:bg-[#7c3aed] transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}

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
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8">
                    <img
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      className="w-full max-h-80 object-contain rounded-2xl shadow-lg"
                    />
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                        {selectedProject.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        {selectedProject.isFeatured && (
                          <div className="bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300 p-2 rounded-full">
                            <Star className="w-5 h-5" />
                          </div>
                        )}
                        {(selectedProject.category || []).map((item, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 dark:bg-[#8245ec]/20 text-blue-800 dark:text-[#8245ec] px-3 py-2 rounded-full text-sm font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Project Duration:
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {formatDate(selectedProject.startDate)} —{" "}
                          {formatDate(selectedProject.endDate)}
                        </p>
                      </div>
                      {selectedProject.category && (
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Category:
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                            <Tag className="w-4 h-4" />
                            {selectedProject.category.map((item, index) => (
                              <span
                                key={index}
                                className="bg-gray-100 px-2 py-[2px] rounded-lg"
                              >
                                {item}
                              </span>
                            ))}
                            {/* {selectedProject.category} */}
                          </p>
                        </div>
                      )}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
