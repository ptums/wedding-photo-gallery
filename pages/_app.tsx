import type { AppProps } from 'next/app'
import Link from 'next/link'
import 'react-multi-carousel/lib/styles.css'
import 'react-image-lightbox/style.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
  )
}

export default MyApp
