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

export type GetPageData = {
  pageCollection: {
    items: Page[]
  }
}
