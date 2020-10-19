import React from 'react'
import { Photo } from '../interfaces'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { imageUrl } from '../utils/helpers'

export default function ImageBlock({
  image,
  altText,
  options,
}: Photo): JSX.Element {
  return (
    <>
      <LazyLoadImage
        alt={altText}
        height="auto"
        src={imageUrl(options, image)}
        width="100%"
        effect="blur"
      />
    </>
  )
}
