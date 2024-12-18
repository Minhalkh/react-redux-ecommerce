import React, { useEffect, useState } from 'react';
import Shop from '../assets/Shop.svg';
import Mail from '../assets/mail.jpg';
import Outline from '../assets/Outline.png';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('userEmail', email);
      if (email === 'admin@example.com') {
        localStorage.setItem('userRole', 'admin');
        swal("Good job!", "You Successfully login as admin!", "success");
            navigate('/admindashboard');
      } else {
        localStorage.setItem('userRole', 'user');
        swal("Good job!", "You Successfully login!", "success");
        navigate('/');
      }
    } else {
      alert('Please enter both email and password!');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    navigate('/create');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex justify-center items-center h-full bg-gray-100'>
      <div className='flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden'>
        <img src={Shop} alt="Shop" className='w-1/2 h-auto object-cover'/>
        <div className='w-1/2 p-8'>
          <form onSubmit={handleLogin}>
            <h1 className='text-center font-bold text-2xl text-[#283592]'>DEBWOUYA.CORP</h1>
            <h2 className='mt-4 font-bold text-lg'>Log In</h2>
            
            <div className='mt-4'>
              <label className='block text-sm font-medium text-gray-700'>Email Address</label>
              <div className='relative mt-1'>
                <input 
                  type="email" 
                  placeholder='email@domain.com' 
                  className='rounded-full border w-full h-[40px] p-2 pl-4'
                  value={email}
                  onChange={handleEmailChange}
                />
                <img src={Mail} alt="Mail Icon" className='absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6'/>
              </div>
            </div>

            <div className='mt-4'>
              <label className='block text-sm font-medium text-gray-700'>Password</label>
              <div className='relative mt-1'>
                <input 
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password' 
                  className='rounded-full border w-full h-[40px] p-2 pl-4'
                  value={password}
                  onChange={handlePasswordChange}
                />
                <img 
                  src={Outline} 
                  alt="Password Icon" 
                  className='absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer'
                  onClick={toggleShowPassword}
                />
              </div>
            </div>

            <button type="submit" className='w-full h-[40px] bg-[#283592] rounded-full mt-6 text-white font-bold'>Log In</button>
            <p className='text-center mt-4 text-sm text-gray-600'>OR</p>
            <button type="button" className='w-full h-[40px] border rounded-full mt-4 text-gray-700'>Log In via Google</button>
            <button type="button" className='w-full h-[40px] border rounded-full mt-4 text-gray-700'>Log In via Facebook</button>
            <div className='flex justify-center mt-6'>
              <p className='text-sm text-gray-600'>Enter Your Credentials to access your account <span onClick={handleRegister} className='text-[#283592] font-bold cursor-pointer'>Register here</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
