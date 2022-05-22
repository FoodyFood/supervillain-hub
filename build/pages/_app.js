// Next.js  Imports
import Head from 'next/head'

// Components
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'

// Styles
import '../styles/globals.css'


export default function Supervillain({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Supervillain Hub</title>
        <meta name="description" content="infra-push" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar/>

      <Component {...pageProps} />

      {/* <Footer /> */}
    </>
  )
}

