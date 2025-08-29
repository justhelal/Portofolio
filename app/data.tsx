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
    category: 'Programming Languages',
    skills: 'C++, C#, JavaScript, TypeScript',
  },
  {
    category: 'Frameworks & Tools',
    skills: '.NET Core, Entity Framework Core, Next.js, RabbitMQ, Redis, Azure, Git, GitHub, Postman',
  },
  {
    category: 'Databases',
    skills: 'SQL Server, SQL Lite, MySQL',
  },
  {
    category: 'Technical Skills',
    skills: 'RESTful APIs, Dependency Injection, JWT Authentication, Microservices, Data Structures & Algorithms, Software Engineering Principles',
  },
  {
    category: 'Soft Skills',
    skills: 'Team Leadership, Mentoring, Collaboration, Problem-Solving',
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
    title: 'CineMate (Graduation Project)',
    href: 'https://github.com/Cinemate-GP',
    active: true,
    description:
      'Led a team to achieve a full mark for a personalized movie recommendation platform, overseeing backend (.NET 8) and frontend (Next.js) development. Developed .NET Web API backend, designing entities, seeding a database with 87,000 movies, and integrating external APIs for real-time movie updates. Enhanced Next.js frontend with streaming features, social media components (feeds, followers), and UI improvements, transforming the project to professional quality. Implemented a machine learning hybrid recommendation system and scraped data to populate the platform, deployed on Azure.',
    technologies: ['.NET 8', 'Next.js', 'Azure', 'Machine Learning'],
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
    title: 'Therapist Platform',
    href: 'https://github.com/justhelal/TherapistPlatform',
    active: true,
    description:
      'Built microservices using .NET 9 and Entity Framework Core with SQL Server, enabling therapist-patient interactions. Implemented event-driven communication using RabbitMQ for efficient service integration.',
    technologies: ['.NET 9', 'SQL Server', 'RabbitMQ'],
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
      'Developed CRUD APIs for store, menu, and order management using .NET 8, with Dependency Injection, Controllers, and JWT authentication. Managed data with EF Core, using DTOs & AutoMapper, and optimized performance with Redis caching and async queries. Enhanced APIs with Swagger documentation, pagination, filtering, and scalable middleware for maintainability.',
    technologies: ['.NET 8', 'SQL Server', 'Redis'],
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
    title: 'Backend Trainee',
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
    role: 'Backend Trainee',
    period: 'Oct 2024 – May 2025',
    description: [
      'Developed backend services using .NET Core and C#, creating functional and maintainable code through practical projects.',
      'Built and tested RESTful APIs with ASP.NET MVC and Entity Framework Core, integrating with SQL Server to manage data effectively.',
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
