import {defineType} from 'sanity'
import {object} from 'prop-types'

export default defineType({
  name: 'dictionary',
  type: 'document',
  title: 'Dictionary',
  fields: [
    {
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true
    },
    // VISIBLE
    {
      name: 'common',
      type: 'object',
      title: 'Common',
      options: {
        collapsible: true,
        collapsed: true
      },
      validation: (rule) => rule.required(),
      fields: [
        {
          name: 'header',
          type: 'object',
          title: 'Header',
          options: {
            collapsible: true,
            collapsed: false
          },
          fields: [
            {
              name: 'menuButton',
              type: 'string',
              title: 'Menu button label',
              validation: (rule) => rule.required()
            },
            {
              name: 'login',
              type: 'object',
              title: 'Login link',
              options: {
                collapsible: false,
                collapsed: false
              },
              fields: [
                {
                  name: 'label',
                  type: 'string',
                  title: 'Login button label',
                  description: 'Leave empty to hide it in UI'
                  // validation: (rule) => rule.required()
                },
                {
                  name: 'href',
                  type: 'url',
                  title: 'Url to open',
                  description: 'Leave empty to hide it in UI'
                  // validation: (rule) => rule.required()
                }
              ]
            }
          ]
        },
        {
          name: 'navigation',
          type: 'object',
          title: 'Navigation',
          validation: (rule) => rule.required(),
          options: {
            collapsible: true,
            collapsed: false
          },
          fields: [
            {
              name: 'about',
              type: 'string',
              title: 'About us link label',
              validation: (rule) => rule.required()
            },
            {
              name: 'caseStudy',
              type: 'string',
              title: 'Case study link label',
              validation: (rule) => rule.required()
            },
            {
              name: 'contact',
              type: 'string',
              title: 'Contact link label',
              validation: (rule) => rule.required()
            }
          ]
        },
        {
          name: 'footer',
          type: 'object',
          title: 'Footer',
          options: {
            collapsible: true,
            collapsed: false
          },
          validation: (rule) => rule.required(),
          fields: [
            {
              name: 'mailUs',
              type: 'object',
              title: 'Mail us section',
              options: {
                collapsible: false,
                collapsed: false
              },
              fields: [
                {
                  name: 'label',
                  type: 'string',
                  title: 'Email label',
                  validation: (rule) => rule.required()
                },
                {
                  name: 'value',
                  type: 'string',
                  title: 'Email value',
                  validation: (rule) => rule.required()
                }
              ]
            },
            {
              name: 'address',
              type: 'object',
              title: 'Address section',
              options: {
                collapsible: false,
                collapsed: false
              },
              fields: [
                {
                  name: 'label',
                  type: 'string',
                  title: 'Address label',
                  description: 'Leave empty to hide it in UI'
                  // validation: (rule) => rule.required()
                },
                {
                  name: 'value',
                  type: 'text',
                  title: 'Address value',
                  description: 'Leave empty to hide it in UI'
                  // validation: (rule) => rule.required()
                }
              ]
            },
            {
              name: 'sm',
              type: 'object',
              title: 'Social media section',
              options: {
                collapsible: false,
                collapsed: false
              },
              fields: [
                {
                  name: 'fbUrl',
                  type: 'url',
                  title: 'Facebook url',
                  description: 'Leave empty to hide it in UI'
                  // validation: (rule) => rule.required()
                },
                {
                  name: 'igUrl',
                  type: 'url',
                  title: 'Instagram url',
                  description: 'Leave empty to hide it in UI'
                  // validation: (rule) => rule.required()
                },
                {
                  name: 'tvUrl',
                  type: 'url',
                  title: 'Twitch url',
                  description: 'Leave empty to hide it in UI'
                  // validation: (rule) => rule.required()
                }
              ]
            },
            {
              name: 'gdpr',
              type: 'object',
              title: 'GDPR & PP section',
              options: {
                collapsible: false,
                collapsed: false
              },
              validation: (rule) => rule.required(),
              fields: [
                {
                  name: 'ppLabel',
                  type: 'string',
                  title: 'Privacy Policy label',
                  validation: (rule) => rule.required()
                },
                {
                  name: 'gdprLabel',
                  type: 'string',
                  title: 'GDPR label',
                  validation: (rule) => rule.required()
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'page_home',
      type: 'object',
      title: 'Page - homepage',
      options: {
        collapsible: true,
        collapsed: true
      },
      validation: (rule) => rule.required(),
      fields: [
        {
          name: 'hero',
          type: 'object',
          title: 'Section - hero',
          options: {
            collapsible: true,
            collapsed: false
          },
          validation: (rule) => rule.required(),
          fields: [
            {
              name: 'header',
              type: 'string',
              title: 'Section header',
              validation: (rule) => rule.required()
            },
            {
              name: 'subheader',
              type: 'string',
              title: 'Section subheader',
              validation: (rule) => rule.required()
            },
            {
              name: 'ctaLabel',
              type: 'string',
              title: 'CTA label',
              validation: (rule) => rule.required()
            }
          ]
        },
        {
          name: 'services',
          type: 'object',
          title: 'Section - services',
          description: 'prev Campaigns',
          options: {
            collapsible: true,
            collapsed: false
          },
          validation: (rule) => rule.required(),
          fields: [
            {
              name: 'header',
              type: 'string',
              title: 'Section header',
              validation: (rule) => rule.required()
            },
            {
              name: 'subheader',
              type: 'string',
              title: 'Section subheader',
              validation: (rule) => rule.required()
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description',
              validation: (rule) => rule.required()
            },
            {
              name: 'cards',
              type: 'object',
              title: 'Cards content',
              validation: (rule) => rule.required(),
              options: {
                collapsible: true,
                collapsed: false
              },
              fields: [
                {
                  name: 'card1',
                  type: 'object',
                  title: 'Card 1',
                  validation: (rule) => rule.required(),
                  fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                      validation: (rule) => rule.required()
                    },
                    {
                      name: 'content',
                      title: 'Content',
                      type: 'text',
                      validation: (rule) => rule.required()
                    }
                  ]
                },
                {
                  name: 'card2',
                  type: 'object',
                  title: 'Card 2',
                  validation: (rule) => rule.required(),

                  fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                      validation: (rule) => rule.required()
                    },
                    {
                      name: 'content',
                      title: 'Content',
                      type: 'text',
                      validation: (rule) => rule.required()
                    }
                  ]
                },
                {
                  name: 'card3',
                  type: 'object',
                  title: 'Card 3',
                  validation: (rule) => rule.required(),

                  fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                      validation: (rule) => rule.required()
                    },
                    {
                      name: 'content',
                      title: 'Content',
                      type: 'text',
                      validation: (rule) => rule.required()
                    }
                  ]
                },
                {
                  name: 'card4',
                  type: 'object',
                  title: 'Card 4',
                  validation: (rule) => rule.required(),
                  fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                      validation: (rule) => rule.required()
                    },
                    {
                      name: 'content',
                      title: 'Content',
                      type: 'text',
                      validation: (rule) => rule.required()
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'about',
          type: 'object',
          title: 'Section - about us',
          options: {
            collapsible: true,
            collapsed: false
          },
          validation: (rule) => rule.required(),
          fields: [
            {
              name: 'header',
              type: 'string',
              title: 'Section header',
              validation: (rule) => rule.required()
            },
            {
              name: 'subheader',
              type: 'string',
              title: 'Section subheader',
              validation: (rule) => rule.required()
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description',
              validation: (rule) => rule.required()
            },
            {
              name: 'ctaLabel',
              type: 'string',
              title: 'CTA label',
              validation: (rule) => rule.required()
            }
          ]
        },
        {
          name: 'caseStudy',
          type: 'object',
          title: 'Section - case study',
          options: {
            collapsible: true,
            collapsed: false
          },
          validation: (rule) => rule.required(),
          fields: [
            {
              name: 'header',
              type: 'string',
              title: 'Section header',
              validation: (rule) => rule.required()
            },
            {
              name: 'subheader',
              type: 'string',
              title: 'Section subheader',
              validation: (rule) => rule.required()
            },
            {
              name: 'seeAllLabel',
              type: 'string',
              title: 'See all label',
              validation: (rule) => rule.required()
            }
          ]
        },
        {
          name: 'partners',
          type: 'object',
          title: 'Section - partners',
          options: {
            collapsible: true,
            collapsed: false
          },
          validation: (rule) => rule.required(),
          fields: [
            {
              name: 'header',
              type: 'string',
              title: 'Section header',
              validation: (rule) => rule.required()
            },
            {
              name: 'subheader',
              type: 'string',
              title: 'Section subheader',
              validation: (rule) => rule.required()
            },
            {
              name: 'cardCta',
              type: 'string',
              title: 'Partner card CTA',
              validation: (rule) => rule.required()
            }
          ]
        }
      ]
    },
    {
      name: 'page_contact',
      type: 'object',
      title: 'Page - contact',
      description: 'Also used in section Contact on Homepage',
      options: {
        collapsible: true,
        collapsed: true
      },
      validation: (rule) => rule.required(),

      fields: [
        {
          name: 'header',
          type: 'string',
          title: 'Section header',
          validation: (rule) => rule.required()
        },
        {
          name: 'subheader',
          type: 'string',
          title: 'Section subheader',
          validation: (rule) => rule.required()
        },
        {
          name: 'form',
          type: 'object',
          title: 'Form labels',
          options: {
            collapsible: true,
            collapsed: false
          },
          validation: (rule) => rule.required(),
          fields: [
            {
              name: 'email',
              type: 'string',
              title: 'Email label',
              validation: (rule) => rule.required()
            },
            {
              name: 'name',
              type: 'string',
              title: 'Name label',
              validation: (rule) => rule.required()
            },
            {
              name: 'message',
              type: 'string',
              title: 'Message label',
              validation: (rule) => rule.required()
            },
            {
              name: 'emailInvalid',
              type: 'string',
              title: 'Invalid email message',
              validation: (rule) => rule.required()
            },
            {
              name: 'requiredField',
              type: 'string',
              title: 'Required field message',
              validation: (rule) => rule.required()
            },
            {
              name: 'sendButtonLabel',
              type: 'string',
              title: 'Send button label',
              validation: (rule) => rule.required()
            },
            {
              name: 'sendingButtonLabel',
              type: 'string',
              title: 'Send button label during sending form',
              validation: (rule) => rule.required()
            },
            {
              name: 'successfullySent',
              type: 'string',
              title: 'Message after sending a form',
              validation: (rule) => rule.required(),
              initialValue: 'Wiadomość została wysłana!'
            },
            {
              name: 'consents',
              type: 'array',
              title: 'Required consents',
              description: 'HTML tags are allowed, e.g. <a href="link/to/pp.pdf">Privacy Policy</a>',
              validation: (rule) => rule.required(),
              of: [
                {
                  name: 'value',
                  type: 'text',
                  title: 'Consent text',
                  validation: (rule) => rule.required()
                }
              ]
            }
          ]
        },
        {
          name: 'persons',
          type: 'array',
          title: 'Contact persons',
          validation: (rule) => rule.required(),
          of: [
            {
              name: 'person',
              title: 'Person',
              type: 'object',
              fields: [
                {
                  title: 'Name & Surname',
                  name: 'name',
                  type: 'string',
                  validation: (rule) => rule.required()
                },
                {
                  title: 'Title',
                  name: 'title',
                  type: 'string',
                  description: 'Leave empty to hide it in UI'
                  // validation: (rule) => rule.required()
                },
                {
                  title: 'Email',
                  name: 'email',
                  type: 'string',
                  validation: (rule) => rule.required()
                },
                {
                  title: 'Address',
                  name: 'address',
                  type: 'text',
                  description: 'Leave empty to hide it in UI, HTML tags are allowed, e.g. <br />'
                  // validation: (rule) => rule.required()
                },
                {
                  title: 'Phone number',
                  name: 'phone',
                  type: 'string',
                  description: 'Leave empty to hide it in UI'
                  // validation: (rule) => rule.required()
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'page_caseStudyList',
      type: 'object',
      title: 'Page - Case Study List',
      options: {
        collapsible: true,
        collapsed: true
      },
      validation: (rule) => rule.required(),
      fields: [
        {
          name: 'header',
          type: 'string',
          title: 'Page header',
          validation: (rule) => rule.required()
        },
        {
          name: 'subheader',
          type: 'string',
          title: 'Page subheader',
          validation: (rule) => rule.required()
        },
        {
          name: 'goToDetailsLabelWide',
          type: 'string',
          title: 'Go to case study details button label (on first, wide card)',
          validation: (rule) => rule.required()
        },
        {
          name: 'goToDetailsLabelNarrow',
          type: 'string',
          title: 'Go to case study details button label (on small cards)',
          validation: (rule) => rule.required()
        }
      ]
    },
    {
      name: 'page_caseStudyDetails',
      type: 'object',
      title: 'Page - Case Study Details',
      options: {
        collapsible: true,
        collapsed: true
      },
      validation: (rule) => rule.required(),
      fields: [
        {
          name: 'backToListLabel',
          type: 'string',
          title: 'Go back to case study list button label',
          validation: (rule) => rule.required()
        }
      ]
    }
  ]
})