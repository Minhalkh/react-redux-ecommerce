import React from 'react';
import Img1 from '../assets/Frame 1.svg';
import Img2 from '../assets/Frame 2.svg';
import Img3 from '../assets/Frame 3.svg';
import Img4 from '../assets/Frame 4.svg';

function Services() {
    const card = [
        {
            id: 1,
            img: Img1,
            title: 'Order Management',
        },
        {
            id: 2,
            img: Img2,
            title: 'Customer Support',
        },
        {
            id: 3,
            img: Img3,
            title: 'Shipping and fulfillment',
        },
        {
            id: 4,
            img: Img4,
            title: 'Content Management',
        },
    ];

    return (
        <>
            <div className="w-full max-w-[1200px] bg-gray-200 mx-auto rounded px-4 py-8 md:px-8 my-4">
                <h1 className="font-bold text-xl md:text-2xl text-center p-4">Services</h1>
                <p className="text-center text-sm md:text-base">
                    E-commerce websites offer a range of services to facilitate online shopping and streamline business operations. Here's
                </p>
                <p className="text-center text-sm md:text-base">
                    a detailed look at the key services typically provided by e-commerce platforms:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 my-16">
                    {card.map((item) => (
                        <div
                            key={item.id}
                            className="relative bg-white p-4 rounded shadow-md text-center"
                        >
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
                                />
                            </div>
                            <h1 className="font-bold text-lg md:text-2xl mt-8">{item.title}</h1>
                            <p className="text-sm md:text-base mt-4">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                                consequatur deleniti illo reiciendis nulla a quae vero eos earum
                                quaerat?
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Services;