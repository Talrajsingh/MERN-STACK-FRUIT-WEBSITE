import React from 'react'
import MainBanner from '../components/MainBanner'
import Category from '../components/Category'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'
import News from '../components/News'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner/>
      <Category/>
      <BestSeller/>
      <BottomBanner/>
      <News/>
      
    </div>
  )
}

export default Home
