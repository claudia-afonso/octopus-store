import type { AppProps } from "next/app"
import OctopusApolloProvider from "../apollo/apolloClient"
import "../styles/normalize.css"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <OctopusApolloProvider>
      <Component {...pageProps} />
    </OctopusApolloProvider>
  )
}

export default MyApp
