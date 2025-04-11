// src/blocks/LocationBlock.ts
import { Block } from 'payload'

export const LocationBlock: Block = {
  slug: 'location',
  labels: {
    singular: 'Location Section',
    plural: 'Location Sections',
  },
  fields: [
    {
      name: 'locations',
      type: 'relationship',
      relationTo: 'locations', // Reference to the Locations collection
      hasMany: true, // Allow selecting multiple locations
      label: 'Select Locations to Display',
    },
    {
      name: 'departments',
      type: 'relationship',
      relationTo: 'departments', // Reference to the Departments collection
      hasMany: true, // Allow selecting multiple departments
      label: 'Select Departments to Display',
    },
    {
      name: 'staff',
      type: 'relationship',
      relationTo: 'staff', // Reference to the Staff collection
      hasMany: true, // Allow selecting multiple staff members
      label: 'Select Staff to Display',
    },
  ],
}
