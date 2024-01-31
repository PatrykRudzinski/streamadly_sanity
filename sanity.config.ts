import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {documentInternationalization} from '@sanity/document-internationalization'

export default defineConfig({
  name: 'default',
  title: 'streamadly-landing-page',

  projectId: 'exr2ztml',
  dataset: process.env.SANITY_STUDIO_DATASET || 'dev',

  plugins: [
    structureTool(),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'pl', title: 'Polish'},
      ],
      schemaTypes: ['caseStudy'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
