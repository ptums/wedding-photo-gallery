import type { AppProps } from 'next/app'
import Link from 'next/link'
import Head from 'next/head'
import 'react-multi-carousel/lib/styles.css'
import 'react-image-lightbox/style.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
          name="viewport"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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
      <div id="wedding-gallery">
        <header>
          <Link href="/">
            <a>
              <h1>
                Rachel & Peter
                <span>2019</span>
              </h1>
            </a>
          </Link>
        </header>
        <Component {...pageProps} />
        <footer>
          <p>
            That&apos;s all we have, thank you for visiting!
            <br />
            Peter Tumulty 2020
          </p>
        </footer>
        <style jsx>
          {`
            #wedding-gallery {
              max-width: 100%;
              overflow: hidden;
            }
            header {
              text-align: center;
            }
            h1 {
              font-family: 'Shadow Into Light Two Regular';
              font-size: 2.3rem;
            }
            span {
              display: block;
              width: 100%;
              margin-top: -10px;
            }

            a {
              color: #000;
              text-decoration: none;
            }

            a:hover {
              text-decoration: underline;
              cursor: pointer;
            }

            footer {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 1.2rem;
              font-family: 'Shadow Into Light Two Regular';
            }
          `}
        </style>
      </div>
    </>
  )
}

export default MyApp
