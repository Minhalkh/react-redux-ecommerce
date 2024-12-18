import React from 'react';
import Img1 from '../assets/img1.jpg';
import Img2 from '../assets/img2.jpg';
import Img3 from '../assets/img3.jpg';
import Img4 from '../assets/img4.jpg';
import { useNavigate } from 'react-router-dom';

function AllCategories() {
    const navigate = useNavigate();

    const card = [
        {
            id: 1,
            img: Img1,
            title: 'shoes',
        },
        {
            id: 2,
            img: Img2,
            title: 'hairstraightner',
        },
        {
            id: 3,
            img: Img3,
            title: 'jewellery',
        },
        {
            id: 4,
            img: Img4,
            title: 'cake',
        },
    ];

    const handleView = () => {
        navigate('/allcategories');
    };

    return (
        <>
            <div className="w-full bg-gray-200 rounded py-8 px-4 md:px-8 lg:w-[1200px] lg:mx-auto my-12">
                <div className="flex flex-wrap justify-between items-center px-4">
                    <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">All Categories</h1>
                    <button
                        onClick={handleView}
                        className="mt-4 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        View All
                    </button>
                </div>
                <div className="flex flex-wrap justify-center mt-8 gap-8">
                    {card.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center p-4 rounded-lg w-full sm:w-[150px] text-center"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="rounded-full w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-cover"
                            />
                            <h2 className="text-sm md:text-base font-medium mt-2">{item.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AllCategories;