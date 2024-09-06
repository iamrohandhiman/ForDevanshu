import React from 'react'

export const Home = () => {
  return (
    <div className="flex justify-center items-center w-full h-[57vh] bg-[url('./src/bg.png')]">
      
      <div className='mb-[220px]'>
        <span className='text-[40px] font-sans text-white font-bold drop-shadow-sm'>Track your shipment</span>
        <div className='flex justify-center items-center'>
          <input type="text" name="" id="" placeholder=' enter your tracking number ' className='w-[400px] h-[60px] rounded-tl rounded-bl'/>
          <button className='flex justify-center items-center px-8 bg-red-600 h-[60px] border-[3px] border-white rounded-tr rounded-br'><span className='text-white text-[15px] font-semibold'>Track</span> </button>
        </div>
      </div>

    </div>
  )
}
