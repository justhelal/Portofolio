'use client'

import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'
import {  Copy, Check } from 'lucide-react'

import { usePathname } from 'next/navigation'
import { useState } from 'react'



export function Header() {
  const pathname = usePathname()
  const [copied, setCopied] = useState(false)
  const isBlogPost = pathname.startsWith('/blog/')

  const handleCopy = () => {
    // Get the full URL including the domain
    const fullUrl = window.location.href
    navigator.clipboard.writeText(fullUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <header className="mb-16 sm:mb-20 lg:mb-24 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row-reverse items-center sm:items-center gap-2 flex-1 text-center sm:text-left">
          <Image
            alt="Hazem's avatar"
            src="/avatar.jpg"
            className="aspect-square rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
            width={140}
            height={140}
            priority
          />

          <div className="flex-1">
            <Link href="/" className="font-medium text-black dark:text-white text-xl sm:text-2xl block">
              Hazem Helal
            </Link>
            <TextEffect
              as="p"
              preset="fade"
              per="char"
              className="text-zinc-600 dark:text-zinc-500 text-base sm:text-lg"
              delay={0.5}
            >
              Software Engineer
            </TextEffect>
            <TextEffect
              as="p"
              preset="fade"
              per="char"
              className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-md mx-auto sm:mx-0"
              delay={1.5}
            >
              Building clean, scalable solutions with .NET Core and React. Passionate about solving real problems and continuous learning.
            </TextEffect>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 self-end sm:self-auto">
          {isBlogPost && (
            <button
              onClick={handleCopy}
              className="flex items-center justify-center rounded-full p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Copy blog link"
            >
              {copied ? (
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-600 dark:text-zinc-400" />
              )}
            </button>
          )}
        </div>
      </header>
    </>
  )
}

export default Header