import React from 'react'
import { Slide } from '../interfaces'
import ImageBlock from './ImageBlock'
import { imageUrl } from '../utils/helpers'

type Props = {
  title: string
  slides: Slide[]
}

const PhotoGalleryBlock = ({ title, slides }: Props) => {
  return (
    <div>
      <h3>{title}</h3>
      {slides.length > 0 &&
        slides.map((slide) => (
          <div key={slide._id}>
            <ImageBlock
              image={slide.image}
              altText={slide.altText}
              options={slide.options}
            />
            <a href={imageUrl(slide.options, slide.image)} download>
              Download Photo
            </a>
          </div>
        ))}
      <style jsx>{`
        h3 {
          font-family: 'Shadow Into Light Two Regular';
          text-align: center;
          font-size: 3.5rem;
          margin-bottom: 0;
        }

        a {
          font-family: 'Roboto Condensed Light';
          font-size: 1.3rem;
          margin-bottom: 1.1em;
          display: block;
          color: purple;
        }

        a:hover {
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

export default PhotoGalleryBlock
