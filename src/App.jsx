import { useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import OverviewCounter from './components/overview/OverviewCounter'
import BannerDetails from './components/bannerDetails/BannerDetails'
import SimpleBanner from './components/simpleBanner/SimpleBanner'
import Blogs from './components/blogs/Blogs'
import Footer from './components/footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  
  useEffect(() => {
    AOS.init(
      {
        offset:100,
        duration: 500,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom'
      }
    )
    AOS.refresh()
  },[])

  return (
    <>
    <Navbar/>
    <Hero/>
    <OverviewCounter/>
    <BannerDetails/>
    <BannerDetails reverse={true}/>
    <SimpleBanner/>
    <Blogs/>
    <Footer/>
 
 
    </>
  )
}

export default App
