import React from 'react'
import Banner from '../Components/banner'
import CatageoryNav from '../Components/catageoryNav'
import Features from '../Components/features'
import Receipe from '../Components/receipe'
import About from '../Components/about'
import Contact from '../Components/contact'
import Marketing from '../Components/marketing'
import Subscribe from '../Components/subscribe'

function Home() {
  return (
    <>
        <Banner/>
        <CatageoryNav/>
        <Features/>
        <Receipe/>
        <About/>
        <Contact/>
        <Marketing/>
        <Subscribe/>
    </>
  )
}

export default Home
