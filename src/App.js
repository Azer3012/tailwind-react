import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Categories from './components/Categories'
import Campaigns from './components/Campaigns'
import Favorites from './components/Favorites'
import MobileApp from './components/MobileApp'
import Cards from './components/Cards'
import Footer from './components/Footer'
import { useWindowWidth } from "@react-hook/window-size";


const App = () => {
  const windowWidth = useWindowWidth();

  return (
    <>
    <Header/>
    {windowWidth<=768 &&<Campaigns/>}
    <HeroSection/>
    <Categories/>
    {windowWidth>768 &&<Campaigns/>}
    <Favorites/>
    <MobileApp/>
    <Cards/>
    <Footer/>
    
    </>
  )
}

export default App