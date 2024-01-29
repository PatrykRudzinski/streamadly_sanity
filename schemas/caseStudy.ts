import {defineType} from 'sanity'

export default defineType({
  name: 'caseStudy',
  type: 'document',
  title: 'Case study',
  fields: [
    {
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
})
