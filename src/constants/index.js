import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  mongodb,
  git,
  mysql,
  nodejs,
  mobilecontact,
  donation,
  worldwise,
  php,
  laravel,
  wordpress,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Database Expert",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "WordPress",
    icon: wordpress,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Uc Yirmiki Graphic Design",
    icon: php,
    iconBg: "#383E56",
    date: "March 2022 - Present",
    points: [
      "Developing and maintaining web applications using PHP, Laravel and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Jr. Full Stack Developer",
    company_name: "Meyteknik",
    icon: wordpress,
    iconBg: "#E6DEDD",
    date: "August 2022 - August 2022",
    points: [
      "Developing WordPress-based websites with custom themes",
      "Backend development based on site requirements",
      "Implementing responsive design principles",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "Wiki Software",
    icon: php,
    iconBg: "#383E56",
    date: "June 2022 - July 2022",
    points: [
      "Learning and implementing responsive design principles through practical projects",
      "Gaining hands-on experience with MongoDB database management",
      "Learning Object-Oriented Programming (OOP) concepts using PHP and actively applying them in project development",
      "Contributing to real-world projects using modern web technologies",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Professional reference available upon request",
    name: "Mustafa Gökçen",
    designation: "Project Manager",
    company: "Uc Yirmiki Graphic Design",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    contact: "+90 532 607 72 82"
  },
  {
    testimonial: "Professional reference available upon request",
    name: "Hilal Can Yılmaz",
    designation: "Technical Supervisor",
    company: "Meyteknik",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    contact: "+90 531 698 02 45"
  },
  {
    testimonial: "Professional reference available upon request",
    name: "Emre Doruk",
    designation: "Team Lead",
    company: "Wiki Software",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    contact: "+90 531 233 24 70"
  },
];

const projects = [
  {
    name: "Corporate Web Solutions",
    description:
      "Comprehensive web development solutions including modern front-end technologies, PHP Laravel framework, SEO optimization, and custom CMS systems. Focus on performance and user experience.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: mobilecontact,
    source_code_link: "https://github.com/darkwob",
  },
  {
    name: "Custom WordPress Solutions",
    description:
      "Development of custom WordPress themes and plugins, focusing on client-specific requirements. Implementation of responsive design principles and enhanced user experience features.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: donation,
    source_code_link: "https://github.com/darkwob",
  },
  {
    name: "Advanced Database Systems",
    description:
      "Design and implementation of optimized database solutions using both SQL and NoSQL technologies. Focus on performance, scalability, and data integrity.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: worldwise,
    source_code_link: "https://github.com/darkwob",
  },
];

export { services, technologies, experiences, testimonials, projects };
