import { useQuery } from '@apollo/client'
import { GetFormData, GetImageBySlugData } from '@/types/contentfulTypes'
import Image from 'next/image'
import { createGetContainedImageQuery } from '@/queries/getContainedImage'
import Link from 'next/link'
import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  const slug = 'logo'
  const { loading, error, data } = useQuery<GetImageBySlugData>(
    createGetContainedImageQuery(slug),
  )

  if (loading) return <p></p>
  if (error) return <p></p>
  if (!data) return <p>Something went wrong...</p>
  const image = data.containedImageCollection.items[0].image
  return (
    <section className="my-4 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="mb-4">
          <div className="relative flex justify-between items-center w-full">
            <div className="uppercase font-medium">
              <p>Back to homepage</p>
            </div>
            <div className="relative w-20">
              <Link href="/">
                <Image
                  src={image.url}
                  style={{ objectFit: 'contain' }}
                  alt={image.title}
                  height={image.height}
                  width={image.width}
                />
              </Link>
            </div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}
