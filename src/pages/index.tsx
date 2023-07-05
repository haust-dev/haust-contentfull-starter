import { useQuery } from '@apollo/client'
import { RichTextCopy } from '@/components/contentful/RichTextCopy'

import { GET_PAGE } from '@/queries/getPage'
import {
  GetPageData,
  ContentfulImageSection,
  ContentfulRtCopySection,
} from '@/types/contentfulTypes'
import { FullWidthImage } from '@/components/contentful/FullWidthImage'
import { ContainedImage } from '@/components/contentful/ContainedImage'
import Link from 'next/link'

export default function HomePage() {
  const { loading, error, data } = useQuery<GetPageData>(GET_PAGE)

  if (loading) return
  if (error) return <p>Error :(</p>
  if (!data) return <p>No data :(</p>

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
                <div className="relative max-w-sm md:max-w-xl h-40 mx-auto md:mb-10">
                  <ContainedImage
                    src={section.image.url}
                    alt={section.image.title}
                  />
                </div>
              )}
              {section.mobileImage && (
                <div className="hidden relative max-w-4xl h-40 mx-auto my-10">
                  <ContainedImage
                    src={section.mobileImage.url}
                    alt={section.mobileImage.title}
                  />
                </div>
              )}
            </>
          )}
          {isRichTextCopy(section) && (
            <div className="mx-auto text-center mt-12 md:my-10 max-w-4xl px-8">
              <RichTextCopy document={section.copy} />
            </div>
          )}
        </div>
      ))}
      <div className="flex justify-center items-center flex-col sm:flex-row gap-2 md:gap-10 px-10 max-w-4xl mx-auto mb-10">
        <div className="flex items-center border text-center w-full max-w-xs border-gray-900 rounded-3xl leading-none font-medium">
          <Link className="w-full block p-2" href="/forms/wholesale-request">
            Wholesale Request
          </Link>
        </div>
        <div className="flex items-center border text-center w-full max-w-xs border-gray-900 rounded-3xl leading-none font-medium">
          <Link className="w-full block p-2" href="/forms/contact">
            Contact
          </Link>
        </div>
        <button className="flex items-center border text-center w-full max-w-xs border-gray-900 rounded-3xl leading-none font-medium">
          <Link className="w-full block p-2" href="/forms/warranty-claim">
            Warranty Claim
          </Link>
        </button>
      </div>
    </div>
  )
}

function isFullWidthImage(section: any): boolean {
  return section.__typename === 'FullWidthImage'
}

function isContainedImage(section: any): section is ContentfulImageSection {
  return section.__typename === 'ContainedImage'
}

function isRichTextCopy(
  section: ContentfulImageSection | ContentfulRtCopySection,
): section is ContentfulRtCopySection {
  return (section as ContentfulRtCopySection).copy !== undefined
}
