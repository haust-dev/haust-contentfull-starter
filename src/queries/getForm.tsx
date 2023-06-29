import { gql } from '@apollo/client'
export const createGetFormQuery = (slug: string) => gql`
    query GetForm {
        htmlEmbedCollection(where: { slug: "${slug}" }, limit: 1) {
            items {
                sys {
                    id
                }
                slug
                content
                contentTopInfo {
                    json
                }
            }
        }
    }
`
