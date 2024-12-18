import React from 'react';
import Seller from '../components/Seller';
import CopyLink from '../assets/CopyLink.png';
import ContactUs from '../components/ContactUs';
import Navbar from '../components/Navbar'

function NewSellerPage() {
  return (
    <>
    <Navbar/>
      <div>
        {/* Seller Section */}
        <Seller cardsPerPage={8} buttonText="Read More" />

        {/* Share File Section */}
        <div className="w-full h-auto bg-gray-300 mt-12 p-6 sm:p-8 md:mt-16 md:p-12 rounded xl:w-[1200px] xl:h-[400px] xl:mx-auto xl:rounded-bottom">
          <div className="w-full max-w-md bg-white rounded mx-auto p-6 sm:p-8 md:max-w-lg xl:w-[500px] xl:h-[280px]">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold text-[#283592] sm:text-xl xl:mr-32">Share this file</h1>
              <div className="flex items-center gap-2">
                <img src={CopyLink} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
                <h1 className="text-sm text-[#283592] sm:text-base">Copy Link</h1>
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <h1 className="text-sm sm:text-base">Add or Invite</h1>
              <input
                type="text"
                placeholder="Copy your link here"
                className="mt-2 w-full h-[40px] p-2 text-sm border rounded sm:p-3 sm:text-base md:w-[400px]"
              />
              <button className="mt-6 w-full h-[40px] bg-[#283592] text-white text-sm font-semibold rounded sm:text-base md:w-[400px]">
                Add or Invite
              </button>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="my-8 sm:my-12">
          <ContactUs />
        </div>
      </div>
    </>
  );
}

export default NewSellerPage;