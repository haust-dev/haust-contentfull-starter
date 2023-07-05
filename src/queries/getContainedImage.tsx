import { gql } from '@apollo/client'

export const createGetContainedImageQuery = (slug: string) => gql`
    query GetImage {
        containedImageCollection(where: { slug: "${slug}" }, limit: 1) {
            items {
                sys {
                    id
                }
                slug
                image {
                    url
                    title
                    width
                    height
                }
            }
        }
    }
`
