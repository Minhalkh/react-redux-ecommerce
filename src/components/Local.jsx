import React, { useState } from 'react'
import Shopping from '../assets/Shopping.png'
import Search from '../assets/Search.svg'
import Ornament from '../assets/Ornament.svg'
import Rectangle from '../assets/Rectangle 2.svg' 
import Shop from '../assets/Shop.svg'
import Batch from '../assets/Batch.svg'
import Overlay1 from '../assets/Overlay1.svg'
import Overlay2 from '../assets/Overlay2.svg'
import Overlay3 from '../assets/Overlay3.svg'
import Overlay4 from '../assets/Overlay4.svg'

function Local() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                const filteredProducts = json.filter(product => 
                    product.title.toLowerCase().includes(term.toLowerCase())
                );
                setSearchResults(filteredProducts);
            });
    };

    return (
        <>
        <div className='flex flex-col lg:flex-row justify-around my-12 lg:my-24'>
    <div className='my-12 lg:my-24 lg:ml-4 text-center lg:text-left'>
        <img src={Shopping} alt="Shopping" className='bg-white mx-auto lg:mx-0'/>
        <h1 className='font-semibold text-2xl md:text-3xl lg:text-4xl text-[#283592] mt-2'>DEBVOUYA.CORP</h1>
        <h1 className='font-semibold text-2xl md:text-3xl lg:text-4xl text-[#E01B84]'>SHOPPING LOCAL</h1>
        <h1 className='font-semibold text-2xl md:text-3xl lg:text-4xl text-[#6D64E8]'>PRODUCTS</h1>
        <p className='w-full sm:w-[400px] md:w-[500px] mx-auto lg:mx-0 mt-4 text-[#6D64E8]'>
            DEBVOUYA.CORP is a local shopping enterprise dedicated to offering a wide range of locally sourced products.
            Focused on supporting community businesses, DEBVOUYA.CORP provides customers with high-quality goods from 
            local producers, ensuring freshness, sustainability, and a boost to the local economy.
        </p>
        <div className='flex items-center border w-full sm:w-[300px] h-[40px] rounded my-4 border-[#6D64E8] mx-auto lg:mx-0'>
            <img src={Search} alt="Search Icon" className='w-4 h-4 ml-2' />
            <input 
                type="text" 
                placeholder="Search Products" 
                className='flex-grow outline-none ml-2 placeholder-[#6D64E8] text-[#6D64E8]' 
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
        <div>
            {searchResults.map(product => (
                <div key={product.id} className='mt-2'>
                    <h2 className='text-lg font-semibold'>{product.title}</h2>
                </div>
            ))}
        </div>
    </div>
    <div className='relative mt-8 lg:mt-0'>
        <img src={Ornament} alt="Ornament" className='absolute mx-auto max-sm:mx-[30px] md:mx-[170px] lg:mx-[300px] lg:block'/>
        <img src={Rectangle} alt="Rectangle" className='absolute mx-auto mt-4 w-[200px] md:mx-[200px] max-sm:mx-[50px] md:w-[300px] h-[200px] md:h-[300px] lg:w-[300px] lg:h-[300px] lg:mx-[90px]'/>
        <img src={Shop} alt="Shop" className='relative w-[300px] md:w-[400px] mt-6 h-[300px] md:h-[400px] mx-auto'/>
    </div>
</div>

<div className='bg-gray-100 lg:mx-[80px] rounded w-full lg:w-[1200px] h-auto lg:h-[500px]'>
    <div className='flex flex-col items-center'>
        <h1 className='mt-8 font-bold text-lg md:text-xl lg:text-2xl text-[#283592]'>Batch Winners</h1>
        <img src={Batch} alt="" className='mt-4 w-[100px] sm:w-[120px] md:w-[150px] lg:w-[170px] h-[12px] md:h-[15px] lg:h-[20px]'/>
    </div>
    <div className='flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-20'>
        <img src={Overlay1} alt="" className='w-[80px] sm:w-[100px] md:w-[150px] lg:w-[170px] h-[80px] sm:h-[100px] md:h-[150px] lg:h-[170px] rounded-full'/>
        <img src={Overlay2} alt="" className='w-[80px] sm:w-[100px] md:w-[150px] lg:w-[170px] h-[80px] sm:h-[100px] md:h-[150px] lg:h-[170px] mt-4 sm:mt-8 md:mt-16 lg:mt-[200px] rounded-full'/>
        <img src={Overlay3} alt="" className='w-[80px] sm:w-[100px] md:w-[150px] lg:w-[170px] h-[80px] sm:h-[100px] md:h-[150px] lg:h-[170px] rounded-full'/>
        <img src={Overlay4} alt="" className='w-[80px] sm:w-[100px] md:w-[150px] lg:w-[170px] h-[80px] sm:h-[100px] md:h-[150px] lg:h-[170px] mt-4 sm:mt-8 md:mt-16 lg:mt-[200px] rounded-full'/>
    </div>
</div>
        </>
    )
}

export default Local