import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/{SPACE_ID}',
  cache: new InMemoryCache(),
  headers: {
    Authorization: 'Bearer {CONTENTFUL_ACCESS_TOKEN}',
  },
})

export default client
