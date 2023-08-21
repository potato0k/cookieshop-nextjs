import React from 'react'
import { extendTheme } from '@chakra-ui/react'
import { buildLegacyTheme } from 'sanity'
import '@fontsource/poppins'
import '@fontsource/open-sans'
import '@fontsource/montserrat'

export const colors = {
  brand: {
    primary: 'hsla(32, 100%, 19%, 1)',
    primaryLight: 'hsla(32, 100%, 29%, 1)',
    primaryDark: 'hsla(32, 100%, 9%, 1)'
  }
}

export const fonts = {
  heading: "'Poppins', sans-serif",
  body: "'Montserrat', sans-serif"
}

export const theme = extendTheme({ colors, fonts })

const props = {
  '--cs-white': '#fff',
  '--cs-black': '#1a1a1a',
  '--cs-gray': '#666666',
  '--brand-primary': colors.brand.primary,
  '--brand-primary-light': colors.brand.primaryLight,
  '--brand-primary-dark': colors.brand.primaryDark
}

export const csTheme = buildLegacyTheme({
  '--black': props['--cs-black'],
  '--white': props['--cs-white'],
  '--focus-color': props['--brand-primary-dark'],
  '--brand-primary': props['--brand-primary'],
  '--component-bg': props['--cs-white'],
  '--component-text-color': props['--cs-black'],
  '--default-button-color': props['--cs-gray'],
  '--default-button-primary-color': props['--brand-primary'],
  '--state-info-color': props['--brand-primary-light']
})
