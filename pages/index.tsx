import type { NextPage } from 'next'
import Hero from '../components/sections/Hero'
import WhyNapwayHotels from '../components/sections/WhyNapwayHotels'
// import MyImageGallery from '../components/ImageGallery'

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <WhyNapwayHotels />
    </div>
  )
}

export default Home
