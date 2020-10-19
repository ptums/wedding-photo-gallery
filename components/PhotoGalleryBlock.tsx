import React from 'react'
// import Carousel from 'react-multi-carousel'
// import { imageUrl } from '../utils/helpers'
// import { Slide } from '../interfaces'

type Props = {
  title: string
}

const PhotoGalleryBlock = ({ title }: Props) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  )
}

export default PhotoGalleryBlock
