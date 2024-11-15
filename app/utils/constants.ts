import {
  RiMailLine,
  RiLinkedinLine,
  RiGithubLine,
  RiFileTextLine,
  RiGitRepositoryLine, RiTreeLine, RiTimerLine,
} from "react-icons/ri";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  tags: string[];
  publishedDate: string;
  readTime: string;
  author: string;
  link: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  description: string;
  websiteLink: string;
  endDate: string | null;
  startDate: string;
  currentlyWorking: boolean;
  technologies: string[];
}

export interface SocialLink {
  name: string;
  icon: React.ElementType;
  href: string;
}

export const projects: Project[] = [
  {
    title: "My Search Engine",
    description:
        "Developed a search engine that efficiently indexes web pages and delivers accurate search results. Focused on optimizing search algorithms and delivering relevant information.",
    technologies: ["JavaScript", "CSS", "HTML"],
    liveLink: "https://wijj9.github.io/Game_Engine/index.html",
    githubLink: "https://github.com/wijj9/Game_Engine",
  },
  {
    title: "Decrypt Sequence",
    description:
        "Solve the sequence and to get redirected to the hidden Search Engine.",
    technologies: ["JavaScript", "CSS", "HTML"],
    liveLink: "https://wijj9.github.io/Decypt_Seq/",
    githubLink: "https://github.com/wijj9/Decypt_Seq/",
  },
  {
    title: "Gamma Correction (beta version)",
    description:
        "Built a gamma correction tool that adjusts the brightness and contrast of images, allowing users to process and enhance visual data with customizable parameters.",
    technologies: ["C", "Python", "JavaScript", "HTML", "Makefile"],
    liveLink: "https://gamma-correction.onrender.com/",
    githubLink: "https://github.com/wijj9/Gamma_Correction",
  },
  {
    title: "Portfolio V1",
    description:
        "Designed and implemented a personal portfolio website to showcase projects and skills, incorporating responsive design principles and interactive elements.",
    technologies: ["JavaScript", "CSS", "HTML", "PHP"],
    liveLink: "https://wajihtarkhani.site",
    githubLink: "https://github.com/wijj9/Home_Page",
  },
  {
    title: "Password Generator",
    description:
        "Created a password generator that produces secure and customizable passwords, including options for length, character sets, and special symbols.",
    technologies: ["TypeScript", "Node.js", "NPM"],
    liveLink: "https://wijj9.github.io/Game_Engine/Home/Games/Password_Generator/index.html",
    githubLink: "https://github.com/wijj9/Game_Engine",
  },
  {
    title: "Rock Paper Scissors",
    description:
        "Developed an interactive rock-paper-scissors game with a simple interface, using JavaScript to handle game logic and random opponent choices.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    liveLink: "https://wijj9.github.io/Game_Engine/Home/Games/Rock_Paper_Scissors/index.html",
    githubLink: "https://github.com/wijj9/Game_Engine",
  },
  {
    title: "Create your Signature",
    description:
        "Implemented a web-based signature generator that allows users to create personalized digital signatures with various fonts and styles.",
    technologies: ["JavaScript", "TypeScript", "CSS"],
    liveLink: "https://wijj9.github.io/Game_Engine/Home/Games/Signature_Generator/index.html",
    githubLink: "https://github.com/wijj9/Game_Engine",
  },
  {
    title: "Subscriptions Tracker",
    description:
        "Developed a subscription tracking app to help users manage recurring subscriptions, providing features like start date, recurrence, and payment method tracking.",
    technologies: ["JavaScript", "TypeScript", "CSS"],
    liveLink: "https://wajih.site",
    githubLink: "https://github.com/wijj9/Subscriptions",
  },
  {
    title: "Task List",
    description:
        "Built a task management tool that allows users to organize, prioritize, and track tasks, featuring a simple UI for quick task creation and progress tracking.",
    technologies: ["JavaScript", "TypeScript", "CSS"],
    liveLink: "https://wijj9.github.io/TaskList",
    githubLink: "https://github.com/wijj9/Game_Engine",
  },
];


export const workExperiences: WorkExperience[] = [
  {
    company: "Brainlab AG",
    role: "IT Working Student",
    description: `
      Provided technical support by monitoring and troubleshooting IT issues. Organized and coordinated hardware supply for the integration of subsidiaries (DLM and medPhoton). Documented software functionalities on SharePoint and created tutorial videos. Optimized workflows using Adobe Acrobat Sign and developed Azure Logic Apps for Nintex migration.
    `,
    websiteLink: "https://brainlab.de",
    startDate: "October 2022",
    endDate: "March 2024",
    currentlyWorking: false,
    technologies: [
      "TypeScript",
      "Python",
      "Java",
      "Shell",
    ],
  },
  {
    company: "InterFace AG",
    role: "Frontend/Backend Development Working Student",
    description: `
      Working on developing and improving a patient portal.
    `,
    websiteLink: "https://interface.de",
    startDate: "April 2024",
    endDate: null,
    currentlyWorking: true,
    technologies: [
      "Angular",
      "Java",
      "JavaScript",
      "TypeScript",
      "Node.js",
    ],
  },
];
export const skills = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Angular",
  "Java",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Python",
  "C",
  "C++",
  "CSS",
  "Docker",
  "AWS",
  "Git",
  "Linux",
  "OOP",
];

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    icon: RiMailLine,
    href: "wajih.tarkhani.21@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: RiLinkedinLine,
    href: "https://www.linkedin.com/in/wajih-tarkhani-18542620b/",
  },
  {
    name: "GitHub",
    icon: RiGithubLine,
    href: "https://github.com/wijj9",
  },
  { name: "Resume", icon: RiFileTextLine, href: "/resume/Wajih_Lebenslauf.pdf" },
  {
    name: "Repository",
    icon: RiGitRepositoryLine, // You can choose a suitable icon
    href: "https://github.com/wijj9/MyPortfolio_V2", // Replace with your repo link
  },
  {
    name: "LinkTree",
    icon: RiTreeLine,
    href: "https://linktr.ee/wajiht",
  },
  {
    name: "Old Personal Website",
    icon: RiTimerLine,
    href: "https://wajihtarkhani.site",
  },
];
