import { useQuery } from '@apollo/client'
import Image from 'next/image'
import { GET_PAGE } from '@/queries/getPage'
import {
  GetPageData,
  FullWidthImageSection,
  ContentfulImageSection,
} from '@/types/contentfulTypes'
import { FullWidthImage } from '@/components/contentful/FullWidthImage'
import { ContainedImage } from '@/components/contentful/ContainedImage'

export default function HomePage() {
  const { loading, error, data } = useQuery<GetPageData>(GET_PAGE)

  if (loading) return <p>Loading...</p>
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
                alt={section.image.alt}
                width={section.image.width}
                height={section.image.height}
                mobileSrc={
                  section.mobileImage ? section.mobileImage.url : undefined
                }
              />
            </>
          )}

          {isContainedImage(section) && (
            <>
              {section.image && (
                <div className="hidden md:block relative max-w-2xl h-40 mx-auto mt-20">
                  <ContainedImage
                    src={section.image.url}
                    alt={section.image.alt}
                  />
                </div>
              )}
              {section.mobileImage && (
                <div className="block md:hidden relative max-w-4xl h-40 mx-auto">
                  <ContainedImage
                    src={section.mobileImage.url}
                    alt={section.mobileImage.alt}
                  />
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  )
}

function isFullWidthImage(section: any): section is FullWidthImageSection {
  return section.__typename === 'FullWidthImage'
}

function isContainedImage(section: any): section is ContentfulImageSection {
  return section.__typename === 'ContainedImage'
}
