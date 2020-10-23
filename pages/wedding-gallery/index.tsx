import React from 'react'
import Head from 'next/head'
import useSWR from 'swr'
import { useUserAgent } from 'next-useragent'
import { fetcher } from '../../utils/helpers'
import PhotoGalleryBlock from '../../components/PhotoGalleryBlock'
import { UserAgent } from '../../interfaces/'

type Props = {
  userAgent: UserAgent
}

export default function WeddingGallery({ userAgent }: Props): JSX.Element {
  const { data: afterCeremony } = useSWR(
    '/api/get-photo-details/after-ceremony',
    fetcher
  )

  return (
    <>
      <Head>
        <title>Rachel & Peter Wedding Gallery</title>
        <meta
          name="description"
          content="Get the pictures of our wedding day including the ceremony and the reception."
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="NJ Labor Attorneys" />
        <meta name="apple-mobile-web-app-title" content="NJ Labor Attorneys" />
        <meta name="theme-color" content="#061F3B" />
        <meta name="msapplication-navbutton-color" content="#061F3B" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-starturl" content="/" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="192x192"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="512x512"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" type="image/png" sizes="16x16" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>
      <main>
        {afterCeremony !== undefined && (
          <PhotoGalleryBlock
            title="After Ceremony"
            slides={afterCeremony.photos}
            userAgent={userAgent}
            shadow={true}
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

export async function getServerSideProps({ req }) {
  // get current device
  const ua = useUserAgent(req.headers['user-agent'])
  let device

  if (ua.isDesktop) {
    device = 'desktop'
  }

  if (ua.isMobile) {
    device = 'mobile'
  }

  if (ua.isTablet) {
    device = 'tablet'
  }

  return {
    props: {
      userAgent: {
        deviceType: device,
        os: ua.os,
      },
    },
  }
}
