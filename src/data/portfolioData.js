// ============================================================
// portfolioData.js — All personal/portfolio content lives here.
// Update this single file to change content across the website.
// ============================================================

export const personalInfo = {
  name: "Susheel Kumar VS",
  role: "B.Tech Artificial Intelligence & Data Science Student",
  university: "REVA University, Bengaluru",
  semester: "2nd Year – 3rd Semester",
  email: "susheelvaddi07@gmail.com",
  collegeEmail: "ugcet2502444@reva.edu.in",
  phone: "8550050707",
  // Social & Resume
  github: "https://github.com/SusheelVaddi",
  linkedin: "https://www.linkedin.com/in/susheel-kumar-vs-a7a20a3b2",
  resumeLink: "#",
};

export const heroData = {
  greeting: "Hi, I'm",
  name: "Susheel Kumar VS",
  subtitle:
    "B.Tech AI & Data Science Student | Aspiring Data Scientist | Data Analyst | Full-Stack Developer",
  introduction:
    "I am a B.Tech Artificial Intelligence & Data Science student at REVA University, Bengaluru, passionate about AI, Data Science, Machine Learning, Software Development, and Web Development.",
};

export const aboutData = {
  paragraphs: [
    "I am Susheel Kumar VS, a B.Tech student specializing in Artificial Intelligence & Data Science at REVA University, Bengaluru. I am interested in Artificial Intelligence, Data Science, Machine Learning, Software Development, and Web Development.",
    "I enjoy learning new technologies and applying my knowledge through practical projects, workshops, hackathons, and collaborative activities.",
    "During my academic journey, I have worked on projects involving Artificial Intelligence, healthcare, IoT, robotics, and entrepreneurship. I am currently focused on strengthening my programming fundamentals, improving my DSA and problem-solving skills, developing deeper knowledge of Machine Learning and Data Science, and gaining practical experience through projects and internships.",
  ],
};

export const educationData = [
  {
    id: 1,
    institution: "Basavarajeshwari School and College",
    location: "Ballari",
    education: "1st Standard – 10th Standard",
    board: "ICSE",
    duration: "2022–2023",
    current: false,
  },
  {
    id: 2,
    institution: "Vasistha PU College",
    location: "Ballari",
    education: "Pre-University Course – PCMC",
    duration: "2023–2025",
    current: false,
  },
  {
    id: 3,
    institution: "REVA University",
    location: "Bengaluru",
    education: "B.Tech in Artificial Intelligence & Data Science",
    duration: "2025–Present",
    detail: "2nd Year – 3rd Semester",
    current: true,
  },
];

export const skillsData = [
  {
    category: "Programming & Web",
    icon: "code",
    skills: ["Python", "C", "Java", "HTML", "CSS"],
  },
  {
    category: "AI / Machine Learning",
    icon: "brain",
    skills: ["Artificial Intelligence", "Machine Learning", "TensorFlow"],
  },
  {
    category: "Data",
    icon: "chart",
    skills: ["Data Science", "Data Analysis", "Data Structures & Algorithms"],
  },
  {
    category: "Development",
    icon: "layers",
    skills: [
      "Full-Stack Development",
      "Software Development",
      "Web Development",
    ],
  },
  {
    category: "Version Control & Deployment",
    icon: "git",
    skills: ["Git", "GitHub", "Cloud & Deployment"],
  },
];

export const toolsData = [
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Jupyter Notebook", icon: "jupyter" },
  { name: "VS Code", icon: "vscode" },
  { name: "Antigravity", icon: "antigravity" },
  { name: "Vercel", icon: "vercel" },
];

export const projectsData = [
  {
    id: 1,
    name: "Autonomous Smart Vacuum",
    domain: "IoT, Embedded Systems & Robotics",
    description:
      "A team-based IoT and robotics project developing a smart vacuum system capable of obstacle detection and autonomous navigation.",
    technologies: [
      "Arduino Uno",
      "HC-SR04 Ultrasonic Sensor",
      "Servo Motor",
      "DC Gear Motors",
      "L293D Motor Driver",
      "Obstacle Detection",
      "Autonomous Navigation",
      "Vacuum Cleaning Mechanism",
    ],
    learned: [
      "IoT concepts",
      "Arduino programming",
      "Embedded systems",
      "Sensors and sensor data",
      "Robotics",
      "Motor control",
      "Obstacle detection",
      "Autonomous navigation",
      "Hardware and software integration",
      "Team collaboration",
      "Problem solving",
    ],
    // Replace with actual links when available
    github: "",
    demo: "",
  },
  {
    id: 2,
    name: "MediScan.AI",
    domain: "AI, Healthcare & Entrepreneurship",
    description:
      "An AI healthcare assistant using OCR and computer vision to analyze medical reports and prescriptions into simplified explanations.",
    features: [
      "AI-powered medical report analysis",
      "OCR-based information extraction",
      "AI/vision-based analysis",
      "Simplified medical explanations",
      "Local and regional language support",
      "Risk-level indicators",
      "Offline-first functionality",
      "Voice and text interaction",
      "Health information tracking",
      "Potential hospital integration",
      "Potential telemedicine integration",
    ],
    learned: [
      "Artificial Intelligence",
      "Machine Learning concepts",
      "OCR",
      "AI and computer vision applications",
      "Healthcare technology",
      "Real-world problem identification",
      "Product development",
      "User-focused solution design",
      "Market research",
      "Customer analysis",
      "Entrepreneurship",
      "Business modelling",
      "Value proposition development",
      "Team collaboration",
      "Technical presentation",
    ],
    github: "",
    demo: "",
  },
];

export const certificationsData = [
  {
    id: 1,
    title: "AI Workshop",
    issuer: "CertoMeter",
    detail: "",
  },
  {
    id: 2,
    title: "Two-Day Spring Boot Workshop",
    issuer: "REVA University",
    detail: "",
  },
  {
    id: 3,
    title: "Hackathons",
    issuer: "BugBash – Aayam (Newton School of Technology) & Xcelerate 24-Hour Hackathon (Nikshatra E-Summit 2025, BIT)",
    detail: "",
  },
  {
    id: 4,
    title: "Ignite Full (42h Coursework)",
    issuer: "Wadhwani Foundation",
    detail:
      "Ideation, Entrepreneurship, Financial Planning, Product Development",
  },
];

export const learningData = [
  "Python",
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Data Analysis",
  "Software Development",
  "Web Development",
  "Cloud & Deployment",
  "Data Structures & Algorithms",
];

export const careerGoalsData = [
  {
    title: "Data Scientist",
    description:
      "Build expertise in data analysis, machine learning, and AI to develop data-driven solutions and meaningful insights.",
    icon: "scientist",
  },
  {
    title: "Data Analyst",
    description:
      "Analyze and interpret data, identify meaningful patterns, and support better decision-making through data.",
    icon: "analyst",
  },
  {
    title: "Full-Stack Developer",
    description:
      "Develop modern and scalable web applications by building both user-friendly frontends and efficient backends.",
    icon: "developer",
  },
];

export const learningGoalsData = [
  "Build meaningful AI & Data Science projects",
  "Strengthen programming fundamentals",
  "Improve DSA and problem-solving skills",
  "Gain deeper knowledge of Machine Learning",
  "Participate in more hackathons",
  "Gain internship experience",
  "Explore real-world AI applications",
  "Build a strong professional portfolio",
  "Develop industry-ready technical skills",
];

export const languagesData = [
  { language: "English", abilities: ["Speak", "Understand", "Write"] },
  { language: "Telugu", abilities: ["Speak", "Understand"] },
  { language: "Kannada", abilities: ["Speak", "Understand"] },
  { language: "Hindi", abilities: ["Speak", "Understand"] },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
