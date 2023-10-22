import React from 'react';
import Navbar from './Navbar';
import PopularSlider from './PopularSlider';
import TrendingSlider from './TrendingSlider';

const Home = () => {
  return (
    <>
    <div className='main m-0 p-0'>
      <Navbar/>
      <PopularSlider/>
      <TrendingSlider/>
      </div>
      
      
    </>
  )
}

export default Home
