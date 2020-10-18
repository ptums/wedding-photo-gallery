import React from 'react'
import { Image } from '../interfaces'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function ImageBlock({
  image,
  altText,
  options,
}: Image): JSX.Element {
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
