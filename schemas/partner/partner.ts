import {defineType} from 'sanity'

export default defineType({
  name: 'partner',
  type: 'document',
  title: 'Partner',
  fields: [
    {
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'name',
      type: 'string',
      title: 'Display name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Logo image',
      validation: (rule) => rule.required(),
      fields: [{name: 'alt', title: 'Alt description', type: 'string'}],
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order',
      validation: (rule) => rule.required(),
    },
    {
      name: 'caseStudy',
      type: 'reference',
      title: 'Related Case Study',
      to: [{ type: 'caseStudy'}]
    }
  ],
});