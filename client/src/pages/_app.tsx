import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Messaging Chat</title>
        <link rel="shortcut icon" href="/img/chat-icon.ico" />
        <link rel="apple-touch-icon" href="/img/chat-icon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple chat application that uses Socket.IO"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
