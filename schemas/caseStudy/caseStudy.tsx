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
      description:
        'Case Study title (value of that field will be a fallback for metadata "title" tag )',
      validation: (rule) => rule.required(),
    },
    {
      name: 'metadataTags',
      title: 'Metadata tags',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'tagName',
              title: 'Tag name',
              type: 'string',
              description: 'Meta tag name, for example: "keywords", "author"',
            },
            {
              name: 'tagContent',
              title: 'Tag content',
              type: 'string',
              description: 'Meta tag content',
            },
          ],
        },
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some kind of user friendly id, it will be visible in URL address',
      validation: (rule) => rule.required(),
      options: {
        source: 'title',
      },
    },
    {
      name: 'description',
      title: 'Description',
      description:
        'Case Study description, visible on Case Study cards, and heading in single Case Study page  (value of that field will be a fallback for metadata "title" tag )',
      type: 'text',
      validation: (rule) => rule.required(),
    },
    {
      name: 'eventDate',
      title: 'Date of event',
      description:
        'The time when the event took place - not to be confused with the date it was added to the CMS',
      type: 'date',
      validation: (rule) => rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Cover image',
      description: 'Image will be visible on Case Study header and wide cards',
      type: 'image',
      validation: (rule) => rule.required(),
      fields: [{name: 'alt', title: 'Alt description', type: 'string'}],
    },
    {
      name: 'thumbnailImage',
      title: 'Thumbnail image',
      description: 'Image will be visible on cards',
      type: 'image',
      validation: (rule) => rule.required(),
      fields: [{name: 'alt', title: 'Alt description', type: 'string'}],
    },
    {
      name: 'content',
      title: 'Main content',
      description: 'Main content of Case Study entity',
      type: 'array',
      of: [
        {
          title: 'Text block',
          type: 'block',
          styles: [
            {title: 'Section title', value: 'h2'},
            {title: 'Section subtitle', value: 'h3'},
            {
              title: 'Body text',
              component: ({children}) => <span style={{fontSize: '1.1rem'}}>{children}</span>,
              value: 'body1',
            },
            {
              title: 'Body text small',
              component: ({children}) => <span style={{fontSize: '0.9rem'}}>{children}</span>,
              value: 'body2',
            },
            {
              title: 'Caption',
              component: ({children}) => (
                <span style={{fontSize: '0.8rem', opacity: 0.8}}>{children}</span>
              ),
              value: 'caption1',
            },
          ],
          of: [
            {
              name: 'image',
              title: 'Image',
              type: 'object',
              fields: [
                {name: 'imageData', title: 'Image file', type: 'image'},
                {name: 'alt', title: 'Alt description', type: 'string'},
              ],
            },
            {
              name: 'twitchVideo',
              title: 'Twitch embedded video',
              type: 'object',
              fields: [
                {name: 'description', title: 'Description (optional)', type: 'string'},
                {
                  name: 'videoUrl',
                  title: 'Video Url',
                  description: '"src" part of iframe from twitch',
                  type: 'url',
                },
              ],
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    },
  ],
})
