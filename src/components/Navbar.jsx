import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search/${input}`)
  }
  return (
    <>
    <div className="nav bg-[#f47c18] text-white flex justify-between w-100 h-[10vh] p-2">
      
        <div className="left flex justify-center items-center">
        <Link to='/'>
            <h1 className='text-3xl font-bold ml-20'>Recipe App</h1>
            </Link>
        </div>
        
        <div className="search flex justify-center items-center">
          <form onSubmit={handleSubmit}>
          <input
          value={input}
          onChange={(e)=>setInput(e.target.value)} 
            className='w-96 h-10 outline-none border-gray-600 border-[2px] rounded-md p-2 ml-72 text-[#af5911] font-semibold'
            placeholder='Search for your favourite dish'
            type="text" />
          </form>
            
        </div>
        <div className="right flex justify-center items-center w-[34%]">
          <Link to={`/category/Indian`}>
            <div>Indian</div>
          </Link>
          <Link to={`/category/Italian`}>
            <div>Italian</div>
          </Link>
          <Link to={`/category/Chinese`}>
            <div>Chinese</div>
          </Link>
          <Link to={`/category/American`}>
            <div>American</div>
          </Link>
          <Link to={`/category/Thai`}>
            <div>Thai</div>
          </Link>
            
            
        </div>
    </div>
    </>
  )
}

export default Navbar
