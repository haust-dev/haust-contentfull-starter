import { useQuery } from '@apollo/client'
import { RichTextCopy } from '@/components/contentful/RichTextCopy'

import { GET_PAGE } from '@/queries/getPage'
import { GetPageData, ContentfulImageSection } from '@/types/contentfulTypes'
import { FullWidthImage } from '@/components/contentful/FullWidthImage'
import { ContainedImage } from '@/components/contentful/ContainedImage'
import Link from 'next/link'

export default function HomePage() {
  const { loading, error, data } = useQuery<GetPageData>(GET_PAGE)

  if (loading) return
  if (error) return <p>Error :(</p>

  const page = data.pageCollection.items[0]

  return (
    <div className="mx-auto">
      {page.topSectionCollection.items.map((section, index) => (
        <div className="relative" key={index}>
          {isFullWidthImage(section) && (
            <>
              <FullWidthImage
                src={section.image.url}
                alt={section.image.title}
                width={section.image.width}
                height={section.image.height}
                mobileSrc={section.mobileImage ? section.mobileImage.url : ''}
              />
            </>
          )}

          {isContainedImage(section) && (
            <>
              {section.image && (
                <div className="hidden md:block relative max-w-2xl h-40 mx-auto my-10">
                  <ContainedImage
                    src={section.image.url}
                    alt={section.image.title}
                  />
                </div>
              )}
              {section.mobileImage && (
                <div className="block md:hidden relative max-w-4xl h-40 mx-auto">
                  <ContainedImage
                    src={section.mobileImage.url}
                    alt={section.mobileImage.title}
                  />
                </div>
              )}
            </>
          )}
          {isRichTextCopy(section) && (
            <div className="mx-auto text-center my-10 max-w-4xl">
              <RichTextCopy document={section.copy} />
            </div>
          )}
        </div>
      ))}
      <div className="flex justify-center gap-10">
        <div className="border border-gray-900 rounded-3xl py-2 px-4 leading-none font-medium">
          <Link href="/forms/wholesale-request">Wholesale Request</Link>
        </div>
        <div className="border border-gray-900 rounded-3xl py-2 px-4 leading-none font-medium">
          <Link href="/forms/contact">Contact</Link>
        </div>
        <button className="border border-gray-900 rounded-3xl py-2 px-4 leading-none font-medium">
          Form Link
        </button>
      </div>
    </div>
  )
}

function isFullWidthImage(section: any): section is FullWidthImage {
  return section.__typename === 'FullWidthImage'
}

function isContainedImage(section: any): section is ContentfulImageSection {
  return section.__typename === 'ContainedImage'
}

function isRichTextCopy(section: any): section is RichTextCopy {
  return section.__typename === 'RtCopy'
}
