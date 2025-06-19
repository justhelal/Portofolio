import { Metadata } from 'next'

export const siteConfig: Metadata = {
  title: 'Hazem | Software Engineer',
  description:
    'Software Engineer specializing in Asp.Net Core, Node.js, Go and TypeScript. Open to new opportunities.',
  keywords: [
    'Software Engineer',
    'Backend Software Engineer',
    'Backend Engineer',
    'Backend Developer',
    'Full Stack Developer',
    'Asp.Net Core',
    'Azure',
    'Node.js',
    'Go',
    'TypeScript',
    'JavaScript',
    'C#',
    'Problem Solving',
    'Web Development',
    'Open Source',
    'Opportunity',
  ],
  authors: [{ name: 'Hazem' }],
  creator: 'Hazem',
  publisher: 'Hazem',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.hazemhelal.net',
    siteName: "Hazem's Portfolio",
    description:
      'Software Engineer specializing in Asp.Net Core, Node.js, Go and TypeScript. Open to new opportunities.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '/og-image.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jsthelal',
    creator: '@jsthelal',
    title: 'Hazem | Software Engineer',
    description:
      'Software Engineer specializing in Asp.Net Core, Node.js, Express.js and TypeScript. Open to new opportunities.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.hazemhelal.net',
  },
  metadataBase: new URL('https://www.hazemhelal.net'),
}
