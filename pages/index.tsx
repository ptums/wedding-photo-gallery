import Head from 'next/head'
import useSWR from 'swr'
import ImageBlock from '../components/ImageBlock'
import ContentBlock from '../components/ContentBlock'
import SliderBlock from '../components/SliderBlock'
import VideoBlock from '../components/VideoBlock'
import GalleryLink from '../components/GalleryLink'
import { fetcher } from '../utils/helpers'

export default function Home(): JSX.Element {
  const { data } = useSWR('/api/get-photo-details/home', fetcher)

  return (
    <>
      <Head>
        <title>Rachel & Peter Wedding Photo Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ImageBlock
          image="wedding/site/peterrachelattablewithtext-version-two_lkoevj.webp"
          altText="Rachel & Peter wedding"
          options="/e_shadow:35,r_10/"
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
          image="wedding/site/ring1-version-two_tkcxov.webp"
          altText="wedding ring"
          options="/e_shadow:300,r_10/"
        />
        <ContentBlock position="left">
          <h3>Our History</h3>
          <p>
            We met in the fall of 2013 and have been laughing together ever
            since.
          </p>
        </ContentBlock>
        {data != undefined && <SliderBlock slides={data.photos} />}
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
