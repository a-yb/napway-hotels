import type { AppProps } from 'next/app'

import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

// GLOBAL CSS
import '../styles/globals.css'

// UTILS
import Compose from '../utils/Compose'

// PROVIDERS

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Compose components={[]}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Compose>
    </Layout>
  )
}

export default MyApp
