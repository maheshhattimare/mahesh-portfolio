// App.jsx
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { fetchAllPortfolioData } from "./services/publicDataService.js";

import AppLayout from "./components/Layout/AppLayout";
import FullScreenLoader from "./components/Common/FullScreenLoader.jsx";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [portfolioData, setPortfolioData] = useState({
    about: null,
    skills: [],
    projects: [],
    experiences: [],
    education: [],
    socials: [],
  });

  useEffect(() => {
    const loadAllData = async () => {
      try {
        const [about, skills, projects, experiences, education, socials] =
          await fetchAllPortfolioData();

        setPortfolioData({
          about,
          skills,
          projects,
          experiences,
          education,
          socials,
        });
      } catch (error) {
        console.error("Error loading portfolio data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAllData();
  }, []);

  if (isLoading) return <FullScreenLoader />;

  return (
    <Routes>
      <Route element={<AppLayout data={portfolioData} />}>
        <Route path="/" element={<HomePage data={portfolioData} />} />
        <Route
          path="/projects"
          element={<ProjectsPage projects={portfolioData.projects} />}
        />
        <Route path="*" element={<HomePage data={portfolioData} />} />
      </Route>
    </Routes>
  );
};

export default App;
