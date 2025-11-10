import React from 'react'
import AuthorHeroSection from '../components/author/AuthorHeroSection'
import AuthorStorySection from '../components/author/AuthorStorySection'
import AuthorApproachSection from '../components/author/AuthorApprochSection'
import AuthorInPracticeSection from '../components/author/AuthorInPracticeSection'
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