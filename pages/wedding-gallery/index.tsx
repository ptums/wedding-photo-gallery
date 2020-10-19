import React from 'react'
import Head from 'next/head'
import useSWR from 'swr'
import PhotoGalleryBlock from '../../components/PhotoGalleryBlock'
import { fetcher } from '../../utils/helpers'

export const WeddingGallery = (): JSX.Element => {
  const { data: beforeCeremonySlides } = useSWR(
    '/api/get-photo-details/before-ceremony',
    fetcher
  )
  const { data: ceremonySlides } = useSWR(
    '/api/get-photo-details/ceremony',
    fetcher
  )
  const { data: afterCeremonySlides } = useSWR(
    '/api/get-photo-details/after-ceremony',
    fetcher
  )
  const { data: beforeReceptionSlides } = useSWR(
    '/api/get-photo-details/before-reception',
    fetcher
  )
  const { data: receptionSlides } = useSWR(
    '/api/get-photo-details/reception',
    fetcher
  )
  const { data: peterAndRachel } = useSWR(
    '/api/get-photo-details/peter-and-rachel',
    fetcher
  )

  return (
    <>
      <Head>
        <title>Rachel & Peter Wedding Photo Gallery - Gallery Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {beforeCeremonySlides !== undefined && (
          <PhotoGalleryBlock
            title="Before Ceremony"
            slides={beforeCeremonySlides.photos}
          />
        )}
        {ceremonySlides !== undefined && (
          <PhotoGalleryBlock title="Ceremony" slides={ceremonySlides.photos} />
        )}
        {afterCeremonySlides !== undefined && (
          <PhotoGalleryBlock
            title="After Ceremony"
            slides={afterCeremonySlides.photos}
          />
        )}
        {beforeReceptionSlides !== undefined && (
          <PhotoGalleryBlock
            title="Before Reception"
            slides={beforeReceptionSlides.photos}
          />
        )}
        {receptionSlides !== undefined && (
          <PhotoGalleryBlock
            title="Reception"
            slides={receptionSlides.photos}
          />
        )}
        {peterAndRachel !== undefined && (
          <PhotoGalleryBlock
            title="Just Peter & Rachel"
            slides={peterAndRachel.photos}
          />
        )}
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
