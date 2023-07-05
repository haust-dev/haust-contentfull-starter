import { Document } from '@contentful/rich-text-types'

export interface DocumentProp {
  json: Document
}
export type Asset = {
  url: string
  title: string
  width: number
  height: number
}

export type ContentfulImageSection = {
  image: Asset
  mobileImage: Asset
}

export type Page = {
  sys: {
    id: string
  }
  slug: string
  topSectionCollection: {
    items: ContentfulImageSection[]
  }
}

export type EmbededForm = {
  sys: {
    id: string
  }
  slug: string
  content: string
  contentTopInfo: DocumentProp
}

export type GetPageData = {
  pageCollection: {
    items: Page[]
  }
}
export type GetFormData = {
  htmlEmbedCollection: {
    items: EmbededForm[]
  }
}
export type ContentfulRtCopySection = {
  __typename: string
  title: string
  slug: string
  copy: {
    json: Document
  }
}
export type ContainedImage = {
  sys: {
    id: string
  }
  slug: string
  image: Asset
  title: string
}

export type GetImageBySlugData = {
  containedImageCollection: {
    items: ContainedImage[]
  }
}
