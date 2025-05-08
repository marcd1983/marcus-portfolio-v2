import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = ({ loading = 'lazy', priority = 'low', className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 72 72"
      className={clsx(className)}
      aria-hidden="true"
    >
      <circle className="logo-fill" cx="36" cy="36" r="36" />
      <polyline className="logo-stroke" points="22.63 57 17.25 52.51 12 57" />
      <polyline className="logo-stroke" points="12 15 17.25 19.5 24.99 19.5 29.13 15" />
      <line className="logo-stroke" x1="36" y1="48.59" x2="31.35" y2="53.08" />
      <line className="logo-stroke" x1="40.63" y1="53.08" x2="36" y2="48.59" />
      <line className="logo-stroke" x1="17.25" y1="52.51" x2="17.25" y2="19.5" />
      <line className="logo-stroke" x1="24.99" y1="19.5" x2="36" y2="48.59" />
      <polyline className="logo-stroke" points="49.37 57 54.75 52.51 60 57" />
      <polyline className="logo-stroke" points="60 15 54.75 19.5 47.01 19.5 42.87 15" />
      <line className="logo-stroke" x1="54.75" y1="52.51" x2="54.75" y2="19.5" />
      <line className="logo-stroke" x1="47.01" y1="19.5" x2="36" y2="48.59" />
      <polygon
        className="logo-stroke"
        points="40.63 53.08 31.35 53.08 22.63 25.87 22.63 57 12 57 12 15 29.17 15 36 34.71 42.83 15 60 15 60 57 49.37 57 49.37 25.87 40.63 53.08"
      />
      <polyline className="logo-stroke" points="17.25 19.5 22.63 25.87 24.99 19.5" />
      <polyline className="logo-stroke" points="54.75 19.5 49.37 25.87 47.01 19.5" />
      <line className="logo-stroke" x1="36" y1="34.71" x2="36" y2="48.59" />
      <style>{`
        .logo-fill { fill: #293443; }
        .logo-stroke { fill: none; stroke: #fff; stroke-width: 2px; }
      `}</style>
    </svg>
  )
}
