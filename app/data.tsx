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
    skills: 'C#, C++, JavaScript, TypeScript, Python, SQL',
  },
  {
    category: 'Technologies',
    skills: '.NET Core, Entity Framework, React.js, Next.js, Tailwind CSS',
  },
  {
    category: 'Tools & Platforms',
    skills: 'Git, GitHub, Docker, Postman, Visual Studio, VS Code',
  },
  {
    category: 'Specializations',
    skills: 'Competitive Programming, Algorithm Design, Backend Architecture',
  },
]

// Education & Achievements Data
export const EDUCATION = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'Fayoum University, Egypt',
    period: 'Sept 2021 - June 2025',
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
    title: 'CineMate - Movie Recommendation System',
    href: 'https://github.com/Cinemate-GP',
    active: true,
    description:
      'Movie streaming platform with personalized recommendations and social features. Built with NextJS frontend and .NET Web API backend, featuring user activity feeds, comments, and NLP-powered review sentiment analysis.',
    technologies: ['.NET Core', 'NextJS', 'Web API', 'NLP', 'Flask', 'Azure', 'Recommendation System'],
    links: [
      {
        type: 'Source',
        href: 'https://github.com/Cinemate-GP',
        icon: <Icons.github className="size-3" />,
      },
      {
        type: 'Demo',
        href: 'https://cinemate-eosin.vercel.app',
        icon: <Icons.globe className="size-3" />,
      },
    ],
  },
  {
    title: 'Talabat APIs',
    href: 'https://github.com/justhelal/TalabatAPIs',
    active: true,
    description:
      'Integration platform API that enables vendors to manage stores, menus, and orders on the Talabat platform. Built with .NET Core and optimized with Redis caching.',
    technologies: ['.NET Core', 'C#', 'SQL Server', 'Redis'],
    links: [
      {
        type: 'Source',
        href: 'https://github.com/justhelal/TalabatAPIs',
        icon: <Icons.github className="size-3" />,
      },
    ],
  },
  {
    title: 'PlayFolio',
    href: 'https://github.com/justhelal/PlayFolio',
    active: true,
    description:
      'Responsive game catalog application with search and filtering functionality. Integrates RAWG API to display game details and ratings, optimized with code-splitting and lazy loading.',
    technologies: ['ReactJS', 'Tailwind CSS', 'RAWG API', 'JavaScript'],
    links: [
      {
        type: 'Source',
        href: 'https://github.com/justhelal/PlayFolio',
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
  {
    company: 'Google DSC Fayoum University',
    title: 'Problem-Solving Mentor',
    start: 'Feb 2023',
    end: 'May 2023',
    link: '',
    id: 'work2',
  },
  {
    company: 'Coach Academy',
    title: 'Competitive Programming Trainee',
    start: 'May 2021',
    end: 'Aug 2023',
    link: '',
    id: 'work3',
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
