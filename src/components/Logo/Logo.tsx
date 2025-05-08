'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

type HeaderData = {
  logo?: {
    url?: string
    alt?: string
  }
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props
  const [logoData, setLogoData] = useState<HeaderData | null>(null)

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const res = await fetch('/api/globals/header')
        const json = await res.json()
        setLogoData(json)
      } catch (err) {
        console.error('Failed to fetch header:', err)
      }
    }

    fetchHeader()
  }, [])

  const logoUrl = logoData?.logo?.url

  if (!logoUrl) {
    return null // Or fallback to static logo if desired
  }

  return (
    <Image
      src={logoUrl}
      alt="Marcus De Leon Design"
      width={72}
      height={72}
      loading={loading}
      priority={priority === 'high'}
      className={clsx('max-w-[9.375rem] w-full h-[72px]', className)}
    />
  )
}
