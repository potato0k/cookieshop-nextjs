import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import { AppContextProvider } from '@src/context/AppContext'
import { Navbar } from '@/components/Navbar/Navbar'
import { Footer } from '@src/components/Footer/Footer'

import '@/styles/globals.css'
import { theme } from '@/styles/theme'
import Layout from '@src/components/Layout/Layout'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App ({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(
    <>
      <Component {...pageProps} />

      {/* <ChakraProvider theme={theme}>
        <AppContextProvider>
          <Navbar />
          <Footer />
        </AppContextProvider>
      </ChakraProvider> */}
    </>
  )
}
