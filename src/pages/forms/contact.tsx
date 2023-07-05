import { useQuery } from '@apollo/client'
import { GetFormData } from '@/types/contentfulTypes'
import { createGetFormQuery } from '@/queries/getForm'
import { RichTextCopy } from '@/components/contentful/RichTextCopy'
import { Container } from '@/components/UI/Container'

export default function ContactForm() {
  const slug = 'contact-form'
  const { loading, error, data } = useQuery<GetFormData>(
    createGetFormQuery(slug),
  )

  if (loading) return <p></p>
  if (error) return <p>Error :(</p>
  if (!data) return <p>No data :(</p>

  const form = data.htmlEmbedCollection.items[0]
  const contentTopInfo = data.htmlEmbedCollection.items[0].contentTopInfo

  return (
    <Container>
      <div className="mb-10">
        <RichTextCopy document={contentTopInfo} />
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: data.htmlEmbedCollection.items[0].content,
        }}
      />
    </Container>
  )
}
