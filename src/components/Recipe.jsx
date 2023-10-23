import React from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PageNotFound from './PageNotFound';

const Recipe = () => {
    const { idMeal } = useParams();
    const [data, setData] = useState([]);
    const [active, setActive] = useState('ingredient');
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = () => {
        if (data.length > 0) {
            // Check if the recipe data is available
            const newFavorites = [...favorites, data];
            setFavorites(newFavorites);
            alert('Recipe added to favorites!');
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
                const response = await api.json();

                if (response.meals && response.meals.length > 0) {
                    // Recipe data found, update the state
                    setData(response.meals[0]);
                } else {
                    // Recipe not found, setData with an empty array
                    setData([]);
                }
            } catch (error) {
                // Handle fetch errors here
                console.error(error);
            }
        };
        fetchData();
    }, [idMeal]);

    console.log(useParams());
    return (
        <div>
            <Navbar />
            {data.length === 0 ? (
                // If data is empty, display Recipe Not Found
                <PageNotFound />
            ) : (
                <div className='w-[90%] m-auto text-center mb-24 mt-11'>
                    <h1 className='text-5xl text-[#af5911] font-semibold text-center ml-[30rem]'>{data.strMeal}</h1>
                    <div className='recipe flex mt-16'>
                        <div className='img w-[30%] '>
                            <img className="w-90 rounded-md" src={data.strMealThumb} alt={idMeal} />
                        </div>
                        <div className='content w-[70%]'>
                            <div className='ml-24'>
                                <button onClick={() => setActive('ingredient')} className="bg-[#ff9019] text-white font-semibold py-2 px-4 rounded-md m-2 hover:bg-orange-600 transition duration-300 ease-in-out">Ingredients</button>
                                <button onClick={() => setActive('instruction')} className="bg-[#ff9019] text-white font-semibold py-2 px-4 rounded-md m-2 hover-bg-orange-600 transition duration-300 ease-in-out">Instruction</button>
                                <button onClick={addToFavorites} className="bg-[#ff9019] text-white font-semibold py-2 px-4 rounded-md m-2 hover:bg-orange-600 transition duration-300 ease-in-out">Add to Favorites</button>
                            </div>

                            {active === 'ingredient' ? (
                                <div className='ml-24'>
                                    <div className='font-semibold text-[1.2rem]'>{data.strIngredient1} - {data.strMeasure1}</div>
                                    <div className='font-semibold text-[1.2rem]'>{data.strIngredient2} - {data.strMeasure2}</div>
                                    <div className='font-semibold text-[1.2rem]'>{data.strIngredient3} - {data.strMeasure3}</div>
                                    <div className='font-semibold text-[1.2rem]'>{data.strIngredient4} - {data.strMeasure4}</div>
                                    <div className='font-semibold text-[1.2rem]'>{data.strIngredient5} - {data.strMeasure5}</div>
                                    <div className='font-semibold text-[1.2rem]'>{data.strIngredient6} - {data.strMeasure6}</div>
                                </div>
                            ) : (
                                <p className='w-[80%] ml-40 text-lg font-normal'>{data.strInstructions}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Recipe;
