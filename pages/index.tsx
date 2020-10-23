import Head from 'next/head'
import useSWR from 'swr'
import { useUserAgent } from 'next-useragent'
import ImageBlock from '../components/ImageBlock'
import ContentBlock from '../components/ContentBlock'
import SliderBlock from '../components/SliderBlock'
import VideoBlock from '../components/VideoBlock'
import GalleryLink from '../components/GalleryLink'
import { fetcher } from '../utils/helpers'
import { UserAgent } from '../interfaces/'

type Props = {
  userAgent: UserAgent
}

export default function Home({ userAgent }: Props): JSX.Element {
  const { data } = useSWR('/api/get-photo-details/home', fetcher)

  return (
    <>
      <Head>
        <title>Rachel & Peter Wedding Photo Gallery</title>
        <meta
          name="description"
          content="The best part of getting married is getting the opportunity to
            celebrate with our loved ones. Thank you all for the continuous
            support and love."
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="application-name"
          content="Rachel & Peter Wedding Gallery"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Rachel & Peter Wedding Gallery"
        />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="msapplication-navbutton-color" content="#FFFFFF" />
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
        <ImageBlock
          image="wedding/site/peterrachelattablewithtext-version-two_lkoevj"
          altText="Rachel & Peter wedding"
          userAgent={userAgent}
          shadow={true}
        />
        <ContentBlock position="right">
          <h3>About</h3>
          <p>
            The best part of getting married is getting the opportunity to
            celebrate with our loved ones. Thank you all for the continuous
            support and love.
          </p>
          <p>
            <strong>
              We were so happy you could party it up with us on March 30th,
              2019!
            </strong>
          </p>
        </ContentBlock>
        <ImageBlock
          image="wedding/site/ring1-version-two_tkcxov"
          altText="wedding ring"
          userAgent={userAgent}
          shadow={true}
        />
        <ContentBlock position="left">
          <h3>Our History</h3>
          <p>
            We met in the fall of 2013 and have been laughing together ever
            since.
          </p>
        </ContentBlock>
        {data != undefined && (
          <SliderBlock slides={data.photos} userAgent={userAgent} />
        )}
        <div className="title">
          <h3>Our Love Story</h3>
        </div>
        <VideoBlock />
        <GalleryLink />
      </main>
      <style jsx>{`
        h1 {
          font-family: 'Shadow Into Light Two Regular';
        }

        h3 {
          font-family: 'Shadow Into Light Two Regular';
          text-align: center;
          font-size: 2.5rem;
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
          margin-top: 4em;
        }

        @min-width: (min-width: 1225px) {
          h3 {
            font-size: 3.5rem;
          }
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
