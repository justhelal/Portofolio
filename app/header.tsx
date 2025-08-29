'use client'

import { Icons } from '@/components/icons'
import Link from 'next/link'
import Image from 'next/image'
import { Copy, Check, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

import { usePathname } from 'next/navigation'
import { useState } from 'react'

const socialLinks = [
	{
		href: 'https://github.com/justhelal',
		icon: <Icons.github className="w-5 h-5" />,
		label: 'GitHub',
	},
	{
		href: 'https://twitter.com/jsthelal',
		icon: <Icons.x className="w-5 h-5" />,
		label: 'Twitter',
	},
	{
		href: 'https://www.linkedin.com/in/hazemhelal',
		icon: <Icons.linkedin className="w-5 h-5" />,
		label: 'LinkedIn',
	},
	{
		href: 'https://leetcode.com/u/hazemhelal',
		icon: <Icons.globe className="w-5 h-5" />,
		label: 'LeetCode',
	},
]

export function Header() {
	const pathname = usePathname()
	const [copied, setCopied] = useState(false)
	const isBlogPost = pathname.startsWith('/blog/')

	const handleCopy = () => {
		const fullUrl = window.location.href
		navigator.clipboard.writeText(fullUrl)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<header className="mb-16 sm:mb-20 lg:mb-24">
			<motion.div
				className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				{/* Content */}
				<div className="flex-1 min-w-0 order-2 sm:order-1">
					{/* Name and Title */}
					<div className="mb-5">
						<h1 className="font-bold text-zinc-900 dark:text-zinc-100 text-3xl sm:text-4xl leading-tight tracking-tight">
							Hazem Helal
						</h1>

						<h2 className="text-zinc-600 dark:text-zinc-400 text-lg sm:text-xl font-medium mt-1">
							Software Engineer
						</h2>

						<p className="text-zinc-500 dark:text-zinc-500 text-base mt-3 leading-relaxed max-w-2xl">
							Learning backend development with .NET Core and Nest. I enjoy
							solving problems, exploring new tech, and building projects that
							actually work.
						</p>
					</div>

					{/* Contact Section */}
					<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
						{/* Social Links */}
						<div className="flex items-center gap-2">
							{socialLinks.map((social, index) => (
								<motion.a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
									aria-label={social.label}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5 + index * 0.1 }}
									whileHover={{ scale: 1.1 }}
								>
									{social.icon}
								</motion.a>
							))}
						</div>

						{/* Action Buttons */}
						<div className="flex items-center gap-3">
							<motion.a
								href="/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex items-center justify-center px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 text-sm font-semibold rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.0 }}
								whileHover={{ scale: 1.05 }}
							>
								Resume
								<ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
							</motion.a>

							<motion.a
								href="mailto:hazemhelal.se@gmail.com"
								className="px-4 py-2 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 text-sm font-semibold rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.1 }}
								whileHover={{ scale: 1.05 }}
							>
								Contact
							</motion.a>
						</div>
					</div>
				</div>

				{/* Avatar */}
				<motion.div
					className="flex-shrink-0 order-1 sm:order-2 self-center sm:self-start"
					whileHover={{ scale: 1.05 }}
					transition={{ type: 'spring', stiffness: 300 }}
				>
					<div className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
            <Image
              alt="Hazem Helal"
              src="/avatar.jpg"
              fill
              className="rounded-full object-cover shadow-lg border-4 border-white dark:border-zinc-900"
            />
          </div>
				</motion.div>
			</motion.div>
		</header>
	)
}

export default Header