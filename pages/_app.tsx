import type { AppProps } from 'next/app'

import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

import HamburgerMenu from '../components/HamburgerMenu'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {/* <HamburgerMenu /> */}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  )
}

export default MyApp
