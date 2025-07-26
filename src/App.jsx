import React, { useState, useEffect } from "react";

// API service for fetching all data
import { fetchAllPortfolioData } from "./services/publicDataService.js";

// Layout & Section Components
import Navbar from "./components/Layout/Navbar";
import AboutSection from "./components/Sections/AboutSection";
import SkillsSection from "./components/Sections/SkillsSection";
import ExperienceSection from "./components/Sections/ExperienceSection";
import WorkSection from "./components/Sections/WorkSection";
import EducationSection from "./components/Sections/EducationSection";
import ContactSection from "./components/Sections/ContactSection";
import Footer from "./components/Layout/Footer";

// Utility & Loading Components
import BlurBlob from "./utils/BlurBlob";
import FullScreenLoader from "./components/FullScreenLoader";

const App = () => {
  // Single loading state for the entire application
  const [isLoading, setIsLoading] = useState(true);

  // State object to hold all data fetched from the backend
  const [portfolioData, setPortfolioData] = useState({
    about: null,
    skills: [],
    projects: [],
    experiences: [],
    education: [],
    socials: [],
  });

  // useEffect hook to fetch data once when the component mounts
  useEffect(() => {
    const loadAllData = async () => {
      try {
        // Fetch all data in parallel using the service function
        const [about, skills, projects, experiences, education, socials] =
          await fetchAllPortfolioData();

        // Update the state with the fetched data
        setPortfolioData({
          about,
          skills,
          projects,
          experiences,
          education,
          socials,
        });
      } catch (error) {
        // Log any errors during the data fetching process
        console.error("Error loading portfolio data:", error);
      } finally {
        // Set loading to false once fetching is complete (on success or failure)
        setIsLoading(false);
      }
    };

    loadAllData();
  }, []); // The empty dependency array ensures this effect runs only once

  // While data is loading, display the full-screen loader
  if (isLoading) {
    return <FullScreenLoader />;
  }

  // Once data is loaded, render the main application layout
  return (
    <div className="bg-slate-50 dark:bg-[#050414] min-h-screen transition-colors duration-300">
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f02e_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f02e_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 dark:opacity-100"></div>

      <div className="relative pt-16 sm:pt-20 lg:pt-24">
        {/* Pass the fetched data down to each component as props */}
        <Navbar socials={portfolioData.socials} about={portfolioData.about} />
        <AboutSection about={portfolioData.about} />
        <SkillsSection skills={portfolioData.skills} />
        <ExperienceSection experiences={portfolioData.experiences} />
        <WorkSection projects={portfolioData.projects} />
        <EducationSection educations={portfolioData.education} />
        <ContactSection
          about={portfolioData.about}
          socials={portfolioData.socials}
        />
        <Footer socials={portfolioData.socials} about={portfolioData.about} />
      </div>
    </div>
  );
};

export default App;
