import { useQuery } from '@apollo/client'
import Image from 'next/image'
import { GET_PAGE } from '@/queries/getPage'
import { GetPageData, FullWidthImageSection } from '@/types/contentfulTypes'
import { FullWidthImage } from '@/components/contentful/FullWidthImage'

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
              {section.image && (
                <div className="hidden md:block relative">
                  <FullWidthImage
                    src={section.image.url}
                    alt={section.image.alt}
                    width={section.image.width}
                    height={section.image.height}
                  />
                </div>
              )}
              {section.mobileImage && (
                <div className="block md:hidden relative w-full">
                  <FullWidthImage
                    src={section.mobileImage.url}
                    alt={section.mobileImage.alt}
                    width={section.mobileImage.width}
                    height={section.mobileImage.height}
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

// Helper function to narrow down the type
function isFullWidthImage(section: any): section is FullWidthImageSection {
  return 'image' in section
}
