// Skills Section Logo's
import {
  htmlLogo,
  cssLogo,
  javascriptLogo,
  reactjsLogo,
  reduxLogo,
  nextjsLogo,
  tailwindcssLogo,
  materialuiLogo,
  bootstrapLogo,
  nodejsLogo,
  expressjsLogo,
  mysqlLogo,
  mongodbLogo,
  firebaseLogo,
  cLogo,
  javaLogo,
  typescriptLogo,
  gitLogo,
  githubLogo,
  vscodeLogo,
  postmanLogo,
  figmaLogo,
  netlifyLogo,
  vercelLogo,

  //company logo
  genxcoders,

  //college logo
  ghrce,

  // project images
  ageCalculator,
  blogstack,
  characterCounter,
  movieGuide,
  randomPassword,
  randomQuote,
  rockPaper,
  temperatureConvertor,
  tipCalculator,
  todo,
} from "../assets/index";

import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

// nav links
export const menuItems = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
];

// skills
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

// experience
export const experiences = [
  {
    id: 0,
    img: genxcoders,
    role: "Web Developer Intern",
    company: "GenXCoders Pvt. Ltd.",
    date: "June 2024 – December 2024",
    desc: "Completed a 6-month Web Development internship, where I was involved in designing responsive web pages, building user-friendly interfaces, and integrating backend systems using PHP and CouchCMS. Contributed to real-world projects, including a college website clone and a smart review system. This role allowed me to gain hands-on experience in full-stack development and enhance my understanding of both frontend and backend technologies.",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "PHP",
      "MySQL",
      "CouchCMS",
    ],
  },
];

// education
export const education = [
  {
    id: 0,
    img: ghrce,
    school: "G H Raisoni College of Engineering, Nagpur",
    date: "Jan 2021 – May 2025",
    grade: "7.36 CGPA",
    desc: "Pursuing my Bachelor of Technology (B.Tech) in Artificial Intelligence at G H Raisoni College of Engineering, Nagpur. My coursework has included subjects such as Data Structures and Algorithms, Web Development, and Database Management Systems. I have also participated in hands-on projects that bridge theoretical learning with real-world applications, strengthening both my technical skills and problem-solving abilities.",
    degree: "Bachelor of Technology – B.Tech (Artificial Intelligence)",
  },
  {
    id: 1,
    img: "",
    school: "Wainganga Junior College, Pauni",
    date: "Jun 2019 – Feb 2020",
    grade: "80.46%",
    desc: "Completed my Higher Secondary Certificate (HSC) in Science from Wainganga Junior College, Pauni under the Maharashtra State Board. The curriculum developed my foundational knowledge in subjects like Physics, Chemistry, and Mathematics.",
    degree: "Higher Secondary Certificate – HSC (Science)",
  },
  {
    id: 2,
    img: "",
    school: "Z. P. High School, Asgaon",
    date: "Jun 2017 – Mar 2018",
    grade: "83.40%",
    desc: "Completed my Secondary School Certificate (SSC) from Z. P. High School, Asgaon under the Maharashtra State Board. My academic focus was on general science and mathematics.",
    degree: "Secondary School Certificate – SSC (Science)",
  },
];

// projects
export const projects = [
  {
    id: 0,
    title: "BlogStack",
    description:
      "A simple and interactive blog platform built with React. BlogStack enables users to create, edit, and manage blog posts using a real-time rich-text editor and secure user authentication.",
    image: blogstack,
    tags: [
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Appwrite",
      "TinyMCE",
      "React Hook Form",
    ],
    github: "https://github.com/maheshhattimare/BlogStack",
    webapp: "https://blogstack-five.vercel.app",
  },
  {
    id: 1,
    title: "To-Do App",
    description:
      "A responsive and efficient task management application built with React. It leverages the Context API and LocalStorage to manage and persist tasks seamlessly.",
    image: todo,
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Context API",
      "LocalStorage",
    ],
    github: "https://github.com/maheshhattimare/react-todo-app",
    webapp: "https://maheshhattimare.github.io/react-todo-app/",
  },
  {
    id: 2,
    title: "Movie Guide App",
    description:
      "An API-powered application that allows users to search for any movie and view its details, including ratings and synopsis, fetched in real-time.",
    image: movieGuide,
    tags: ["HTML", "CSS", "JavaScript", "OMDb API"],
    github: "https://github.com/maheshhattimare/movie-guide-app",
    webapp: "https://maheshhattimare.github.io/movie-guide-app/",
  },
  {
    id: 3,
    title: "Random Quote Generator",
    description:
      "A lightweight application that displays a new inspirational quote on each interaction, powered by a public quote API.",
    image: randomQuote,
    tags: ["HTML", "CSS", "JavaScript", "Quote API"],
    github: "https://github.com/maheshhattimare/random-quote-generator",
    webapp: "https://maheshhattimare.github.io/random-quote-generator/",
  },
  {
    id: 4,
    title: "Tip Calculator",
    description:
      "A clean and intuitive application to calculate tips and split bills among multiple people. It dynamically adjusts based on total bill and user input.",
    image: tipCalculator,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/maheshhattimare/tip-calculator",
    webapp: "https://maheshhattimare.github.io/tip-calculator/",
  },
  {
    id: 5,
    title: "Real-Time Character Counter",
    description:
      "A lightweight tool that counts characters and words in real-time as the user types. Useful for social media posts, text limits, and writing tools.",
    image: characterCounter,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/maheshhattimare/realtime-character-counter",
    webapp: "https://maheshhattimare.github.io/realtime-character-counter/",
  },
  {
    id: 6,
    title: "Rock Paper Scissors Game",
    description:
      "A fun and interactive Rock-Paper-Scissors game where the user plays against the computer. The computer generates a random move each time.",
    image: rockPaper,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/maheshhattimare/rock-paper-scissors-game",
    webapp: "https://maheshhattimare.github.io/rock-paper-scissors-game/",
  },
  {
    id: 7,
    title: "Temperature Converter",
    description:
      "A simple application that converts temperatures between Celsius, Fahrenheit, and Kelvin in real time with a user-friendly interface.",
    image: temperatureConvertor,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/maheshhattimare/temperature-converter",
    webapp: "https://maheshhattimare.github.io/temperature-converter/",
  },
  {
    id: 8,
    title: "Age Calculator",
    description:
      "An interactive age calculator that allows users to input their date of birth and instantly view their age in years, months, and days.",
    image: ageCalculator,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/maheshhattimare/age-calculator",
    webapp: "https://maheshhattimare.github.io/age-calculator/",
  },
  {
    id: 9,
    title: "Random Password Generator",
    description:
      "A responsive password generator that allows users to create secure passwords, customize their length and complexity, and copy them easily.",
    image: randomPassword,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/maheshhattimare/random-password-generator",
    webapp: "https://maheshhattimare.github.io/random-password-generator/",
  },
];

// social media
export const socials = [
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/maheshhattimare",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/maheshhattimare/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/maheshattimare/",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    link: "https://twitter.com/MaheshHattimare",
  },
];
