import { CollectionConfig } from 'payload'

export const Staff: CollectionConfig = {
  slug: 'staff',
  labels: {
    singular: 'Staff',
    plural: 'Staff',
  },
  admin: {
    useAsTitle: 'firstName',
    group: 'Locations',
  },
  fields: [
    {
      name: 'staff photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'position',
      type: 'text',
    },
    {
      name: 'phone',
      type: 'text',
      required: false,
      unique: true,
    },
    {
      name: 'email',
      type: 'email',
      required: false,
      unique: true,
    },
    {
      name: 'department',
      type: 'relationship',
      relationTo: 'departments',
      required: true,
    },
    {
      name: 'locations',
      type: 'relationship',
      relationTo: 'locations',
      required: true,
    },
  ],
}
