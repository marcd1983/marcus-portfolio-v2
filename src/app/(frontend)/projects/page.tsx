// projects/page.tsx
import type { Metadata } from 'next/types'
import { CollectionList } from '@/components/CollectionList'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const projects = await payload.find({
    collection: 'projects',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Projects</h1>
        </div>
      </div>

      {/* Pass the projects data and relationTo as 'projects' */}
      <CollectionList items={projects.docs} />
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Marcus DeLeon Creative Projects`,
  }
}
