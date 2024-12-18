import React from 'react'
import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.jpg'
import Outlet from '../assets/outlet.svg'

function TopOffers() {
    const card = [
        {
            id : 1,
            title : 'Our Best Groceries',
            offer : '20% off',
            img : Img1,
        },
        {
            id : 2,
            title : 'Our Best Groceries',
            offer : '25% off',
            img : Img2,
        },
    ]
  return (
    <>
    <div className='bg-gray-400 w-full h-full mx-auto rounded px-4 lg:w-[1100px] lg:mx-[160px]'>
        <div className='flex justify-between mr-4'>
        <h1 className='p-4 font-bold text-3xl'>Top Offers</h1>
        <button className="text-sm md:text-base px-4 py-2 rounded hover:text-white transition">View All</button></div>
    <div className='flex flex-wrap justify-center gap-12'>
      {card.map((item)=>(
        <div key={item.id} className='m-4 bg-white p-4 rounded'>
            <h2 className='font-bold text-xl'>{item.title}</h2>
            <p className='text-xl text-[#E01B84] font-bold'>{item.offer}</p>
            <p>it is a time established fact that a reader will be distracted</p>
            <button className='w-[100px] h-[35px] rounded border border-[#283592] text-[#283592] mt-4'>View Store</button>
            <div className='flex items-center'>
            <img src={Outlet} alt="" />
            <div className='flex flex-col ml-2'>
            <h2 className='font-bold'>Grocerry outlet</h2>
            <p>Delivery within 24 hours</p></div>
            <img src={item.img} alt="" className='object-cover w-[100px] h-[100px] ml-auto sm:w-[100px] sm:h-[100px]'/></div>
        </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default TopOffers
