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
      <style jsx>{`
        h3 {
          font-family: 'Shadow Into Light Two Regular';
          text-align: center;
          font-size: 3.5rem;
          margin-bottom: 0;
        }
      `}</style>
    </div>
  )
}

export default PhotoGalleryBlock
