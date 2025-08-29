import { Icons } from '@/components/icons'

// Animation variants and transitions
export const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

export const TRANSITION_SECTION = {
  duration: 0.3,
}

// Technical Skills Data
export const TECHNICAL_SKILLS = [
  {
    category: 'Languages',
    skills: 'C#, C++, SQL, JavaScript',
  },
  {
    category: 'Technologies',
    skills: '.NET 9, EF Core, MS SQL Server, NextJS, Tailwind CSS, RabbitMQ, MassTransit',
  },
  {
    category: 'Tools',
    skills: 'Git, GitHub, Postman, Swagger/OpenAPI, Visual Studio, VS Code, Docker',
  },
  {
    category: 'Concepts',
    skills: 'Microservices, REST APIs, OOP, Design Patterns, Data Structures & Algorithms, Databases, Problem-Solving',
  },
]

// Education & Achievements Data
export const EDUCATION = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'Fayoum University',
    period: 'Sep 2021 – Jun 2025',
    description: [
      'Core CS coursework: Programming, OOP, Data Structures & Algorithms, Discrete Math, Probability & Statistics, Databases, Software Engineering, Operating Systems, Computer Architecture, AI, Machine Learning, and Computer Networks & Security.',
      'Participated in ECPC and practiced competitive programming on LeetCode and Codeforces, sharpening problem-solving skills.',
      'Contributed to the ICPC Club by mentoring peers in algorithms and problem-solving, with a focus on competitive programming.',
    ],
  },
]

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type ExperienceDetail = {
  company: string
  role: string
  period: string
  description: string[]
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS = [
  {
    title: 'CineMate',
    href: 'https://github.com/Cinemate-GP',
    active: true,
    description:
      'Led project team as main .NET backend developer. Built a movie platform with NextJS frontend and .NET Web API backend featuring social features like follow/unfollow, activity feeds, and comments. Implemented movie recommendation system using user data and content analysis, plus NLP system for review sentiment analysis.',
    technologies: ['.NET 8', 'NextJS', 'Web API', 'NLP', 'Recommendation System'],
    image: '/static/images/CineMate.png',
    links: [
      {
        type: 'Demo',
        href: 'https://cinemate-eosin.vercel.app/',
        icon: <Icons.link className="size-3" />,
      },
      {
        type: 'Source',
        href: 'https://github.com/Cinemate-GP',
        icon: <Icons.github className="size-3" />,
      },
    ],
  },
  {
    title: 'Therapist-Patient Platform',
    href: 'https://github.com/justhelal/TherapistPlatform',
    active: true,
    description:
      'Developed two microservice APIs for therapist and patient management using Clean Architecture, EF Core, and SQL Server. Implemented event-driven communication with MassTransit and RabbitMQ for scalable, decoupled service interactions with layered architecture for maintainability.',
    technologies: ['.NET 9', 'SQL Server', 'Clean Architecture', 'MassTransit', 'RabbitMQ'],
    image: '/static/images/therapist.png',
    links: [
      {
        type: 'Source',
        href: 'https://github.com/justhelal/TherapistPlatform',
        icon: <Icons.github className="size-3" />,
      },
    ],
  },
  {
    title: 'Talabat API',
    href: 'https://github.com/justhelal/TalabatAPIs',
    active: true,
    description:
      'Developed an API platform using .NET Core to allow vendors to manage stores, menus, and orders on the Talabat system. Implemented Redis caching to boost performance and reduce redundant database calls. Designed scalable endpoints with clean architecture for maintainability.',
    technologies: ['.NET 8', 'SQL Server', 'Onion Architecture', 'Redis'],
    image: '/static/images/talabat.png',
    links: [
      {
        type: 'Source',
        href: 'https://github.com/justhelal/TalabatAPIs',
        icon: <Icons.github className="size-3" />,
      },
    ],
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Route',
    title: 'Backend Training',
    start: 'Oct 2024',
    end: 'May 2025',
    link: '',
    id: 'work1',
  },
]

// Experience Details
export const EXPERIENCE_DETAILS = [
  {
    company: 'Route',
    role: 'Backend Training',
    period: 'Oct 2024 – May 2025',
    description: [
      'Built backend services with .NET Core and C#, following Clean Architecture for maintainability and scalability.',
      'Developed RESTful APIs using ASP.NET MVC/Web API and Entity Framework Core with SQL Server.',
      'Implemented design patterns, consistent API responses, error handling, and audit logging (soft delete) to improve reliability.',
    ],
    id: 'exp1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: '',
    description:
      '',
    link: '',
    uid: '',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/justhelal',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/jsthelal',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/hazemhelal',
  },
  {
    label: 'LeetCode',
    link: 'https://leetcode.com/u/hazemhelal',
  },
  {
    label: 'CV',
    link: '/resume.pdf',
  },
]

export const EMAIL = 'hazemhelal.se@gmail.com'
