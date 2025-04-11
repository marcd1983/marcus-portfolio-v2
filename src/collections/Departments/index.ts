import { CollectionConfig } from 'payload'

export const Departments: CollectionConfig = {
  slug: 'departments',
  labels: {
    singular: 'Department',
    plural: 'Departments',
  },
  admin: {
    useAsTitle: 'name',
    group: 'Locations',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      type: 'relationship',
      relationTo: 'locations',
      hasMany: true,
      required: true,
    },
  ],
}
