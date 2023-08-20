import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'
import { theme } from '@/styles/theme'
import { Navbar } from '@/components/Navbar/Navbar'
import { Footer } from '@/components/Footer/Footer'
import { AppContextProvider } from '@/context/AppContext'
import { Montserrat, Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['italic', 'normal'],
  variable: '--font-poppins'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['italic', 'normal'],
  variable: '--font-monserrat'
})

interface LayoutProps {
  children: ReactNode
  isAdminPage?: boolean
}

export default function Layout ({ children, isAdminPage = false }: LayoutProps) {
  return (
    <>
      {!isAdminPage ? (
        <>
          <style jsx global>{`
            html {
              font-family: ${poppins.style.fontFamily},
                ${montserrat.style.fontFamily};
            }
          `}</style>
          <CacheProvider>
            <ChakraProvider theme={theme} cssVarsRoot={undefined}>
              <AppContextProvider>
                <Navbar />
                <Box flex={1}>{children}</Box>
                <Footer />
              </AppContextProvider>
            </ChakraProvider>
          </CacheProvider>
        </>
      ) : (
        <>{children}</>
      )}
    </>
  )
}
