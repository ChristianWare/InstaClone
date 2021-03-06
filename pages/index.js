import Head from 'next/head'
import Header from '../src/comps/header/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Insta Clone App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  )
}
