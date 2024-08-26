import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "YouTube Content Creator",
    company_name: "CodeMaster Victor",
    date: "2024 - Present",
    details: [
      "<span style='color: white;'>CodeMaster Victor</span>",
      "I recently launched a YouTube channel where I share my passion for technology. On my channel, I cover a wide range of tech topics, from programming tutorials to discussions on the latest industry trends.",
    ],
  },
  {
    title: "Application Developer",
    company_name: "UNIQUS",
    date: "2023 - Present",
    details: [
      "<span style='color: white;'>UNIQUS</span>.",
      "Working as an app developer at Uniqus.co for the past year, I have focused on creating and maintaining mobile applications that support the company's management systems. My role involved designing user-friendly interfaces, implementing key features for student engagement, and ensuring seamless integration with backend services."
    ],
  },
  {
    title: "Web Developer",
    company_name: "Free Lancer",
    date: "2024 - Present",
    details: [
      "<span style='color: white;'>FreeLancing</span>",
      "As a freelance web developer, I have developed numerous websites, specializing in interactive 3D experiences using Three.js. My proficiency in the MERN stack has allowed me to build robust, scalable web applications. Working with diverse clients, I have honed my ability to understand client requirements, manage projects, and deliver high-quality, innovative solutions.",
    ],
  },
  {
    title: "CEO & FOUNDER",
    company_name: "DEVELOPERS FOR SOCIETY",
    date: "2024 - Present",
    details: [
      "<span style='color: white;'>Developers For Society</span>",
      "Leading my organization, Developers For Society, has provided me with valuable experience in entrepreneurship, project management, and team leadership. By spearheading projects that address societal issues, such as the ongoing development of a women safety app, I have gained insights into social impact technology, strategic planning, and community engagement.",
    ],
  },
];

const portfolio = [
  {
    name: "School Smart Management System Mobile App",
    description:
      "Developed a mobile app for Uniqus.co to enhance the efficiency of their existing school management system. The app is tailored for student use, providing easy access to academic information, schedules, and communication tools.",
    image: oscs,
  },
  {
    name: "Three.js and MERN Stack Web Development",
    description:
      "Designed and developed multiple interactive websites using Three.js, showcasing advanced 3D graphics and animations. Skilled in the MERN stack to build dynamic, full-stack web applications.",
    image: devnotes,
  },
  {
    name: "Developers For Society - Founder and CEO",
    description:
      "Founded and lead an organization focused on creating tech solutions for societal benefits. Currently spearheading the development of a women safety app, aimed at enhancing safety and security for women in various environments..",
    image: algorithms,
  },
];

export { experiences, portfolio };

