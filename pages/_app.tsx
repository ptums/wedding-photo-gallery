import type { AppProps } from 'next/app'

import 'react-multi-carousel/lib/styles.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="wedding-gallery">
      <header>
        <h1>
          Rachel & Peter
          <span>2019</span>
        </h1>
      </header>
      <Component {...pageProps} />
      <footer>
        <p>Peter Tumulty 2020</p>
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
        `}
      </style>
    </div>
  )
}

export default MyApp
