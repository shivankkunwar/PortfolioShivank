export const projectsAll = [
  {
    title: "Quix",
    description:
      "An AI-powered, chat-style quiz builder that instantly turns any topic or uploaded text into a trustworthy, conversational 5-question quiz. Quix focuses on zero-friction guest access (localStorage user IDs), BYOK support for Gemini, an OpenRouter fallback, rich Framer-quality motion, quiz history, and a privacy-first approach where users can store quizzes locally or in the cloud.",
    image: "/assets/projects/quix.gif", // replace with your GIF
    start: "August 2025",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/quix", // replace with repo URL
      hosted: "https://quizx-5z2.pages.dev/" // replace with your hosted URL (workers or domain)
    },
    tech: [
      "Next.js ",
      "React + React Query (Tanstack) ",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Cloudflare"
    ]
  },
  {
  title: "Storm - AI Debate Platform",
  description:
    "A privacy-first, multi-LLM debate platform where users direct conversations between two customizable AI personas. The app features client-side AI orchestration, a rich persona editor, and a client-side vector memory system for contextual continuity.",
  image: "/Assets/Projects/storm.gif", // Suggestion: Create a compelling GIF of the UI
  start: "june 2025", // Adjust as needed
  end: "",  // Adjust as needed
  links: {
    github: "https://github.com/shivankkunwar/storm", // Replace with your actual repo link
    hosted: "https://storm.shvnk.in/", // Replace with your actual hosted link
  },
  tech: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "NextAuth.js",
    "Drizzle ORM",
    "LangChain.js",
    "Tailwind CSS",
    
  ],
},
  {
    title: "MoviePedia - IMDB Clone",
    description:
      "A full-stack IMDB-like web application built with React, Node.js, and MongoDB. The app allows users to browse, search, and manage movies with features like CRUD operations, TMDB API integration, real-time search, and responsive design.",
    image: "/Assets/Projects/moviepedia",
    start: "",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/moviepedia.JPG", 
      hosted: "https://moviepedia-imdb-clone.vercel.app/", 
    },
    tech: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "TMDB API",
    ],
  },
  
  {
    title: "Apple Watch Studio Clone",
    description: "A pixel-perfect recreation of the Apple Watch Studio experience, featuring dynamic customization of watch sizes, cases, and bands with real-time preview updates and smooth animations.",
    image: "/Assets/Projects/apple.gif",
    start: "",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/Apple-watch-Studio",
      hosted: "https://apple-watch-studio-nine.vercel.app/",
    },
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Framer Motion"
    ],
  },
  {
    title: "Clever Invoice",
    description:
      "An invoice management system using React.js, ShadCN, TailwindCSS, Redux Toolkit, and Google's Gemini AI for automated data extraction. Features include AI data parsing, an interactive dashboard, and real-time synchronization.",
    image: "/Assets/Projects/ai-invoicer.gif",
    start: "",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/CleverInvoice",
      hosted: "https://clever-invoice-ai.vercel.app/",
    },
    tech: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Google Gemini AI",
      "Framer Motion",
    ],
  },
  {
    title: "Form genius",
    description:
      "This Form Builder Application is a dynamic, user-friendly tool built with Next.js and Tailwind CSS. It allows users to create custom forms, manage form submissions, and preview forms in real-time.",
    image: "/Assets/Projects/formm.gif",
    start: "",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/FormGenius",
      hosted: "https://form-genius-m4ra.vercel.app/",
    },
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Form genius - React native - android",
    description:
      "A React Native mobile application for creating and managing forms with multiple question types, image support, and response collection.",
    image: "/Assets/Projects/formG.gif",
    start: "",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/formGenius-native2",
      hosted: "https://github.com/shivankkunwar/FormGenius-backend",
    },
    tech: [
      "React native",
      "TypeScript",
      "React Native Paper",
    ],
  },
  {
    title: "Gemini Document Processor",
    description:
      "A document processing app powered by Google's Generative AI (Gemini), supporting PDF, image, and Excel formats with custom prompts for flexible data extraction.",
    image: "/Assets/Projects/processor.JPG",
    start: "",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/Gemini-Document-processor",
      hosted: "https://gemini-document-processor.vercel.app/",
    },
    tech: ["React", "TypeScript", "Google Generative AI", "shadcn/ui", "XLSX"],
  },
  {
    title: "HiveSocial",
    description:
      "A small Social Media Web App functional UI developed using React JS, TypeScript, and Ant Design libraries. Features include user authentication, post creation/viewing, liking and bookmarking posts, commenting, and profile updates.",
    image: "/Assets/Projects/hiveSocial.gif", // Adjusted path
    start: "",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/HiveSocial",
      hosted: "https://hive-social.vercel.app/",
    },
    tech: ["React", "TypeScript", "Ant Design"],
  },
  {
    title: "Healthy Report",
    description:
      "The Health Report Application, built with React, Express.js, MongoDB, and Auth0, simplifies health reporting through user-friendly injury submissions, body map integration, and secure data management.",
    image: "/Assets/Projects/HealthReport.png", // Adjusted path
    start: "",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/Healthy-Report-UI",
      hosted: "https://healthy-report-ui.vercel.app/",
      backLink: "https://github.com/shivankkunwar/Healthy-Report-API-Backend",
    },
    tech: ["React", "Express.js", "MongoDB", "Auth0"],
  },
  {
    title: "MiniMail",
    description:
      "A simple email client built with React that allows users to view, filter, and manage emails. The application fetches email data from a mock API and provides a user-friendly interface for navigating through emails.",
    image: "/Assets/Projects/minimail.JPG", // Adjusted path
    start: "",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/MiniMail",
      hosted: "https://mini-mail.vercel.app/",
    },
    tech: ["React", "TypeScript", "CSS", "Custom Hooks"],
  },
  {
    title: "CommuniKate",
    description:
      "A real-time chat application using the MERN stack and Socket.IO, featuring user authentication, friend management, and chat functionality.",
    image: "/Assets/Projects/chatApp.gif", // Adjusted path
    start: "",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/Communikate-UI",
      hosted: "https://communikate-ui.vercel.app/",
      backLink: "https://github.com/shivankkunwar/Communikate-server",
    },
    tech: ["React", "Node.js", "Socket.IO", "MongoDB"],
  },
  {
    title: "Figma plugin-Node comparator",
    description:
      "A Figma Plugin that facilitates node comparison, allowing users to inspect and compare the properties of two Figma nodes, enhancing design collaboration and workflow efficiency.",
    image: "/Assets/Projects/figmaCompare.png", // Adjusted path
    start: "",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/Node-comparator",
      hosted:
        "https://www.figma.com/community/plugin/1295738909015351601/node-comparator-plugin-shivank",
    },
    tech: ["Figma Plugin", "JavaScript", "Node.js"],
  },
  {
    title: "Http-server",
    description:
      "A custom JavaScript HTTP server that handles port binding, GET requests (200 and 404 responses), concurrent connections, file fetching, and posting data.",
    image: "/Assets/Projects/web-server.png", // Adjusted path
    start: "",
    end: "",
    links: {
      github:
        "https://github.com/shivankkunwar/codecrafters-http-server-javascript",
      hosted:
        "https://github.com/shivankkunwar/codecrafters-http-server-javascript",
    },
    tech: ["JavaScript"],
  },
  {
    title: "Faced",
    description:
      "A full-stack Face Detection Web Application using React, TypeScript, Node.js, PostgreSQL, and JavaScript, integrated with the Face API JavaScript API for face detection.",
    image: "/Assets/Projects/Faced.png", // Adjusted path
    start: "",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/FaceD",
      hosted: "https://github.com/shivankkunwar/FaceD",
    },
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "Todo App",
    description:
      "A Todo app using React.js and Firebase, replicating the popular Todoist app with CRUD operations for task management.",
    image: "/Assets/Projects/TodoApp.png", // Adjusted path
    start: "",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/TodoApp",
      hosted: "https://todo-app-vfjn.vercel.app/",
    },
    tech: ["React", "Firebase"],
  },
  {
    title: "Movie Board",
    description: "RESTful Movie Review API using Java Spring and MongoDB.",
    image: "/Assets/Projects/JavaAPI.png", // Adjusted path
    start: "",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/MovieBoard",
      hosted: "https://github.com/shivankkunwar/MovieBoard",
    },
    tech: ["Java", "Spring", "MongoDB"],
  },
  {
    title: "Searches",
    description:
      "A React app featuring a search bar and dynamic cards, swiftly filtering and displaying content as you type.",
    image: "/Assets/Projects/Searches.png", // Adjusted path
    start: "",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/Searches",
      hosted: "https://shivankkunwar.github.io/Searches/",
    },
    tech: ["React"],
  },
  {
    title: "Chat App Frontend",
    description:
      "A WhatsApp frontend clone using React and Redux. Features include message addition, clickable elements, scrollable chats, and displaying the last message on the sidebar.",
    image: "/Assets/Projects/ChatAPP.png", // Adjusted path
    start: "",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/chatApp",
      hosted: "https://chat-app-pied-three.vercel.app/",
    },
    tech: ["React", "Redux"],
  },
  {
    title: "TinyProjects",
    description:
      "A curated collection of bite-sized React applications and components. Includes sliders, accordions, search bars, counters, and a blog list.",
    image: "/Assets/Projects/Tiny.png", // Adjusted path
    start: "",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/ReactPractice",
      hosted: "https://react-practice-drab.vercel.app/",
    },
    tech: ["React"],
  },
  {
    title: "Weather APP",
    description:
      "Enter any city name to get real-time weather information using JavaScript, HTML, and CSS.",
    image: "/Assets/Projects/Weather.png", // Adjusted path
    start: "",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/weatherCheck",
      hosted: "https://whatisweather.netlify.app/",
    },
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Text Editor",
    description:
      "A text editor built with JavaScript, HTML, and CSS. Allows formatting like italic, bold, and text alignment.",
    image: "/Assets/Projects/TextEdit.png", // Adjusted path
    start: "",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/texteditor",
      hosted: "https://changetext.netlify.app/",
    },
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Budget Handler",
    description:
      "A budget app that lets you track income and expenses, add descriptions, and watch your total income and expenses being calculated.",
    image: "/Assets/Projects/Budget.png", // Adjusted path
    start: "",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/budgethandler.github.io",
      hosted: "https://budgethandler-github-io.vercel.app/r",
    },
    tech: ["JavaScript"],
  },
];

export const projectWall = [
  {
    title: "Quix",
    description:
      "An AI-powered, chat-style quiz builder that instantly turns any topic or uploaded text into a trustworthy, conversational 5-question quiz. Quix focuses on zero-friction guest access (localStorage user IDs), BYOK support for Gemini, an OpenRouter fallback, rich Framer-quality motion, quiz history, and a privacy-first approach where users can store quizzes locally or in the cloud.",
    image: "/assets/projects/quix.gif", // replace with your GIF
    start: "August 2025",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/quix", // replace with repo URL
      hosted: "https://quizx-5z2.pages.dev/" // replace with your hosted URL (workers or domain)
    },
    tech: [
      "Next.js ",
      "React + React Query (Tanstack) ",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Cloudflare"
    ]
  },
  {
  title: "Storm - AI Debate Platform",
  description:
    "A privacy-first, multi-LLM debate platform where users direct conversations between two customizable AI personas. The app features client-side AI orchestration, a rich persona editor, and a client-side vector memory system for contextual continuity.",
  image: "/Assets/Projects/storm.gif", // Suggestion: Create a compelling GIF of the UI
  start: "june 2025", // Adjust as needed
  end: "",  // Adjust as needed
  links: {
    github: "https://github.com/shivankkunwar/storm", // Replace with your actual repo link
    hosted: "https://storm.shvnk.in/", // Replace with your actual hosted link
  },
  tech: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "NextAuth.js",
    "Drizzle ORM",
    "LangChain.js",
    "Tailwind CSS",
 
  ],
},
  {
    title: "Clever Invoice",
    description:
      "An invoice management system using React.js, ShadCN, TailwindCSS, Redux Toolkit, and Google's Gemini AI for automated data extraction. Features include AI data parsing, an interactive dashboard, and real-time synchronization.",
    image: "/Assets/Projects/ai-invoicer.gif",
    start: "November 2024",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/CleverInvoice",
      hosted: "https://clever-invoice-ai.vercel.app/",
    },
    tech: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Google Gemini AI",
      "Framer Motion",
    ],
  },
  
  {
    title: "MoviePedia - MERN",
    description:
      "A full-stack IMDB-like web application built with React, Node.js, and MongoDB. The app allows users to browse, search, and manage movies with features like CRUD operations, TMDB API integration, real-time search, and responsive design.",
    image: "/Assets/Projects/moviepedia.JPG",
    start: "January 2025",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/MoviePedia", 
      hosted: "https://movie-pedia-psi.vercel.app/", 
    },
    tech: [
      "React.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "JWT",
      "TMDB API",
    ],
  },
   {
    title: "Form genius",
    description:
      "This Form Builder Application is a dynamic, user-friendly tool built with Next.js and Tailwind CSS. It allows users to create custom forms, manage form submissions, and preview forms in real-time.",
    image: "/Assets/Projects/formm.gif",
    start: "December 2024",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/FormGenius",
      hosted: "https://form-genius-m4ra.vercel.app/",
    },
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "HiveSocial",
    description:
      "A small Social Media Web App functional UI developed using React JS, TypeScript, and Ant Design libraries. Features include user authentication, post creation/viewing, liking and bookmarking posts, commenting, and profile updates.",
    image: "/Assets/Projects/hiveSocial.gif", // Adjusted path
    start: "January 2024",
    end: "2024",
    links: {
      github: "https://github.com/shivankkunwar/HiveSocial",
      hosted: "https://hive-social.vercel.app/",
    },
    tech: ["React", "TypeScript", "Ant Design", "Jest", "Cypress", "CI/CD"],
  },
  {
    title: "Healthy Report",
    description:
      "The Health Report Application, built with React, Express.js, MongoDB, and Auth0, simplifies health reporting through user-friendly injury submissions, body map integration, and secure data management.",
    image: "/Assets/Projects/HealthReport.png", // Adjusted path
    start: "October 2023",
    end: "November 2023",
    links: {
      github: "https://github.com/shivankkunwar/Healthy-Report-UI",
      hosted: "https://healthy-report-ui.vercel.app/",
      backLink: "https://github.com/shivankkunwar/Healthy-Report-API-Backend",
    },
    tech: ["React", "Express.js", "MongoDB", "Auth0"],
  },
  {
    title: "Apple Watch Studio Clone",
    description: "A pixel-perfect recreation of the Apple Watch Studio experience, featuring dynamic customization of watch sizes, cases, and bands with real-time preview updates and smooth animations.",
    image: "/Assets/Projects/apple.gif",
    start: "December 2024",
    end: "Jan 2025",
    links: {
      github: "https://github.com/shivankkunwar/Apple-watch-Studio",
      hosted: "https://apple-watch-studio-nine.vercel.app/",
    },
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Framer Motion"
    ],
  },
  {
    title: "Rereload",
    description:
      "A lightweight Node.js package that watches a specified folder for file changes and automatically restarts a server script when changes are detected.",
    image: "/Assets/Projects/rereload.JPG", // Adjusted path
    start: "september 2024",
    end: "2024",
    links: {
      github: "https://github.com/shivankkunwar/Rereload",
      hosted: "https://www.npmjs.com/package/rereload",
      backLink: "https://github.com/shivankkunwar/Healthy-Report-API-Backend",
    },
    tech: ["Javascript", "npm package"],
  },
   {
    title: "Gemini Document Processor",
    description:
      "A document processing app powered by Google's Generative AI (Gemini), supporting PDF, image, and Excel formats with custom prompts for flexible data extraction.",
    image: "/Assets/Projects/processor.JPG",
    start: "November 2024",
    end: "",
    links: {
      github: "https://github.com/shivankkunwar/Gemini-Document-processor",
      hosted: "https://gemini-document-processor.vercel.app/",
    },
    tech: ["React", "TypeScript", "Google Generative AI", "shadcn/ui", "XLSX"],
  },
];
