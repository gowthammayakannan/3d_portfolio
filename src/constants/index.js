import {
  burgerwebsite,
  blogapplication,
  portfolio

} from "../assets/images";
import {
    css,
    express,
    git,
    github,
    html,
    javascript,
    nodejs,
    react,
    redux,
    tailwindcss,
    typescript,
    contact,
    python,
    pgsql,
    linkedin

} from "../assets/icons";

export const skills = [
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },

  
  {
    imageUrl: javascript,
    name: "javaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "css",
    type: "Frontend",
  },

  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: pgsql,
    name: "pgsql",
    type: "Database",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
];
export const experiences = [
  {
    title: "Full Stack Developer",
    companyName: "Personal",
    icon: burgerwebsite,
    iconBg: "#b7e4c7",
    date: "May 2024 - June 24",
    points: [
      "Developed an interactive burger builder allowing users to customize burgers with real-time visual feedback.",
      "Managed ingredient state using arrays and implemented direct DOM manipulation for fast, responsive updates.",
      "Applied functional programming with map, filter, and reduce to handle ingredient logic, pricing, and stock.",
      "Utilized modern ES6+ features like arrow functions, destructuring, and template literals for clean, modular code."
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "Personal",
    icon: blogapplication,
    iconBg: "#accbe1",
    date: "June 2024 - July 2024",
    points: [
      "Built a complete blog application with user-friendly features including login, signup, and full CRUD operations for managing blog posts efficiently.",
      "Designed the backend using Object-Oriented Programming concepts to ensure clean, modular, and scalable code architecture.",
      "Implemented functionality to export blog posts into Excel and Word files, allowing users to save and share content easily.",
      "Added dynamic search and filtering capabilities to help users quickly locate posts, enhancing overall usability and navigation.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "Personal",
    icon: portfolio,
    iconBg: "#accba3",
    date: "July 2024 - Aug 2024",
    points: [
      "Developed an interactive 3D portfolio website using Three.js and React, featuring a unique animated fox character to engage visitors and highlight technical skills.",
      "Implemented a responsive design ensuring seamless user experience across various devices and screen sizes, enhancing accessibility and user engagement.",
      "Integrated a dynamic skill timeline and a contact form powered by EmailJS, facilitating direct communication and showcasing professional growth effectively.",
      "Employed modern web technologies and libraries to create smooth animations and transitions, resulting in an immersive and visually appealing user interface.",
    ],
  },
  
];
export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/gowthammayakannan",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/gowtham-mayakannan-1a9177248/",
  },
];

export const projects = [
  {
    iconUrl: portfolio,
    theme: "btn-back-blue",
    name: "3d portfolio",
    description:
    "Developed a 3D portfolio using React and Three.js with an animated fox for a standout visual experience. Designed an interactive timeline to showcase skills and ensured full responsiveness across devices. Integrated a real-time contact form using EmailJS for smooth and direct user communication.",
    link: "",
  },
  {
    iconUrl: burgerwebsite ,
    theme: "btn-back-blue",
    name: "Burger Website",
    description:
    "Developed an interactive burger builder with live ingredient customization and visual feedback.Managed state efficiently using arrays and DOM manipulation for responsive updates. Applied functional programming to handle pricing, logic, and inventory management. Wrote clean, modular code using modern ES6+ features for better readability and structure.",
    link: "",
  },
  {
    iconUrl: blogapplication,
    theme: "btn-back-green",
    name: "Blog Application",
    description:
      "Built a full-stack blog platform using OOP principles, supporting full CRUD operations and responsive design. Implemented secure authentication with login, signup, and session management for user access. Added content export to Excel/Word and real-time search for enhanced usability and navigation.",
    link: "",
  },

];

