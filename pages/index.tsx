import Head from 'next/head'
import ImageBlock from '../components/ImageBlock'
import ContentBlock from '../components/ContentBlock'
// import SliderBlock from '../components/SliderBlock';

export const Home = (): JSX.Element => (
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
            We were so happy you could party it up with us on March 30th, 2019!
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
          We met in the fall of 2013 and have been laughing together ever since.
        </p>
      </ContentBlock>
    </main>
    <style jsx>{`
      h1 {
        font-family: 'Shadow Into Light Two Regular';
      }

      h3 {
        font-family: 'Shadow Into Light Two Regular';
        text-align: center;
        font-size: 2.3rem;
      }

      p {
        font-family: 'Roboto Condensed Light';
        font-size: 1.5rem;
      }
    `}</style>
  </>
)

export default Home
