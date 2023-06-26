import React from 'react'
import Image from 'next/image'

export type FullWidthImageProps = {
  title?: string
  src: string
  alt: string
  width: number
  height: number
}

export function FullWidthImage({
  title,
  src,
  alt,
  width,
  height,
}: FullWidthImageProps) {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        loading="eager"
        priority
        width={width}
        height={height}
        style={{ objectFit: 'contain', width: '100%' }}
      />
    </div>
  )
}
