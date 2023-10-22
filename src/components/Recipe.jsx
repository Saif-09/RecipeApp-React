import React from 'react';
import Navbar from './Navbar'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Recipe = () => {

    const { idMeal } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            //fetch data here and call setData with the result.
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
            const data = await api.json();


            setData(data.meals[0])
            console.log(data.meals)
        }
        fetchData();

    }, [idMeal]);

    console.log(useParams())
    return (
        <div>
            <Navbar />
            <div className='w-[90%] m-auto text-center'>
                <h1 className='text-5xl text-[#af5911] font-semibold text-center'>{data.strMeal}</h1>
                <div className='recipe flex mt-20'>
                    <div className='img w-[30%] '>
                        <img className="w-90 rounded-md" src={data.strMealThumb} alt={idMeal} />
                    </div>
                    <div className='content w-[60%]'>
                    <button className="bg-[#ff9019] text-white font-semibold py-2 px-4 rounded-md m-2 hover:bg-orange-600 transition duration-300 ease-in-out">Ingredients </button>
                    <button className="bg-[#ff9019] text-white font-semibold py-2 px-4 rounded-md m-2 hover:bg-orange-600 transition duration-300 ease-in-out">Instruction </button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Recipe
