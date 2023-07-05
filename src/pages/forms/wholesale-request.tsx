import { useQuery } from '@apollo/client'
import { GetFormData, GetPageData } from '@/types/contentfulTypes'
import { createGetFormQuery } from '@/queries/getForm'
import { RichTextCopy } from '@/components/contentful/RichTextCopy'
import { Container } from '@/components/UI/Container'

export default function WholesaleRequest() {
  const slug = 'wholesale-request' // replace with the desired slug
  const { loading, error, data } = useQuery<GetFormData>(
    createGetFormQuery(slug),
  )
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  if (!data) return <p>No data :(</p>

  const form = data.htmlEmbedCollection.items[0]
  const contentTopInfo = data.htmlEmbedCollection.items[0].contentTopInfo

  return (
    <Container>
      {contentTopInfo && (
        <div className="mb-10 text-center">
          <RichTextCopy document={contentTopInfo} />
        </div>
      )}
      <div
        dangerouslySetInnerHTML={{
          __html: form.content,
        }}
      />
    </Container>
  )
}
