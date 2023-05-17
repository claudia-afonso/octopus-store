import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='preload stylesheet'
          type='text/css'
          href='https://static.octopuscdn.com/fonts/Gotham/fonts.min.css'
        />
        <link
          rel='icon'
          type='image/png'
          href='https://static.octopuscdn.com/favicons/favicon-32x32.png'
          sizes='32x32'
        ></link>
        <meta name='description' content='Octopus Energy store'></meta>
      </Head>
      <body>
        <noscript>Your browser does not support JavaScript!</noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
