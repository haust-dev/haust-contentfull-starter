import { useQuery } from '@apollo/client'
import Image from 'next/image'
import { GET_PAGE } from '@/queries/getPage'
import { GetPageData, FullWidthImageSection } from '@/types/contentfulTypes'

export default function HomePage() {
  const { loading, error, data } = useQuery<GetPageData>(GET_PAGE)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const page = data.pageCollection.items[0]

  return (
    <div className="max-w-7xl mx-auto">
      <h1>{page.slug}</h1>
      {page.topSectionCollection.items.map((section, index) => (
        <div className="relative" key={index}>
          {isFullWidthImageSection(section) && (
            <>
              {section.image && (
                <div className="hidden md:block relative w-full h-40">
                  <Image
                    src={section.image.url}
                    alt={section.image.title}
                    priority
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
              {section.mobileImage && (
                <div className="block md:hidden">
                  <Image
                    src={section.mobileImage.url}
                    alt={section.mobileImage.title}
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
function isFullWidthImageSection(
  section: any,
): section is FullWidthImageSection {
  return 'image' in section
}
