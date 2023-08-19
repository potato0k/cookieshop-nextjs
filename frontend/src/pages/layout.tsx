'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider, Flex } from '@chakra-ui/react'

import { theme } from '../styles/theme'
import { Navbar } from '@/components/Navbar/Navbar'
import { Footer } from '@/components/Footer/Footer'
import { AppContextProvider } from '@src/context/AppContext'

export const revalidate = 110 

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' style={{ minHeight: '100vh' }}>
      <head>
        <title>Cookie Shop</title>
        <meta title='description' content='We sell cookies online!'></meta>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='cookie_logo.png'
        />
      </head>

      <body
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <AppContextProvider>
              <Navbar />
              <Box flex={1}> {children}</Box>
              <Footer />
            </AppContextProvider>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
