'use client'

import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import type { Media } from '@/payload-types'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  logo?: Media
}

export const Logo: React.FC<Props> = ({ className, loading = 'lazy', priority = 'low', logo }) => {
  if (!logo || typeof logo !== 'object' || !logo.url) {
    return null // fallback or default static logo
  }

  return (
    <Image
      src={logo.url}
      alt={logo.alt || 'Site logo'}
      width={72}
      height={72}
      loading={loading}
      priority={priority === 'high'}
      className={clsx('max-w-[9.375rem] w-full h-[72px]', className)}
    />
  )
}
