import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <div id='globalLoader'>
          <img
            src='cat_.gif'
            width='300px'
            alt=''
          />
          <h1>Loading...</h1>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
