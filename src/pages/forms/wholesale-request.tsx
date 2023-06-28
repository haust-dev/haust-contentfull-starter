import { useQuery } from '@apollo/client'
import { GetFormData, GetPageData } from '@/types/contentfulTypes'
import { createGetFormQuery } from '@/queries/getForm'
import Container from '@/components/UI/Container'
import { RichTextCopy } from '@/components/contentful/RichTextCopy'

export default function WholesaleRequest() {
  const slug = 'wholesale-request' // replace with the desired slug
  const { loading, error, data } = useQuery<GetFormData>(
    createGetFormQuery(slug),
  )
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  const form = data.htmlEmbedCollection.items[0]
  const contentTopInfo = data.htmlEmbedCollection.items[0].contentTopInfo

  return (
    <Container>
      {contentTopInfo && (
        <div className="my-20 text-center">
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
