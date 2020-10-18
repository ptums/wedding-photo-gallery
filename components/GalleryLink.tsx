import React from 'react'
import ButtonLink from './ButtonLink'

const GalleryLink = () => (
  <div>
    <p>Now I know what you are really here for...</p>
    <p>
      <strong>Pictures!</strong>
    </p>
    <p>Here&apos;s a link to our wedding photo album, enjoy.</p>
    <ButtonLink />
    <style jsx>{`
      div {
        margin-top: 3.5rem;
        margin-bottom: 3.5rem;
        padding: 2em;
        text-align: center;
        background-color: #e9e9e9;
      }

      p {
        font-family: 'Roboto Condensed Light';
        font-size: 1.5rem;
        margin-bottom: -12px;
      }

      strong {
        font-size: 1.6rem;
      }
    `}</style>
  </div>
)

export default GalleryLink
