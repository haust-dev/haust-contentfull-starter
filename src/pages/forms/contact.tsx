import { useQuery } from '@apollo/client'
import { GetFormData, GetPageData } from '@/types/contentfulTypes'
import { createGetFormQuery } from '@/queries/getForm'
import Container from '@/components/UI/Container'
import { RichTextCopy } from '@/components/contentful/RichTextCopy'
import { PageLayout } from '@/components/UI/PageLayout'

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
      <div className="my-20">
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
