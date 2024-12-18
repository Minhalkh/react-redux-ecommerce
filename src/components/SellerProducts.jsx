import React, { useState } from 'react';
import Img1 from '../assets/img1.jpg';
import Img2 from '../assets/img2.jpg';
import Img3 from '../assets/img3.jpg';
import Img4 from '../assets/img4.jpg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../Store/cartSlice';

function SellerProducts({ buttontext = 'See All Products' }) {
    const initialCardData = [
        {
            id: 1,
            img: Img1,
            title: 'Debwouya e-commerce',
            price: '2.99',
        },
        {
            id: 2,
            img: Img2,
            title: 'Debwouya delivered',
            price: '2.99',
        },
        {
            id: 3,
            img: Img3,
            title: 'Debwouya packaging crapon bag',
            price: '2.99',
        },
        {
            id: 4,
            img: Img4,
            title: 'Debwouya compe',
            price: '2.99',
        },
    ];

    const [card, setCard] = useState(initialCardData);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNavigate = () => {
        navigate('/sellerproducts');
    };

    const handleAdd = (item) => {
        dispatch(add(item));
        alert(`${item.title} has been added to your cart.`);
    };

    return (
        <>
            <div>
                <h1 className='text-center text-[#283592] font-bold text-2xl mt-12'>
                    Debwouya Marketplace Seller of Products
                </h1>
                <div className='flex justify-center gap-4 my-4'>
                    <button className='w-[100px] h-[30px] border rounded-full border-[#666666] hover:bg-[#283592]'>
                        Pastry
                    </button>
                    <button className='w-[100px] h-[30px] border rounded-full border-[#666666] hover:bg-[#283592]'>
                        Past
                    </button>
                    <button className='w-[100px] h-[30px] border rounded-full border-[#666666] hover:bg-[#283592]'>
                        Pastr
                    </button>
                    <button className='w-[150px] h-[30px] border rounded-full border-[#666666] hover:bg-[#283592]'>
                        Pastry djsd
                    </button>
                    <button className='w-[150px] h-[30px] border rounded-full border-[#666666] hover:bg-[#283592]'>
                        Pastry dhj
                    </button>
                </div>
                <div className='flex justify-center gap-4 my-4'>
                    <button className='w-[150px] h-[30px] border rounded-full border-[#666666] hover:bg-[#283592]'>
                        Pastry djsd
                    </button>
                    <button className='w-[150px] h-[30px] border rounded-full border-[#666666] hover:bg-[#283592]'>
                        Pastry sdjk
                    </button>
                    <button className='w-[150px] h-[30px] border rounded-full border-[#666666] hover:bg-[#283592]'>
                        Pastry ndj
                    </button>
                    <button className='w-[150px] h-[30px] border rounded-full border-[#666666] hover:bg-[#283592]'>
                        Pastry sdjsk
                    </button>
                </div>
            </div>
            <div className='flex flex-wrap justify-center mt-8'>
                {card.map((item) => (
                    <div key={item.id} className='m-4 bg-white p-4 rounded shadow relative'>
                        <img src={item.img} alt={item.title} className='object-cover rounded w-[300px] h-[300px]' />
                        <button className='absolute top-6 right-8 bg-white rounded-full p-1 shadow'>
                            <span role='img' aria-label='heart'>
                                ❤️
                            </span>
                        </button>
                        <h2>{item.title}</h2>
                        <p>${item.price}</p>
                        <div className='flex items-center'>
                            <span className='text-yellow-500'>★★★★★</span>
                        </div>
                        <div className='flex items-center'>
                            <button
                                onClick={() => handleAdd(item)}
                                className='w-[100px] h-[30px] border rounded-full my-2 border-[#666666]'
                            >
                                Add to Cart
                            </button>
                            <p className='w-[70px] h-[28px] ml-3 bg-pink-600 text-center rounded'>37% off</p>
                            <p>Limited Time Deal</p>
                        </div>
                    </div>
                ))}
                <button
                    onClick={handleNavigate}
                    className='w-[300px] h-[50px] bg-[#283592] text-white mx-[450px] my-8 rounded'
                >
                    {buttontext}
                </button>
            </div>
        </>
    );
}

export default SellerProducts;