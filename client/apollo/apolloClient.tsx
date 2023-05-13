import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"

type ApolloProviderProps = {
  children: React.ReactNode
}

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql"
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const OctopusApolloProvider: React.FunctionComponent<ApolloProviderProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default OctopusApolloProvider
