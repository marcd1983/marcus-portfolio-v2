'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Header as HeaderType } from '@/payload-types'

interface SocialNavProps {
  socialLinks: HeaderType['socialLinks']
}

export const SocialNav: React.FC<SocialNavProps> = ({ socialLinks }) => {
  if (!socialLinks || socialLinks.length === 0) {
    return null
  }

  return (
    <nav className="fixed lg:bottom-20 lg:right-12 bottom-4 right-4 hidden md:inline-flex flex-col gap-4 mt-4 items-center">
      {socialLinks.map((link) => (
        <Link
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          {link.icon && typeof link.icon === 'object' && typeof link.icon.url === 'string' ? (
            <Image
              src={link.icon.url}
              alt={link.name}
              width={24}
              height={24}
              className="object-contain dark:invert"
            />
          ) : (
            <span className="text-md">{link.name}</span>
          )}
        </Link>
      ))}
    </nav>
  )
}
