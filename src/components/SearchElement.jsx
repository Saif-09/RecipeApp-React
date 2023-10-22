import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link, useParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';

const SearchElement = () => {
    const { item } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // fetch data here and call setData with the result.
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`);
            const data = await api.json();

            setData(data.meals || []);
            // console.log(data.meals)
        }
        fetchData();

    }, [item]);

    return (
        <>
            <Navbar />
            {data.length > 0 ? (
                <div className='w-[90%] m-auto grid mt-8' style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
                    gridGap: '1rem'
                }}>
                    {
                        data.map((items) => {
                            return (
                                <Link to={`/${items.idMeal}`} key={items.idMeal}>
                                    <div className='text-center'>
                                        <div className='catagoryImg flex flex-col items-center justify-between'>
                                            <img className='w-48 rounded-lg border-orange-600 border-2' src={items.strMealThumb} alt="" />
                                        </div>
                                        <h2 className='text-lg text-[#af5911] font-semibold text-center'>{items.strMeal}</h2>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            ) : (
                <PageNotFound />
            )}
        </>
    )
}

export default SearchElement
