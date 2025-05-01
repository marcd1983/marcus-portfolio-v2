'use client'

import React, { Fragment } from 'react'
import { CMSLink } from '../Link'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import { Media } from '@/components/Media'
import type { Post, Project } from '@/payload-types'

export type CardPostData = Pick<Post | Project, 'slug' | 'categories' | 'meta' | 'title'>

interface CardProps {
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts' | 'projects'
  showCategories?: boolean
  title?: string
}

const CategoryList: React.FC<{ categories: CardPostData['categories'] }> = ({ categories }) => {
  if (!categories || !Array.isArray(categories) || categories.length === 0) return null

  return (
    <div className="uppercase text-sm mb-4">
      {categories.map((category, index) => {
        if (typeof category === 'object') {
          const title = category.title || 'Untitled category'
          const isLast = index === categories.length - 1

          return (
            <Fragment key={index}>
              {title}
              {!isLast && <span>,&nbsp;</span>}
            </Fragment>
          )
        }
        return null
      })}
    </div>
  )
}

export const Card: React.FC<CardProps> = ({
  alignItems = 'center',
  className,
  doc,
  relationTo = 'posts',
  showCategories = false,
  title: titleFromProps,
}) => {
  const { card } = useClickableCard({})
  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const sanitizedDescription = description?.replace(/\s/g, ' ')
  const href = `/${relationTo}/${slug}`
  const titleToUse = titleFromProps || title

  return (
    <article
      className={cn(
        'border border-border rounded-lg overflow-hidden bg-card hover:cursor-pointer',
        className,
      )}
      ref={card.ref}
    >
      <div className="relative w-full">
        {metaImage && typeof metaImage !== 'string' ? (
          <Media resource={metaImage} size="33vw" />
        ) : (
          <div className="h-[200px] flex items-center justify-center bg-muted text-sm text-muted-foreground">
            No image
          </div>
        )}
      </div>
      <div className="p-4 text-left">
        {showCategories && <CategoryList categories={categories} />}
        {titleToUse && (
          <h3 className="text-lg font-semibold mb-2">
            <CMSLink url={href || ''} className="hover:underline">
              {titleToUse}
            </CMSLink>
          </h3>
        )}
        {sanitizedDescription && (
          <p className="text-sm text-muted-foreground">{sanitizedDescription}</p>
        )}
      </div>
    </article>
  )
}
