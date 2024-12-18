import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (path) => {
        setIsMenuOpen(false); 
        navigate(path);
    };

    return (
        <nav className="flex justify-between items-center p-4 bg-white shadow-md">
            <div>
                <h1 className="text-[#283592] font-semibold text-2xl">
                    DEBVOUYA.CORP
                </h1>
            </div>

            <div className="lg:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-[#283592] text-3xl focus:outline-none"
                >
                    ☰
                </button>
            </div>

            <div
                className={`${
                    isMenuOpen ? 'block' : 'hidden'
                } absolute top-16 left-0 w-full bg-white shadow-lg lg:static lg:flex lg:items-center lg:justify-between lg:gap-6 lg:shadow-none`}
            >
                <ul className="flex flex-col sm:flex-row gap-4 p-4 lg:mx-[100px] lg:p-0 lg:gap-8">
                    <li
                        onClick={() => handleNavigation('/')}
                        className="hover:text-[#283592] cursor-pointer"
                    >
                        Home
                    </li>
                    <li
                        onClick={() => handleNavigation('/newseller')}
                        className="hover:text-[#283592] cursor-pointer"
                    >
                        New Seller
                    </li>
                    <li
                        onClick={() => handleNavigation('/serviceseller')}
                        className="hover:text-[#283592] cursor-pointer"
                    >
                        Services Seller
                    </li>
                    <li
                        onClick={() => handleNavigation('/sellerproducts')}
                        className="hover:text-[#283592] cursor-pointer"
                    >
                        Seller Of Products
                    </li>
                    <li
                        onClick={() => handleNavigation('/allcategories')}
                        className="hover:text-[#283592] cursor-pointer"
                    >
                        All Categories
                    </li>
                    <li
                        onClick={() => handleNavigation('/addcart')}
                        className="hover:text-[#283592] cursor-pointer"
                    >
                        Add Cart
                    </li>
                </ul>
            </div>

            <div className="hidden sm:flex gap-4">
                <button
                    onClick={() => handleNavigation('/login')}
                    className="w-[100px] h-[35px] border border-[#283592] text-[#283592] rounded hover:bg-[#283592] hover:text-white transition"
                >
                    Sign in
                </button>
                <button
                    onClick={() => handleNavigation('/signup')}
                    className="w-[100px] h-[35px] border border-[#283592] bg-[#283592] text-white rounded hover:bg-[#1c2759] transition"
                >
                    Sign up
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
