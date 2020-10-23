import React from 'react'
import { Slide, UserAgent } from '../interfaces'
import ImageBlock from './ImageBlock'
import LightBoxView from './LightBoxView'

type Props = {
  title: string
  slides: Slide[]
  userAgent: UserAgent
  shadow: boolean
}

const PhotoGalleryBlock = ({ title, slides, userAgent, shadow }: Props) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className="gallery">
        {slides.length > 0 &&
          slides.map((slide) => (
            <div key={slide._id} className="gallery-image">
              <ImageBlock
                image={slide.image}
                altText={slide.altText}
                userAgent={userAgent}
                shadow={shadow}
              />
              <LightBoxView image={slide.image} />
            </div>
          ))}
      </div>
      <style jsx>{`
        h3 {
          font-family: 'Shadow Into Light Two Regular';
          text-align: center;
          margin-bottom: 14px;
          font-size: 1.5rem;
        }

        .gallery {
          display: grid;
          grid-template-columns: 100%;
        }

        @media (min-width: 900px) {
          h3 {
            font-size: 3rem;
          }

          .gallery {
            display: grid;
            grid-template-columns: 400px 400px 400px;
            margin: auto;
          }

          .gallery-image {
            margin-right: 10px;
          }
        }
      `}</style>
    </div>
  )
}

export default PhotoGalleryBlock
