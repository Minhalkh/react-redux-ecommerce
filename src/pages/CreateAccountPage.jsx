import React from 'react';
import Shop from '../assets/Shop.svg';
import Signup from '../assets/Signup.png';
import { useNavigate } from 'react-router-dom';

function CreateAccountPage() {
  const navigate = useNavigate();

  const handleNext = ()=>{
    navigate ('/signUp')
  }

  return (
    <div className='flex justify-center items-center h-full bg-gray-100'>
      <div className='flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden'>
        <img src={Shop} alt="Shop" className='w-1/2 h-auto object-cover'/>
        <div className='w-1/2 p-8'>
          <form>
            <h1 className='text-center font-bold text-2xl text-[#283592]'>DEBWOUYA.CORP</h1>
            <h2 className='mt-4 font-bold text-lg'>Create Your Account</h2>
            <p className='mt-2 text-sm text-gray-600'>Enter your credentials to create a new account</p>

            <div className='mt-4'>
              <label className='block text-sm font-medium text-gray-700'>First Name</label>
              <div className='relative mt-1'>
                <input type="text" placeholder='Kayle' className='rounded-full border w-full h-[40px] p-2 pl-4'/>
                <img src={Signup} alt="User Icon" className='absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6'/>
              </div>
            </div>

            <div className='mt-4'>
              <label className='block text-sm font-medium text-gray-700'>Last Name</label>
              <div className='relative mt-1'>
                <input type="password" placeholder='Joseph' className='rounded-full border w-full h-[40px] p-2 pl-4'/>
                <img src={Signup} alt="Password Icon" className='absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6'/>
              </div>
            </div>

            <div className='mt-4'>
              <label className='block text-sm font-medium text-gray-700'>Age</label>
              <div className='relative mt-1'>
                <input type="password" placeholder='Joseph' className='rounded-full border w-full h-[40px] p-2 pl-4'/>
              </div>
            </div>

            <div className='mt-4'>
              <label className='block text-sm font-medium text-gray-700'>Address</label>
              <div className='relative mt-1'>
                <input type="password" placeholder='Joseph' className='rounded-full border w-full h-[40px] p-2 pl-4'/>
              </div>
            </div>

            <div className='mt-4'>
              <label className='block text-sm font-medium text-gray-700'>Type Of Offer</label>
              <div className='relative mt-1'>
                <input type="password" placeholder='Joseph' className='rounded-full border w-full h-[40px] p-2 pl-4'/>
              </div>
            </div>
            <input type="checkbox" className='mt-4'/> Terms & conditions

            <button onClick={handleNext} className='w-full h-[40px] bg-[#283592] rounded-full mt-6 text-white font-bold'>Next</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccountPage;
