import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { apiVersion, dataset, projectId } from './sanity/env'
import { schemaTypes } from './schemas'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: schemaTypes
  },
  plugins: [
    deskTool(),
    visionTool({ defaultApiVersion: apiVersion })
  ]
})
