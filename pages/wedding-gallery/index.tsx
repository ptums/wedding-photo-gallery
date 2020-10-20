import React from 'react'
import Head from 'next/head'
import useSWR from 'swr'
import { fetcher } from '../../utils/helpers'
import PhotoGalleryBlock from '../../components/PhotoGalleryBlock'

export const WeddingGallery = (): JSX.Element => {
  const { data: afterCeremony } = useSWR(
    '/api/get-photo-details/after-ceremony',
    fetcher
  )

  return (
    <>
      <Head>
        <title>Rachel & Peter Wedding Photo Gallery - Gallery Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {afterCeremony !== undefined && (
          <PhotoGalleryBlock
            title="After Ceremony"
            slides={afterCeremony.photos}
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
