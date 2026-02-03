
// src/data/portfolio.js

export const personalInfo = {
  name: "Joel Rizky",
  role: "Information System Student",
  campus: "UBSI",
  whatsapp: "0813-8596-5290",
  email: "joelrizkyhermawan201@gmail.com",
  desc: "Mahasiswa Sistem Informasi UBSI yang antusias di dunia IT. Suka ngoding, mengajar, dan memecahkan masalah teknis."
};

export const skills = [
  { name: "Laravel", color: "bg-red-500" },
  { name: "CodeIgniter", color: "bg-red-800" },
  { name: "PHP", color: "bg-purple-500" },
  { name: "Hardware/PC", color: "bg-gray-500" },
  { name: "Troubleshooting", color: "bg-blue-400" },
  { name: "Postman API", color: "bg-orange-500" },
  { name: "Mobile Dev", color: "bg-green-400" },
  { name: "Networking", color: "bg-yellow-400" },
  { name: "Public Speaking", color: "bg-pink-400" }
];

export const experiences = [
  {
    role: "Web Developer Teacher",
    company: "SMKN 20 Jakarta",
    period: "Okt 2025 - Jan 2026",
    desc: "Mengajar Full Stack Web Development (Laravel & Laragon), membimbing dasar Mobile Programming, serta mengevaluasi proyek akhir siswa jurusan RPL.",
    color: "bg-yellow-300"
  },
  {
    role: "Asisten Teknisi Komputer",
    company: "PT. Ositek Komputer",
    period: "Jan 2025 - Feb 2025",
    desc: "Melakukan instalasi dan pemeliharaan hardware/software, diagnosis perbaikan masalah teknis (virus, jaringan), serta analisis sistem secara mandiri.",
    color: "bg-cyan-300"
  }
];

export const projects = [
  { 
    title: "Teman Cateringg", 
    desc: "Aplikasi Web Catering dengan framework CI", 
    tags: ["Code Igniter"], 
    color: "bg-green-300",
    image: "/images/tmnctr.png" 
  },
  { 
    title: "Proyek 2", 
    desc: "Test.", 
    tags: ["TypeScript"], 
    color: "bg-purple-300",
    image: "/images/chat.jpg" 
  },
  { 
    title: "Proyek 3", 
    desc: "Test.", 
    tags: ["Astro"], 
    color: "bg-pink-300",
    image: "/images/pixel.jpg" 
  },
  { 
    title: "Proyek 4", 
    desc: "Test.", 
    tags: ["Laravel"], 
    color: "bg-blue-300",
    image: "/images/proyek4.jpg" // 
  },
  { 
    title: "Proyek 5", 
    desc: "Test.", 
    tags: ["Laravel"], 
    color: "bg-stone-300",
    image: "/images/proyek5.jpg" // 
  }

  
];

export const socials = {
  github: "https://github.com/Bluecode11",
  linkedin: "https://www.linkedin.com/in/joel-rizky-05a355192/",
  instagram: "https://www.instagram.com/joel_rizky1102/",
  email: personalInfo.email
};