import Navbar from "./components/Layout/Navbar";
import AboutSection from "./components/Sections/AboutSection";
import SkillsSection from "./components/Sections/SkillsSection";
import ExperienceSection from "./components/Sections/ExperienceSection";
import WorkSection from "./components/Sections/WorkSection";
import EducationSection from "./components/Sections/EducationSection";
import ContactSection from "./components/Sections/ContactSection";
import Footer from "./components/Layout/Footer";
import BlurBlob from "./utils/BlurBlob";

const App = () => {
  return (
    <div className="bg-slate-50 dark:bg-[#050414] min-h-screen transition-colors duration-300">
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f02e_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f02e_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 dark:opacity-100"></div>

      <div className="relative pt-16 sm:pt-20 lg:pt-24">
        <Navbar />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <WorkSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
