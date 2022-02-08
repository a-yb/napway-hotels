import type { AppProps } from 'next/app'

import Footer from '../components/Footer'
import Layout from '../components/Layout'
import MobileNavbar from '../components/MobileNav'
import Navbar from '../components/Navbar'
import MobileNavProvider from '../context/MobileNavContext'

// GLOBAL CSS
import '../styles/globals.css'

// UTILS
import Compose from '../utils/Compose'

// PROVIDERS

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Compose components={[MobileNavProvider]}>
        <MobileNavbar />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Compose>
    </Layout>
  )
}

export default MyApp
