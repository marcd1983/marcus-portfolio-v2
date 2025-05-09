import { getCachedGlobal } from '@/utilities/getGlobals'
// import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

// import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
// import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-border">
      <div className="container mx-auto py-4 gap-8 flex flex-col md:flex-row md:justify-center">
        {/* <Link className="flex items-center" href="/">
          <Logo />
        </Link> */}

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink key={i} {...link} />
            })}
          </nav>
          {/* <ThemeSelector /> */}
        </div>
      </div>
    </footer>
  )
}
