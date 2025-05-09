import { cn } from '@/utilities/ui'
import React from 'react'
import { Section, SectionData } from '@/components/Section'

// Define the type for both posts and projects
export type Props = {
  items: SectionData[] // Can be posts or projects
  relationTo?: 'posts' | 'projects' // Ensure relationTo can be either posts or projects
}

export const CollectionList: React.FC<Props> = (props) => {
  const { items, relationTo } = props

  return (
    <div id="project-list" className={cn('container')}>
      {items?.map((result, index) => {
        if (typeof result === 'object' && result !== null) {
          return (
            <div key={index}>
              <Section
                className={cn(
                  index % 2 === 1
                    ? 'flex-col-reverse md:flex-row-reverse'
                    : 'flex-col-reverse md:flex-row', // Alternate layout
                )}
                doc={result}
                relationTo={relationTo}
                showCategories
              />
            </div>
          )
        }
        return null
      })}
    </div>
  )
}
