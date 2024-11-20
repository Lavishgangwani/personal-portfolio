import {
  nitk,
  cluboard,
  cash_flow,
  portfolio,
  publiclab,
  textS,
  chargeswap,
  placeicon,
  huntly,
  comicify_ai,
  greentrust,
  devfolio,
  iNeuron,
  learnbay,
  usvisa,
  profileP,
  images,
  college_apg,
  personal_development
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiJquery,
  SiGit,
  SiMysql,
  SiSolidity,
  SiChartdotjs,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiSpacy,
  SiPandas,
  SiNumpy,
  SiKeras,
  SiMlflow,
  SiDvc,
  SiBentoml,
  SiJenkins,
  SiKubernetes,
  SiDocker,
  SiApacheairflow,
  SiYolo,
  SiAmazons3,
  SiPostgresql,
  SiSqlalchemy,
  SiMongodb,
  SiOracle,
  SiAmazonredshift,
  SiFastapi,
  SiStreamlit,
  SiMeta,
  SiApachekafka,
  SiApachespark,
  SiApachecassandra
} from "react-icons/si";

import {
  FaFlask,
  FaHardHat,
  FaRust
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1xQVK5lhDb98W6RE0cnjRElAMCDFtgWVQ/view?usp=share_link";
export const repoLink = "https://github.com/Lavishgangwani/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/lavish-gangwani";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "Chhatrapati Shahuji Maharaj University, Kanpur",
    degree: "Master of Commerce",
    duration: "April 2023 - May 2025",
    content1: "Major: Finance Management",
    content2: "Minor: Marketing Management",
  },
  {
    id: "education-2",
    icon: learnbay,
    title: "Learnbay Academy, Bangalore",
    degree: "",
    duration: "January 2023 - November 2023",
    content1: "Diploma in Advanced data Science in Artificial Intelligence and Machine Learning.",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-2",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-3",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-4",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-5",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiTensorflow,
        name: "Tensorflow",
      },
      {
        id: "f-2",
        icon: SiPytorch,
        name: "Pytorch",
      },
      {
        id: "f-3",
        icon: SiScikitlearn,
        name: "Scikit-learn",
      },
      {
        id: "f-4",
        icon: SiPandas,
        name: "Pandas",
      },
      {
        id: "f-5",
        icon: SiNumpy,
        name: "Numpy",
      },
      {
        id: "f-6",
        icon: SiSpacy,
        name: "Spacy",
      },
      {
        id: "f-7",
        icon: SiKeras,
        name: "Keras",
      },
      {
        id: "f-8",
        icon: SiYolo,
        name: "Yolo",
      },
      {
        id: "f-9",
        icon: SiSqlalchemy,
        name: "Sqlalchemy",
      },
      {
        id: "f-10",
        icon: SiFlask,
        name: "Flask",
      },
      {
        id: "f-11",
        icon: SiFastapi,
        name: "FastAPI",
      },
      {
        id: "f-12",
        icon: SiStreamlit,
        name: "Streamlit",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiApachekafka,
        name: "Kafka",
      },
      {
        id: "t-2",
        icon: SiMlflow,
        name: "ML Flow",
      },
      {
        id: "t-3",
        icon: SiDvc,
        name: "DVC",
      },
      {
        id: "t-4",
        icon: SiBentoml,
        name: "Bento ML",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: SiJenkins,
        name: "Jenkins",
      },
      {
        id: "t-8",
        icon: SiKubernetes,
        name: "Kubernetes",
      },
      {
        id: "t-9",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "t-10",
        icon: SiApacheairflow,
        name: "Airflow",
      },
      {
        id: "t-11",
        icon: SiAmazons3,
        name: "Amazon SS3",
      },
      {
        id: "t-12",
        icon: SiApachespark,
        name: "Spark",
      },
    ],
  },
  {
    title: "Databases",
    items: [
      {
        id: "d-1",
        icon: SiPostgresql,
        name: "Postgresql",
      },
      {
        id: "d-2",
        icon: SiMongodb,
        name: "Mongodb",
      },
      {
        id: "d-3",
        icon: SiOracle,
        name: "oracle",
      },
      {
        id: "d-4",
        icon: SiMysql,
        name: "Mysql",
      },
      {
        id: "d-5",
        icon: SiAmazonredshift,
        name: "Amazon Redshift",
      },
      {
        id: "d-6",
        icon: SiApachecassandra,
        name: "Cassandra",
      },
    ],
  },
];

export const experiences = [
  
  {
    organisation: "iNeuron.ai",
    logo: iNeuron,
    link: "https://averlon.ai/",
    positions: [
      {
        title: "Machine Learning Intern",
        duration: "May 2024 - September 2024",
        content: [
          {
            text: "Built a Credit Card Fraud Detection System with Apache Spark for real-time transaction analysis. Integrated a robust pipeline that scales with large volumes, significantly improving fraud detection speed and operational efficiency.",
            link: "",
          },
          {
            text: "Developed a Real-Time Data Streaming Pipeline using Apache Kafka, Spark, and Cassandra. The solution automates data ingestion, processing, and storage, ensuring scalability and reliability for high-volume streaming applications.",
            link: "",
          },
          {
            text: "Created a Chest Cancer Classification model using deep learning, achieving 94% accuracy in early detection, helping doctors identify cancer faster for better patient outcomes.",
            link: "",
          },
          {
            text: "Built an Object Detection System using YOLO, enhancing detection speed by 30% and achieving 92% precision, enabling real-time object tracking applications.",
            link: "",
          },
          {
            text: "Automated YouTube Blog content generation with CrewAI, reducing production time by 40% and boosting content delivery efficiency for creators.",
            link: "",
          },
          {
            text: "Developed a Stock Analysis tool using LlamaIndex and LangChain, improving trend prediction accuracy by 18%, providing actionable insights for better investment decisions.",
            link: "",
          },
          {
            text: "Designed an AI-powered Nutritionist app for calorie prediction, improving accuracy by 25% through advanced image processing techniques, supporting healthier dietary choices.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Learnbay",
    logo: learnbay,
    link: "https://course.learnbay.co",
    positions: [
      {
        title: "Data Science Intern",
        duration: "November 2023 - April 2024",
        content: [
          {
            text: "Designed a predictive system to identify at-risk bank customers, enabling personalized retention strategies and reducing churn by 25%, leading to improved customer satisfaction and revenue stability.",
            link: "",
          },
          {
            text: "Built an AI-driven text summarization tool using the LLaMA 3.2B model, which streamlined document analysis processes and reduced review time by 70% for professionals in academia and business.",
            link: "",
          },
          {
            text: "Engineered a multilingual voice transcription and translation system supporting over 20 languages, enhancing accessibility for diverse global audiences and enabling seamless cross-lingual communication.",
            link: "",
          },
          {
            text: "Created an intelligent US Visa application system that automated data processing and improved approval efficiency, reducing errors by 40% and increasing decision accuracy to 97%.",
            link: "",
          },
        ],
      },
    ],
  },
];

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "Pandas",
    logo: publiclab,
    repo: "pandas-dev",
    type: "pull-request",
    status: "merged",
    title:
      "Change None values to NaN in combine_first method for better handling of missing data",
    link: "https://github.com/pandas-dev/pandas/pull/59987",
    number: "#59987",
    date: "Oct 07 2024",
    linesAdded: "7",
    linesDeleted: "0",
  },
  {
    id: "os-2",
    organisation: "Pandas",
    logo: publiclab,
    repo: "pandas-dev",
    type: "pull-request",
    status: "merged",
    title: "Fix Date Parsing Issue in Arrow Parser for CSV Files",
    link: "https://github.com/pandas-dev/pandas/pull/60054",
    number: "#60054",
    date: "Oct 16 2024",
    linesAdded: "16",
    linesDeleted: "0",
  },
  {
    id: "os-3",
    organisation: "Pandas",
    logo: publiclab,
    repo: "pandas-dev",
    type: "pull-request",
    status: "merged",
    title: "Fix Incorrect Logical Operation Between Pandas DataFrame and Series",
    link: "https://github.com/pandas-dev/pandas/issues/60204",
    number: "#60204",
    date: "Nov 11 2024",
    linesAdded: "14",
    linesDeleted: "6",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Comicify.ai",
    github: "https://github.com/ayush4345/Comicify.ai",
    link: "https://comicify-ai.vercel.app/",
    image: comicify_ai,
    content:
      "Convert any academic/news/boring text into cool comic strips using GPT-3.5 and Stable Diffusion!",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiOpenai,
        name: "OpenAI"
      },
      {
        id: "icon-4",
        icon: SiGooglecloud,
        name: "Google Cloud Platform"
      },
      {
        id: "icon-5",
        icon: SiFlask,
        name: "Flask"
      },
    ],
  },
  {
    id: "project-2",
    title: "Credit Card Fraud Detection System",
    github: "https://github.com/Lavishgangwani/Credit-Card-Fraud-Detection",
    image: greentrust,
    content:
      "A real-time credit card fraud detection system leveraging Apache Spark for scalable Real time data processing. This solution automatically analyzes transaction data as it arrives, detecting fraudulent activity with machine learning models to ensure immediate alerts and minimize financial risk.",
    stack: [
      {
        id: "icon-1",
        icon: SiScikitlearn,
        name: "Scikitlearn"
      },
      {
        id: "icon-2",
        icon: SiFlask,
        name: "Flask"
      },
      {
        id: "icon-3",
        icon: SiPandas,
        name: "Pandas"
      },
      {
        id: "icon-4",
        icon: SiDvc,
        name: "DVC"
      },
      {
        id: "icon-5",
        icon: SiApachekafka,
        name: "Kafka"
      },
      {
        id: "icon-6",
        icon: SiApachespark,
        name: "Spark"
      },
    ],
  },
  {
    id: "project-3",
    title: "Chest Cancer Classification System",
    github: "https://github.com/Lavishgangwani/End-to-End-Chest-cancer-Classification-Using-MLFLOW-DVC",
    image: chargeswap,
    content:
      "This project uses deep learning techniques and transfer learning to predict adenocarcinoma, a common lung cancer, from medical images. By integrating MLflow and DVC for model and data versioning, it enables accurate, fast, and non-invasive detection, improving early diagnosis and aiding in the identification of other chest cancer types.",
    stack: [
      {
        id: "icon-1",
        icon: SiTensorflow,
        name: "TensorFlow"
      },
      {
        id: "icon-2",
        icon: SiKeras,
        name: "Keras"
      },
      {
        id: "icon-3",
        icon: SiMlflow,
        name: "MLFLOW"
      },
      {
        id: "icon-4",
        icon: SiDvc,
        name: "DVC"
      },
      {
        id: "icon-5",
        icon: SiPandas,
        name: "Pandas"
      },
    ],
  },
  {
    id: "project-4",
    title: "Samsotech Table Management System",
    github: "",
    link: "https://www.linkedin.com/posts/mittal-parth_technologysolutions-softwaredevelopment-technology-activity-6994915645066809344-WnMY?utm_source=share&utm_medium=member_desktop",
    image: placeicon,
    content:
      "Restaurant, Place, Table and realtime Reservation Management with Multi-Tenant Architecture, RBAC, SMS and Email integration for Samsotech International",
    stack: [
      {
        id: "icon-1",
        icon: SiDotnet,
        name: "Dot Net Core MVC 6"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-3",
        icon: DiMsqlServer,
        name: "MS Sql Server"
      },
      {
        id: "icon-4",
        icon: SiJquery,
        name: "jQuery"
      },
      {
        id: "icon-5",
        icon: SiTwilio,
        name: "Twillio"
      },
    ],
  },
  {
    id: "project-5",
    title: "US Visa Approval System",
    github: "https://github.com/Lavishgangwani/MLOPS-Production-Ready-Machine-Learning-Project",
    image: usvisa,
    content:
      "This is an automated solution to streamline visa application processing for U.S. immigration authorities, reducing manual effort and increasing efficiency. The system automates data extraction and analysis, enabling faster, more accurate decision-making, ultimately improving applicant experience and reducing processing times.",
    stack: [
      {
        id: "icon-1",
        icon: SiScikitlearn,
        name: "Scikitlearn"
      },
      {
        id: "icon-2",
        icon: SiPandas,
        name: "Pandas"
      },
      {
        id: "icon-3",
        icon: SiMlflow,
        name: "SiMlflow"
      },
      {
        id: "icon-4",
        icon: SiMongodb,
        name: "MongoDB"
      },
      {
        id: "icon-5",
        icon: SiStreamlit,
        name: "Streamlit"
      },
    ],
  },
  {
    id: "project-6",
    title: "Text Summarizer Chatbot",
    github: "https://github.com/Lavishgangwani/AI-Agent_Llama3.2",
    link: "https://lavishgw22.streamlit.app",
    image: textS,
    content:
      "The interactive AI chatbot using LLaMA 3.2B to provide real-time text summarization, enhancing user experience by delivering concise information through a conversational interface.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiMeta,
        name: "Meta LLaMA"
      },
      {
        id: "icon-3",
        icon: SiStreamlit,
        name: "Streamlit"
      },
    ],
  },
  {
    id: "project-7",
    title: "Huntly",
    github: "",
    link: "https://devfolio.co/projects/huntly-b5a9",
    image: huntly,
    content:
      "A cross-platform mobile application that brings people closer to the physical environment and forms meaningful connections by organising real-world Treasure Hunts for free and winning rewards. The app uses machine learning to match users and form teams of like-minded people.",
    stack: [
      {
        id: "icon-1",
        icon: SiDjango,
        name: "Django Rest Framework"
      },
      {
        id: "icon-2",
        icon: SiFlutter,
        name: "Flutter"
      },
      {
        id: "icon-3",
        icon: SiReplit,
        name: "Replit"
      },
      {
        id: "icon-4",
        icon: SiFlask,
        name: "Flask"
      },
      {
        id: "icon-5",
        icon: SiFigma,
        name: "Figma"
      },
      {
        id: "icon-6",
        icon: SiGooglemaps,
        name: "Google Maps API"
      },
    ],
  },
  {
    id: "project-8",
    title: "Cluboard",
    github: "https://github.com/mittal-parth/Cluboard",
    link: "",
    image: cluboard,
    content:
      "A full-stack web application to facilitate sharing resources in college clubs with email notifications, requests and ticketing system, and analytical dashboards.",
    stack: [
      {
        id: "icon-1",
        icon: SiDjango,
        name: "Django"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-4",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-5",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-6",
        icon: SiChartdotjs,
        name: "Chart.js"
      },
    ],
  },
  {
    id: "project-9",
    title: "Cash Flow Minimiser",
    github: "https://github.com/mittal-parth/Cash-Flow-Minmiser",
    link: "https://minimise-cash-flow.netlify.app/",
    image: cash_flow,
    content:
      "A React application to help users visualise and minimise cash flow among multiple transactions.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      }
    ],
  },
  {
    id: "project-10",
    title: "Portfolio",
    github: "https://github.com/Lavishgangwani/personal-portfolio",
    link: "https://lavishgangwani.github.io/personal-portfolio/",
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML"
      },
    ],
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "Devfolio",
    title: "Hackathon Contributor",
    duration: "December 2023 - Present",
    content: [
      {
        text: "Participated in multiple hackathons on Devfolio, working on innovative projects that solve real-world problems using cutting-edge technologies in AI, and more.",
        link: "https://devfolio.co/@Lavishgw22",
      },
      {
        text: "Contributed to various teams in hackathons, collaborating on solutions involving machine learning, data science to drive impactful change.",
        link: "https://devfolio.co/@Lavishgw22",
      }
    ],
    logo: devfolio,
  },
  {
    organisation: "School",
    title: "School Captain",
    duration: "2017 - 2019",
    content: [
      {
        text: "Led a team of students, fostering a culture of teamwork and responsibility, while organizing school events and representing the school in various leadership forums.",
        link: "",
      },
      {
        text: "Organized sports events, increasing student participation and promoting physical well-being within the school community.",
        link: "",
      },
      {
        text: "Developed and executed a mentorship program, helping juniors adjust to school life and develop leadership skills.",
        link: "",
      }
    ],
    logo: images,
  },
  {
    organisation: "College",
    title: "Sports Enthusiast",
    duration: "2019 - Present",
    content: [
      {
        text: "Consistently involved in college sports activities, especially in cricket and football, competing in intra-college tournaments.",
        link: "",
      },
      {
        text: "Promoted fitness culture among peers through organizing informal sports meetups and encouraging participation in wellness programs.",
        link: "",
      },
    ],
    logo: college_apg, 
  },
  {
    organisation: "Personal Development",
    title: "Self-Learning & Mentorship",
    duration: "2019 - Present",
    content: [
      {
        text: "Engaged in self-driven learning, focusing on AI, data science, and machine learning, while contributing to online forums and collaborating on projects.",
        link: "",
      },
      {
        text: "Mentored peers and juniors in technical subjects such as Python, data science basics, and problem-solving in hackathons.",
        link: "",
      },
    ],
    logo: personal_development,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/lavish-gangwani",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/lavishgangwani",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:lavishgangwani22@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://x.com/Lavish2210",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/lavishgangwani",
  },
];

export const aboutMe = {
  name: "Lavish Gangwani",
  tagLine: "Aspiring Machine Learning Engineer | Data Scientist | MLOps Engineer",
  intro: "I am a Machine Learning Engineer with over 1.5 years of experience in data analytics and MLOps. Proficient in Python, SQL, TensorFlow, and PyTorch, I bring expertise in building scalable AI solutions. With familiarity in Big Data technologies like Apache Spark and Kafka, I am passionate about leveraging AI to develop secure, data-driven innovations that address real-world challenges effectively."
}
