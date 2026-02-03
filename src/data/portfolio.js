// src/data/portfolio.js

export const personalInfo = {
  name: "Joel Rizky",
  role: "Information System Student",
  campus: "UBSI",
  whatsapp: "0813-8596-5290",
  email: "joelrizkyhermawan201@gmail.com",
  desc: "Information Systems student at UBSI, highly enthusiastic about the IT world. Passionate about coding, teaching, and solving technical problems.",
};

export const skills = [
  { name: "Laravel", color: "bg-red-500" },
  { name: "PHP", color: "bg-purple-500" },
  { name: "Hardware/PC", color: "bg-gray-500" },
  { name: "Troubleshooting", color: "bg-blue-400" },
  { name: "Postman API", color: "bg-orange-500" },
  { name: "Mobile Dev", color: "bg-green-400" },
  { name: "Networking", color: "bg-yellow-400" },
  { name: "Public Speaking", color: "bg-pink-400" },
];

export const experiences = [
  {
    role: "Web Developer Teacher",
    company: "SMKN 20 Jakarta",
    period: "Oct 2025 - Jan 2026",
    desc: "Taught Full Stack Web Development (Laravel & Laragon), guided the basics of Mobile Programming, and evaluated final projects for Software Engineering students.",
    color: "bg-yellow-300",
  },
  {
    role: "Computer Technician Assistant",
    company: "PT. Ositek Komputer",
    period: "Jan 2025 - Feb 2025",
    desc: "Performed hardware/software installation and maintenance, diagnosed technical issues (viruses, networking), and conducted independent system analysis.",
    color: "bg-cyan-300",
  },
];

export const projects = [
  {
    title: "Teman Cateringg",
    desc: "Beginner Web for Catering",
    tags: ["CodeIgniter"],
    color: "bg-green-300",
    image: "/images/tmnctr.png",
  },
  {
    title: "Test 2",
    desc: "Project Test.",
    tags: ["Astro"],
    color: "bg-purple-300",
    image: "/images/test2.jpg",
  },
  {
    title: "Test 3",
    desc: "Project Test.",
    tags: ["Astro"],
    color: "bg-pink-300",
    image: "/images/test3.png",
  },
];

export const socials = {
  github: "https://github.com/Bluecode11",
  linkedin: "https://www.linkedin.com/in/joel-rizky-05a355192/",
  instagram: "https://www.instagram.com/joel_rizky1102/",
  email: personalInfo.email,
};
