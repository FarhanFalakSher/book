import React from 'react'
import AuthorHeroSection from '../components/Author/AuthorHeroSection'
import AuthorStorySection from '../components/Author/AuthorStorySection'
import AuthorApproachSection from '../components/Author/AuthorApprochSection'
import AuthorInPracticeSection from '../components/Author/AuthorInPracticeSection'
import Footer from './Footer'

const Author = () => {
  return (
    <div>
        <AuthorHeroSection/>
        <AuthorStorySection/>
        <AuthorApproachSection/>
        <AuthorInPracticeSection/>
        <Footer/>
    </div>
  )
}

export default Author