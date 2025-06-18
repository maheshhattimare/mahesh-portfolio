import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { profileImage } from "../../assets/index";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[18vw] font-sans mt-16 md:mt-24 lg:mt-32 scroll-mt-24"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Hi, I’m <span className="">Mahesh Hattimare</span>
          </h1>

          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a&nbsp;</span>
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
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m a Full-Stack Web Developer with hands-on experience in building
            responsive, scalable, and user-focused web applications.
            Specializing in the MERN stack (MongoDB, Express.js, React,
            Node.js), I also work with modern tools like Tailwind CSS, Appwrite,
            and APIs to develop clean and functional interfaces. From personal
            productivity tools to real-world automation solutions, I bring
            projects to life with strong frontend design and robust backend
            logic.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            {/* Download CV */}
            <a
              href="https://drive.google.com/drive/folders/1X5CoK5A4DFKeRGkLFQ7RJtlaVGe5pJmE?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full text-base sm:text-lg font-semibold transition duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 10px #8245ec, 0 0 20px #8245ec",
              }}
            >
              Download CV
            </a>

            {/* Hire Me*/}
            <a
              href="#contact"
              rel="noopener noreferrer"
              className="bg-white text-[#8245ec] font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out text-base sm:text-lg"
            >
              Hire Me
            </a>
          </div>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Tarun Kaushik"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
