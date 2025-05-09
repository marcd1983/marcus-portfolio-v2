import type {
  Post,
  Project,
  CollectionListBlock as CollectionListBlockProps,
} from '@/payload-types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import RichText from '@/components/RichText'

import { CollectionList } from '@/components/CollectionList'

export const CollectionListBlock: React.FC<
  CollectionListBlockProps & {
    id?: string
  }
> = async (props) => {
  const {
    id,
    categories,
    introContent,
    limit: limitFromProps,
    populateBy,
    selectedDocs,
    relationTo,
  } = props

  const limit = limitFromProps || 6

  // Default relationTo to 'posts' if not defined
  const collection = relationTo ?? 'posts'

  let items: (Post | Project)[] = []

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise })

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.id
      else return category
    })

    const fetchedItems = await payload.find({
      collection, // Use 'collection' variable here, which is always 'posts' or 'projects'
      depth: 1,
      limit,
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
            where: {
              categories: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
    })

    items = fetchedItems.docs
  } else {
    if (selectedDocs?.length) {
      const filteredSelectedItems = selectedDocs.map((item) => {
        if (typeof item.value === 'object') return item.value
      }) as (Post | Project)[]

      items = filteredSelectedItems
    }
  }

  return (
    <div className="my-16" id={`block-${id}`}>
      {introContent && (
        <div className="container mx-auto mb-16">
          <RichText className="ms-0 max-w-[48rem]" data={introContent} enableGutter={false} />
        </div>
      )}
      <CollectionList items={items} relationTo={collection} /> {/* Passing the collection prop */}
    </div>
  )
}
