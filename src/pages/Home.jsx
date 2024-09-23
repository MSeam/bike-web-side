import React from 'react'
import Banner from '../component/Banner'
import News from '../component/News'
import UserReview from '../component/UserReview'
import Questions from '../component/Questions'
import Footer from '../component/Footer'
import Fetured from '../component/Fetured'

const Home = () => {
  return (
    <div>
        <Banner />
        <Fetured />
        <News />
        <UserReview />
        <Questions />
        <Footer />
    </div>
  )
}

export default Home