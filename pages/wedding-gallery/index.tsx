import React from 'react'
import Head from 'next/head'
import PhotoGalleryBlock from '../../components/PhotoGalleryBlock'

export const WeddingGallery = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Rachel & Peter Wedding Photo Gallery - Gallery Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PhotoGalleryBlock title="Before Ceremony" />
        <PhotoGalleryBlock title="Ceremony" />
        <PhotoGalleryBlock title="After Ceremony" />
        <PhotoGalleryBlock title="Before Reception" />
        <PhotoGalleryBlock title="Reception" />
        <PhotoGalleryBlock title="Rachel & Peter" />
      </main>
      <style jsx>{`
        h1 {
          font-family: 'Shadow Into Light Two Regular';
        }

        h3 {
          font-family: 'Shadow Into Light Two Regular';
          text-align: center;
          font-size: 3.5rem;
          margin-bottom: 0;
        }

        p {
          font-family: 'Roboto Condensed Light';
          font-size: 1.5rem;
        }

        .title {
          width: 100%;
          display: block;
          text-align: center;
        }
      `}</style>
    </>
  )
}

export default WeddingGallery
