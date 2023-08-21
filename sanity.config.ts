import { Config} from 'sanity'
import {deskTool } from 'sanity/desk'
import {visionTool } from '@sanity/vision'
import { schemaTypes } from '@sanity/schemas'
import { csTheme } from '@src/styles/theme'
import { StudioNavbar } from '@src/components/StudioNavbar'

export const config: Config = {
    name: 'default',
    title: 'Cookie Shop',
    projectId: '0b7ynznc',
    dataset: 'production',
    basePath: '/studio',
    plugins: [deskTool(), visionTool()],
    schema: {
        types: schemaTypes,
    },
    theme: csTheme,
    studio: {
        components: {
            navbar: StudioNavbar,
        }
    }
}