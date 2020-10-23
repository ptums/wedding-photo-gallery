export type Slide = {
  _id: string
  image: string
  altText: string
  category: string
}

export type Photo = {
  image: string
  altText: string
  userAgent: UserAgent
  shadow: boolean
}

export type UserAgent = {
  deviceType: string
  os: string
}
