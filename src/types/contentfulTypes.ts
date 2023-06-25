export type Asset = {
  url: string
  title: string
  width: number
  height: number
}

export type FullWidthImageSection = {
  image: Asset
  mobileImage: Asset
}

export type Page = {
  sys: {
    id: string
  }
  slug: string
  topSectionCollection: {
    items: FullWidthImageSection[]
  }
}

export type GetPageData = {
  pageCollection: {
    items: Page[]
  }
}
