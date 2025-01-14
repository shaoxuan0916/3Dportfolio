import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
  nextjs,
  simplicitic,
  freelancer,
  bantingcomm,
  courtsite,
  toonrole,
  tpco,
  lifeslice,
  blox,
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
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
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
    name: "Next JS",
    icon: nextjs,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend Developer (Internship)",
    company_name: "Simplicitic Innovations",
    icon: simplicitic,
    iconBg: "#E6DEDD",
    date: "July 2022 - September 2022",
    points: [
      "Developing and maintaining web applications using React.js, Redux Toolkit and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company_name: "Freelance",
    icon: freelancer,
    iconBg: "#383E56",
    date: "October 2022 - Present",
    points: [
      "Developing and maintaining web applications & e-commerce website using Nextjs, React.js, Firebase, Supabase and other related technologies.",
      "Understanding client's vision and goals to creating successful web solutions.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "EZ Chain Innovation",
    icon: freelancer,
    iconBg: "#F0F0D7",
    date: "September 2023 - December 2024",
    points: [
      "Developing and maintaining Web 2 & Web 3 applications using NextJS, NestJS, GraphQL, Ether.js, PostgreSQL, Prisma and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Blox Blockchain",
    icon: blox,
    iconBg: "#E6DEDD",
    date: "January 2025 - Present",
    points: [
      "Developing and maintaining Web 3 applications using NextJS, NestJS, Ether.js, PostgreSQL, Prisma, Metamask and other related technologies.",
      "Enhancing the product's security by implementing best practices in blockchain development and conducting regular code reviews.",

    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Life Slice",
    description:
      "LifeSlice helps users document life's journeys by organizing moments into 'slices.' Users can create timelines with text and photos, highlighting growth and memories. It also offers public and collaborative journeys for shared storytelling.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "shadcn/ui",
        color: "pink-text-gradient",
      },
    ],
    image: lifeslice,
    url: "https://app.lifeslice.pro",
  },
  {
    name: "ToonRole.ai",
    description:
      "ToonRole.ai is an interactive, story-driven platform where users can engage with AI characters in immersive narratives. Instead of simple avatars, ToonRole.ai offers a range of characters with unique backgrounds, personalities, and evolving storylines that users can explore and influence.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "text-to-speech",
        color: "pink-text-gradient",
      },
    ],
    image: toonrole,
    source_code_link: "https://toonrole.ai",
  },
  {
    name: "E-commerce website",
    description:
      "This is an E-commerce website that I built for a SME using Nextjs, Typescript and MedusaJS. It contains all the basic functions and features that an e-commerce website should have, such as Add To Cart, Check Out, Make Payment with Stripe, Check Order Details, Admin Back Office etc.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "medusajs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: tpco,
    url: "https://www.theparentcompany.com.my",
  },
  {
    name: "SME Landing Page",
    description:
      "This is the landing page that I built for a SME using Nextjs, typescript and Chakra UI. It contains all the basic information and functions that a landing page should have, such as product information, contact form and social media button, as well as some basic SEO.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: bantingcomm,
    url: "https://www.bantingcomm.com.my",
  },
];

export { services, technologies, experiences, testimonials, projects };
