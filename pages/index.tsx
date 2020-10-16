import Head from 'next/head'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Wedding Photo Gallery</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>
       Wedding Photo Gallery
      </h1>
    </main>
  </div>
)

export default Home
