import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { useEffect, type ReactElement, type ReactNode } from 'react'
import '@/styles/globals.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App ({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader')
      if (loader) loader.remove()
    }
  }, [])
  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(
    <>
      <Component {...pageProps} />
    </>
  )
}
