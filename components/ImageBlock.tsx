import React from 'react'
import { Photo } from '../interfaces'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { formatImageUrl } from '../utils/helpers'

export default function ImageBlock({
  image,
  altText,
  userAgent,
  shadow,
}: Photo): JSX.Element {
  return (
    <>
      {userAgent.deviceType === 'desktop' && (
        <LazyLoadImage
          alt={altText}
          height="auto"
          src={formatImageUrl(shadow, image, null, userAgent.os)}
          width="100%"
          effect="blur"
        />
      )}
      {userAgent.deviceType === 'tablet' && (
        <LazyLoadImage
          alt={altText}
          height="auto"
          src={formatImageUrl(shadow, image, null, userAgent.os)}
          width="100%"
          effect="blur"
        />
      )}
      {userAgent.deviceType === 'mobile' && (
        <LazyLoadImage
          alt={altText}
          height="auto"
          src={formatImageUrl(shadow, image, 'c_scale,w_464', userAgent.os)}
          width="100%"
          effect="blur"
        />
      )}
    </>
  )
}
