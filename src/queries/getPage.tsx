import { gql } from '@apollo/client'

export const GET_PAGE = gql`
  query GetPage {
    pageCollection(where: { slug: "homepage" }, limit: 1) {
      items {
        sys {
          id
        }
        slug
        topSectionCollection {
          items {
            ... on FullWidthImageSection {
              image {
                url
                title
                width
                height
              }
              mobileImage {
                url
                title
                width
                height
              }
            }
          }
        }
      }
    }
  }
`
