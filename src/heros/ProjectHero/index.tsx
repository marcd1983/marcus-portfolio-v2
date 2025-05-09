import React from 'react'
import type { Project } from '@/payload-types'
import { Media } from '@/components/Media'
export const ProjectHero: React.FC<{
  project: Project
}> = ({ project }) => {
  const { heroImage, title, subTitle, meta, projectColor } = project
  const { description } = meta || {}
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  return (
    <div style={{ backgroundColor: projectColor || 'transparent' }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-8 py-8 items-center">
          <div className="col-span-4 lg:col-span-6 md:col-span-2">
            <h1 className="mb-4 text-3xl md:text-5xl lg:text-6xl font-medium text-white">
              {title}
            </h1>
            {subTitle && <h4 className="mb-4 text-2xl text-white">{subTitle}</h4>}
            {description && (
              <div className="mb-4 text-white">{description && <p>{sanitizedDescription}</p>}</div>
            )}
          </div>
          <div className="col-span-4 lg:col-span-6 md:col-span-2">
            {heroImage && typeof heroImage !== 'string' && (
              <Media priority imgClassName="object-contain" resource={heroImage} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
