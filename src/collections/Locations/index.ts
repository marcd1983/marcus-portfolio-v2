import { CollectionConfig } from 'payload'

export const Locations: CollectionConfig = {
  slug: 'locations',
  labels: {
    singular: 'Location',
    plural: 'Locations',
  },
  admin: {
    useAsTitle: 'name',
    group: 'Locations',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Location Name',
      required: true,
    },
    {
      name: 'location photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'address',
      type: 'text',
      label: 'Address',
      required: true,
    },
    {
      name: 'city',
      type: 'text',
      label: 'City',
      required: true,
    },
    {
      name: 'state',
      type: 'text',
      label: 'State',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
      required: false,
    },
    {
      name: 'email',
      type: 'text',
      label: 'Email Address',
      required: false,
    },
    {
      name: 'googleMapsLink',
      type: 'text',
      label: 'Google Maps Link',
      required: false,
    },
    {
      name: 'googleMapsEmbed',
      type: 'textarea',
      label: 'Google Maps Embed Code',
      required: false,
    },
  ],
}
