import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  weather,
  hospital,
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
    title: "ML Engineer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Researcher",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Python Programmming Intern",
    company_name: "CodeAlpha",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2024 - July 2024",
    points: [
      "Worked on real-world Python projects involving automation, data handling, and API integration.",
      "Enhanced coding efficiency and debugging skills while implementing industry best practices.",
      
    ],
  },
  {
    title: "Student Ambassador",
    company_name: "LetsUpgrade",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2024 - July 2024",
    points: [
      "Served as a Student Ambassador at LetsUpgrade, fostering a tech community and promoting learning initiatives.",
      "Organized workshops and events, engaging students in upskilling opportunities and industry-relevant programs.",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company_name: "RAM Infotech",
    icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2024 - Dec 2024",
    points: [
      "Gained hands-on experience in AI and machine learning, working on real-world projects.",
      "Developed and optimized AI models using technologies like TensorFlow and PyTorch.",
      "Enhanced problem-solving skills by implementing AI-driven solutions for various applications.",
    ],
  },
  {
    title: "Campus Lead",
    company_name: "EdVenture Park",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Oct 2025 - Present",
    points: [
      "Served as a Campus Lead at Edventure Park, representing the IT incubator and fostering student innovation.",
      "Enhanced collaboration and networking skills by working with startups, industry experts, and tech enthusiasts.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Recommendation System",
    description:
      "A Recommendation System is an AI-driven model that analyzes user behavior and preferences to suggest relevant items, such as products, movies, or content.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "NLP(Transformers)",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/MD-FARDEEN-KHAN/Recommendation-system-",
  },
  {
    name: "Speech Recogniton System",
    description:
      "Developed a real-time speech-to-text application using deep learning techniques, enabling seamless voice command execution and improved accessibility.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/MD-FARDEEN-KHAN/Speech-recognition-",
  },
  {
    name: "Jarvis AI Assistant",
    description:
      "Created a personalized virtual assistant capable of handling tasks like web search, voice commands, and reminders, offering a hands-free productivity boost.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      
    ],
    image: tripguide,
    source_code_link: "https://github.com/MD-FARDEEN-KHAN/Jarvis",
  },
  {
    name: "Stock Portfolio Tracker",
    description:
      "Designed a responsive tracker that visualizes real-time stock performance and analytics, helping users make informed investment decisions with ease.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      
    ],
    image: hospital,
    source_code_link: "https://github.com/MD-FARDEEN-KHAN/Stock-portfolio-tracker",
  },
  {
    name: "WasteX",
    description:
      "A smart React-based platform designed to streamline waste management by enabling users to report waste issues, manage society registrations, and promote cleaner, greener communities.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      
    ],
    image: weather,
    source_code_link: "https://github.com/MD-FARDEEN-KHAN/WasteX",
  },
];

export { services, technologies, experiences, testimonials, projects };
