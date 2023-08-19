import Layout from '@/components/Layout/Layout';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat, Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["italic", "normal"],
  variable: "--font-monserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily},
          ${montserrat.style.fontFamily};
        }
      `}</style>
      <Layout><Component {...pageProps} /></Layout>

    </>
  );
};
