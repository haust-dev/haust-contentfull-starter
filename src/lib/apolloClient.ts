import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
})

export default client
