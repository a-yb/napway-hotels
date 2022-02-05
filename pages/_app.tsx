import type { AppProps } from 'next/app'
import type { Provider } from 'react'

import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import HamburgerMenu from '../components/HamburgerMenu'

// GLOBAL CSS
import '../styles/globals.css'

// UTILS
import Compose from '../utils/Compose'
// PROVIDERS
import { HamburgerMenuProvider } from '../context/HamburgerMenuContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Compose components={[HamburgerMenuProvider]}>
        <HamburgerMenu />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Compose>
    </Layout>
  )
}

export default MyApp
