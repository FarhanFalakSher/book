import React from 'react'
import HomeHero from "../components/HomeHero"
import HomeHighlightsSection from '../components/HomeHighlightsSection'
import HomeInsideSection from '../components/HomeInsideSection'
import AuthorSection from '../components/AuthorSection'
import GetBookSection from '../components/GetBookSection'
import AboutTheBook from '../components/AboutTheBook'
import Footer from './Footer'


const Home = () => {
  return (
    <div>
 <HomeHero/>
 <AboutTheBook/>
 <HomeHighlightsSection/>
 <HomeInsideSection/>
 <AuthorSection/>
 <GetBookSection/>
 <Footer/>
    </div>
  )
}

export default Home