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
      {/* https://codepen.io/bakerkretzmar/pen/qyYMBv */}
      <style jsx>{`
        h3 {
          font-family: 'Shadow Into Light Two Regular';
          text-align: center;
          font-size: 3.5rem;
          margin-bottom: 0;
        }
        .gallery * {
          margin: 0;
        }

        .gallery-images {
          display: grid;
          grid-gap: 30px 20px;
          grid-template-columns: auto;
          grid-auto-flow: dense;
        }

        @media (min-width: 600px) and (max-width: 1099px) {
          .gallery-images {
            display: grid;
            grid-gap: 30px 20px;
            grid-template-columns: repeat(
              auto-fill,
              minmax(calc(50% - 20px), 1fr)
            );
            grid-auto-flow: dense;
          }
        }

        @media (min-width: 1100px) {
          .gallery-images {
            display: grid;
            grid-gap: 30px 20px;
            grid-template-columns: repeat(
              auto-fill,
              minmax(calc(25% - 20px), 1fr)
            );
            grid-auto-flow: dense;
          }
        }

        .gallery-image {
          display: block;
          width: 100%;
          grid-column-end: span 1;
          grid-row-end: span 1;
          position: relative;
          transform: scale(1, 1);
          transition: transform 0.125s ease;
          &:hover:not(.gallery-image__preview) {
            transform: scale(1.02, 1.02);
          }
        }

        .gallery-image__crop {
          display: block;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .gallery-image__media {
          display: block;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .gallery-image__caption {
          display: none;
        }

        @media (min-width: 600px) and (max-width: 1099px) {
          .gallery-image__preview {
            display: block;
            grid-column-end: span 2;
            grid-row-end: span 2;
          }
        }

        @media (min-width: 1100px) {
          .gallery-image__preview {
            display: block;
            grid-column-end: span 4;
            grid-row-end: span 4;
          }
        }

        .gallery-image__preview .gallery-image__caption {
          display: block;
          font-family: 'Inter UI', 'Roboto', 'Helvetica Neue', Helvetica, Arial,
            sans-serif;
          position: absolute;
          right: 0;
          bottom: 0;
          padding: 8px 14px;
          color: white;
          background: hsla(0, 0%, 20%, 0.9);
          text-align: justify;
        }
      `}</style>
    </div>
  )
}

export default PhotoGalleryBlock
