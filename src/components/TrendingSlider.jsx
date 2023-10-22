import React from 'react';
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const TrendingSlider = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
      //fetch data here and call setData with the result.
      const api = await fetch("https:www.themealdb.com/api/json/v1/1/filter.php?a=Indian");
      const data = await api.json();
      
      setData(data.meals)
      console.log(data.meals)
    }
    fetchData();

  },[]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: "linear"
  };
  return (
    <>
    <div className='h-[56vh] w-[92%] m-16 '>

    <h1 className='text-4xl text-[#af5911] font-semibold text-center uppercase mb-2'>Trending Dishes🔥</h1>
        
        <Slider {...settings}>
          
        {data.map((item, key)=>{
      return(
        <Link to={`/${item.idMeal}`} key={item.idMeal}>
        <div className='slider2 flex flex-col items-center justify-between m-6 ml-8'>
          <img className="w-48 h-48 rounded-lg border-orange-600 border-2" src={item.strMealThumb} alt={item.strMeal} />
          <h2 className='text-2xl text-[#af5911] font-semibold text-center mr-10'>{item.strMeal}</h2>

        </div>
        </Link>
      )
    })}
          
        </Slider>
      </div>
    </>
  )
}

export default TrendingSlider
