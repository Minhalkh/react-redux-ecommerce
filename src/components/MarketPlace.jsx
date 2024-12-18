import React, { useState } from 'react'
import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.jpg'
import Img3 from '../assets/img3.jpg' 
import Img4 from '../assets/img4.jpg' 
import toggle from '../assets/toggle.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from '../Store/cartSlice'

function Marketplace({cardsPerPage = 4, buttonText = 'See All Service Seller'}) {
    const [dropdownVisible, setDropdownVisible] = useState(null);

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
            title: 'Debwouya pakaging crapon bag',
            price: '2.99'
        },
        {
            id: 4,
            img: Img4,
            title: 'Debwouya compe',
            price: '2.99'
        },
    ];

    const [card, setCard] = useState(initialCardData);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleDropdown = (id) => {
        setDropdownVisible(dropdownVisible === id ? null : id);
    };
    const handleClick = () => {
        navigate('/serviceseller');
    }
    const handleAdd = (item) => {
        dispatch(add(item));
        alert(`${item.title} has been added to your cart.`);
    }

    return (
        <>
            <div className='lg:w-[1200px] my-12 w-full h-full bg-gray-200 lg:mx-18 mx-auto rounded'>
    <div className='flex flex-col items-center'>
        <h1 className='my-8 sm:my-14 font-bold text-xl sm:text-2xl text-[#283592] text-center'>
            Debwouya Marketplace Service Seller
        </h1>
        <div className='flex flex-wrap justify-center gap-4 cursor-pointer px-4'>
            <button className='w-[90px] sm:w-[100px] h-[30px] border rounded-full border-[#666666] hover:bg-[#283592]'>Cook</button>
            <button className='w-[110px] sm:w-[120px] h-[30px] border rounded-full border-[#666666] hover:bg-[#283592]'>Beautician</button>
            <button className='w-[160px] sm:w-[170px] h-[30px] border rounded-full border-[#666666] hover:bg-[#283592]'>Captain With Boat</button>
            <button className='w-[180px] sm:w-[190px] h-[30px] border rounded-full border-[#666666] hover:bg-[#283592]'>Captain Without Boat</button>
            <button className='w-[120px] sm:w-[130px] h-[30px] border rounded-full border-[#666666] hover:bg-[#283592]'>Hairdresser</button>
            <button className='w-[110px] sm:w-[120px] h-[30px] border rounded-full border-[#666666] hover:bg-[#283592]'>Masseuse</button>
        </div>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 px-4'>
        {card.map((item) => (
            <div key={item.id} className='relative m-2 sm:m-4 bg-white p-4 rounded shadow'>
                <img
                    src={item.img}
                    alt=""
                    className='object-cover rounded w-full h-[150px] sm:w-[200px] sm:h-[200px]'
                />
                <h2 className='text-center mt-2 font-medium'>{item.title}</h2>
                <p className='text-center'>${item.price}</p>
                <div className='flex items-center justify-center mt-2'>
                    <span className='text-yellow-500'>★★★★★</span>
                </div>
                <div className='flex items-center justify-between mt-2'>
                    <button
                        onClick={() => handleAdd(item)}
                        className='w-[100px] sm:w-[130px] h-[30px] border rounded-full border-[#666666]'
                    >
                        Add to Cart
                    </button>
                    <img
                        onClick={() => toggleDropdown(item.id)}
                        src={toggle}
                        alt=""
                        className='w-[10px] h-[10px] cursor-pointer'
                    />
                </div>
                {dropdownVisible === item.id && (
                    <div className='absolute top-full left-0 mt-2 bg-white border rounded shadow-lg'>
                        <button className='block px-4 py-2 text-left w-full'>Option 1</button>
                        <button className='block px-4 py-2 text-left w-full'>Option 2</button>
                        <button className='block px-4 py-2 text-left w-full'>Option 3</button>
                    </div>
                )}
            </div>
        ))}
    </div>
    <div className='flex justify-center mt-8'>
        <button
            onClick={handleClick}
            className='w-full sm:w-[250px] lg:w-[300px] my-6 h-[50px] bg-[#283592] text-white rounded'
        >
            {buttonText || 'See All Service Seller'}
        </button>
    </div>
</div>
        </>
    )
}

export default Marketplace