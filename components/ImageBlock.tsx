import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

type Props = {
  image: string
  altText: string
  options: string
}

export default function ImageBlock({
  image,
  altText,
  options,
}: Props): JSX.Element {
  const imageUrl = `https://res.cloudinary.com/petertumulty/image/upload${
    options ? options : '/'
  }v1602980583/${image}`

  return (
    <>
      <LazyLoadImage
        alt={altText}
        height="auto"
        src={imageUrl}
        width="100%"
        effect="blur"
      />
    </>
  )
}
