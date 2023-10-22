import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="nav bg-[#f47c18] text-white flex justify-between w-100 h-[10vh] p-2">
        <div className="left flex justify-center items-center">
            <h1 className='text-3xl font-bold ml-20'>Recipe App</h1>
        </div>
        <div className="search flex justify-center items-center">
            <input 
            className='w-96 h-10 outline-none border-gray-600 border-[2px] rounded-md p-2 ml-72'
            placeholder='Search for your favourite dish'
            type="text" />
        </div>
        <div className="right flex justify-center items-center w-[34%]">
            <div>Indian</div>
            <div>American</div>
            <div>Chineese</div>
            <div>Italian</div>
            <div>Thai</div>
        </div>
    </div>
    </>
  )
}

export default Navbar
