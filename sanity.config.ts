import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Bible Baptist Church',

  projectId: 'xtbgrgsg',
  dataset: 'production',

  basePath: '/studio',

  apiVersion: '2024-01-01',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
