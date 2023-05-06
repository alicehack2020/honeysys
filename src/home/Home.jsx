import React from 'react'
import Banner from '../components/Banner'
import ProductCarousel from '../components/ProductCarousel'
import Category from './Category'
const Home = () => {
  return (
      <div>
      <Banner />
      <ProductCarousel />
      <Category/>
     </div>
  )
}

export default Home