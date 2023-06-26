import React from 'react'
import Image from 'next/image'

export type FullWidthImageProps = {
  title?: string
  src: string
  alt: string
  width: number
  height: number
  mobileSrc?: string
}

export function FullWidthImage({
  src,
  alt,
  width,
  height,
  mobileSrc,
}: FullWidthImageProps) {
  return (
    <div>
      {mobileSrc ? (
        <div className="md:hidden">
          <Image
            src={mobileSrc}
            alt={alt}
            loading="eager"
            width={width}
            height={height}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      ) : null}

      <div className={mobileSrc ? 'hidden md:block' : ''}>
        <Image
          src={src}
          alt={alt}
          loading="eager"
          width={width}
          height={height}
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  )
}
