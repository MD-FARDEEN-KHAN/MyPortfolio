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
    title: "Bussiness Analyst",
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
    title: "Data Entry Specialist",
    company_name: "ARAI",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2024 - Dec 2024",
    points: [
      " Labeled and maintained traffic image datasets, including vehicles and other elements, to enhance model training efficiency.",
      "Annotated traffic data using CVAT to improve model accuracy in detecting objects within traffic environments.",
      
    ],
  },
  {
    title: "Multi Format summarizing Application",
    company_name: "Open AI",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Jan 2025",
    points: [
      "platform to summarize multiple format inputs using AI algorithms and ML models.",
      "AI techniques to enhance summary accuracy from diverse inputs.",
      "Integrated multiple ML models using Transformers to generate high-quality summaries across various formats.",
      "Tech Stack: Python, AI/ML, Flask",
    ],
  },
  {
    title: "OpenCV features App",
    company_name: "OpenCV",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2025 - Feb 2025",
    points: [
      "Application to provide real-time show case of OpenCV Applications.",
      "Developed OpenCV applications, including Face Mesh, Push-Up Counter, Virtual Mouse, and Virtual Keyboard, etc.",
      "Integrated OpenCV technology to demonstrate its real-world applications.",
      "Tech Stack: OpenCV, Machine Learning",
    ],
  },
  {
    title: "Blinkit Sales and Outlet Analysis",
    company_name: "BlinkIT",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Feb 2025",
    points: [
      "Report showcasing Total Sales, Outlet Performance, Item Category Analysis, and Customer Ratings",
      "Designed an interactive Power BI dashboard analyzing Total Sales, Number of Items, and Customer Ratings across outlet locations, sizes, and types",
      "Identified high-performing outlets, key sales drivers, and category-wise revenue distribution for strategic business insights",
      "Tech Stack: Power BI, SQL",
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
    name: "Multi Format summarizing Application",
    description:
      "AI techniques to enhance summary accuracy from diverse inputs. Integrated multiple ML models using Transformers to generate high-quality summaries across various formats",
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
    source_code_link: "https://github.com/manjunathgoli/saaraansh.git",
  },
  {
    name: "OpenCV features App",
    description:
      "Developed OpenCV applications, including Face Mesh, Push-Up Counter, Virtual Mouse, and Virtual Keyboard. Integrated OpenCV technology to demonstrate its real-world applications.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/manjunathgoli/virtual_mouse_opencv.git",
  },
  {
    name: "Blinkit Sales and Outlet Analysis",
    description:
      "Designed an interactive Power BI dashboard analyzing Total Sales, Number of Items, and Customer Ratings across outlet locations, sizes, and types",
    tags: [
      {
        name: "Power BI",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      
    ],
    image: tripguide,
    source_code_link: "https://github.com/manjunathgoli/blinkit-powerbi.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
