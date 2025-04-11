'use client'
import { cn } from '@/utilities/ui'
import { CMSLink } from '../Link'
import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import type { Project } from '@/payload-types'

import { Media } from '@/components/Media'

export type SectionData = Pick<
  Project,
  'slug' | 'categories' | 'meta' | 'title' | 'subTitle' | 'projectColor'
>

export const Section: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: SectionData
  relationTo?: 'posts' | 'projects'
  showCategories?: boolean
  title?: string
  subtitle?: string
}> = (props) => {
  const {
    className,
    doc,
    relationTo,
    showCategories,
    title: titleFromProps,
    subtitle: subTitleFromProps,
  } = props

  const { slug, categories, meta, title, subTitle, projectColor } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const subTitleToUse = subTitleFromProps || subTitle
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`
  // const imageScale = useTransform(scrollYProgress, [0, 1], [0.7, 1])
  return (
    <article
      className={cn(
        'md:h-[90vh] gap-8 md:gap-20 pb-20 items-center flex justify-between',
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, x: -100, y: 100 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/3 w-full"
      >
        {showCategories && hasCategories && (
          <div className="mb-4">
            {showCategories && hasCategories && (
              <div>
                {categories?.map((category, index) => {
                  if (typeof category === 'object') {
                    const { title: titleFromCategory } = category
                    const categoryTitle = titleFromCategory || 'Untitled category'
                    const isLast = index === categories.length - 1
                    return (
                      <Fragment key={index}>
                        {categoryTitle}
                        {!isLast && <Fragment>, &nbsp;</Fragment>}
                      </Fragment>
                    )
                  }
                  return null
                })}
              </div>
            )}
          </div>
        )}
        <h3 className="mb-4 text-5xl font-medium">{titleToUse}</h3>
        {subTitleToUse && <h4 className="mb-4 text-2xl">{subTitleToUse}</h4>}
        {description && <div className="mb-4">{description && <p>{sanitizedDescription}</p>}</div>}

        <CMSLink
          className="group relative inline-flex items-center overflow-hidden rounded-lg border border-current px-8 py-3  focus:ring-3 focus:outline-hidden"
          url={href || ''}
        >
          <span className="absolute -end-full transition-all group-hover:end-4">
            <svg
              className="size-5 shadow-sm rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span className="text-lg font-medium transition-all group-hover:me-4">View Project</span>
        </CMSLink>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100, y: 100 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn('md:w-2/3 w-full rounded-xl p-8')}
        style={{ backgroundColor: projectColor || 'transparent' }} // Fallback to transparent
      >
        <CMSLink url={href || ''}>
          {!metaImage && <div className="">No image</div>}
          {metaImage && typeof metaImage !== 'string' && (
            <motion.div>
              <Media resource={metaImage} size="33vw" />
            </motion.div>
          )}
        </CMSLink>
      </motion.div>
    </article>
  )
}
