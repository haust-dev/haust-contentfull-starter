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
        <div className="relative w-52 h-32 text-center mx-auto mb-4">
          <Link href="/">
            <Image
              src={image.url}
              style={{ objectFit: 'contain' }}
              alt={image.title}
              fill
            />
          </Link>
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}
