'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { SocialNav } from './SocialNav'
// import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <>
      <header
        className="container mx-auto relative z-20"
        {...(theme ? { 'data-theme': theme } : {})}
      >
        <div className="py-4 flex flex-col md:flex-row justify-between gap-2">
          <Link className="flex flex-col md:flex-row justify-center items-center gap-2" href="/">
            <span>
              <Logo />
            </span>
            <h1 className="text-2xl font-medium">Marcus DeLeón</h1>
          </Link>
          <div className="flex flex-row items-center gap-4">
            <HeaderNav data={data} />
            {/* <ThemeSelector /> */}
          </div>
        </div>
      </header>
      <SocialNav socialLinks={data.socialLinks} />
    </>
  )
}
