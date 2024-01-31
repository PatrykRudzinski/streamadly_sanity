import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'exr2ztml',
    dataset: process.env.SANITY_STUDIO_DATASET || 'dev',
  },
})
