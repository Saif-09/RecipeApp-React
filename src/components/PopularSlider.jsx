import React from 'react';
import { useState, useEffect } from 'react';

const PopularSlider = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{

    const fetchData = async () =>{
      //fetch data here and call setData with the result.
      const api = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s");
      const data = await api.json();

      
      setData(data.meals)
      console.log(data.meals)
    }
    fetchData();

  },[])

  return (
    <>
    {/* {data.map((item, key)=>{
      return(
        <div>
          <img src={item.strMealThumb} alt="" />
          <h2 className='text-3xl font-semibold'>{item.strMeal}</h2>

        </div>
      )
    })} */}
    <div>slider</div>
     
    </>
  )
}

export default PopularSlider
