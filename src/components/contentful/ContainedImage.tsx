import React from 'react'
import Image from 'next/image'

export type ContainedImageProps = {
  title?: string
  src: string
  alt: string
}

export function ContainedImage({ src, alt }: ContainedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      loading="eager"
      fill
      style={{ objectFit: 'cover' }}
    />
  )
}
