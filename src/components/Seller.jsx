import React, { useState } from 'react'
import Batch from '../assets/Batch.svg'
import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.jpg'
import Img3 from '../assets/img3.jpg' 
import Img4 from '../assets/img4.jpg' 
import Img5 from '../assets/img5.jpg' 
import Img6 from '../assets/home.jpg'
import Img7 from '../assets/chocolate.jpg'
import Img8 from '../assets/chair.jpg'
import Img9 from '../assets/bags.jpg'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from '../Store/cartSlice'

function Seller({cardsPerPage = 4, buttonText ='See All New Seller'}) {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);
    const dispatch = useDispatch()
    
    const initialCardData = [
        {
            id: 1,
            img: Img1,
            title: 'Debwouya e-commerce',
            price: '2.99'
        },
        {
            id: 2,
            img: Img2,
            title: 'Debwouya delivered',
            price: '2.99'
        },
        {
            id: 3,
            img: Img3,
            title: 'Debwouya packaging crapon bag',
            price: '2.99'
        },
        {
            id: 4,
            img: Img4,
            title: 'Debwouya compe',
            price: '2.99'
        },
        {
            id: 5,
            img: Img5,
            title: 'Debwouya compe',
            price: '2.99'
        },
        {
            id: 6,
            img: Img6,
            title: 'Debwouya compe',
            price: '2.99'
        },
        {
            id: 7,
            img: Img7,
            title: 'Debwouya compe',
            price: '2.99'
        },
        {
            id: 8,
            img: Img8,
            title: 'Debwouya compe',
            price: '2.99'
        },
        {
            id: 9,
            img: Img9,
            title: 'Debwouya compe',
            price: '2.99'
        },
    ];
    const [card, setCard] = useState(initialCardData);

    const totalPages = Math.ceil(card.length / cardsPerPage);

    const handlePageClick = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const displayedCards = card.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);

    const handleNavigate = () =>{
        navigate('/newseller')
    }
    const handleAdd = (item) => {
        dispatch(add(item));
        alert(`${item.title} has been added to your cart.`);
    } 
    
  return (
         <>
            <div className='lg:w-[1200px] w-full h-full bg-gray-300 mt-24 mx-auto rounded'>
    <div className='flex flex-col items-center'>
        <h1 className='my-8 sm:my-14 font-bold text-xl sm:text-2xl text-[#283592] text-center'>
            Debwouya Marketplace New Seller
        </h1>
        <img src={Batch} alt="" className='w-[150px] sm:w-[200px]' />
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 px-4'>
        {displayedCards.map((item) => (
            <div key={item.id} className='bg-white p-4 rounded shadow'>
                <img
                    src={item.img}
                    alt=""
                    className='object-cover w-full h-[150px] sm:h-[200px] rounded'
                />
                <h2 className='text-center mt-2 font-medium'>{item.title}</h2>
                <p className='text-center'>Price: ${item.price}</p>
                <div className='flex justify-center mt-2'>
                    <span className='text-yellow-500'>★★★★★</span>
                </div>
                <button
                    onClick={() => handleAdd(item)}
                    className='w-full sm:w-[130px] h-[30px] border rounded-full my-2 mx-auto border-[#666666]'
                >
                    Add to Cart
                </button>
            </div>
        ))}
    </div>
    <div className='flex justify-center mt-4'>
        {Array.from({ length: totalPages }, (_, index) => (
            <button
                key={index}
                onClick={() => handlePageClick(index)}
                className={`mx-2 w-4 h-4 rounded-full ${
                    currentPage === index ? 'bg-blue-500' : 'bg-gray-400'
                }`}
            />
        ))}
    </div>
    <div className='flex justify-center'>
        <button
            onClick={handleNavigate}
            className='w-full sm:w-[250px] lg:w-[300px] my-12 h-[50px] bg-[#283592] text-white mt-8 rounded'
        >
            {buttonText || 'See All New Seller'}
        </button>
    </div>
</div>

        </>
  )
}

export default Seller
