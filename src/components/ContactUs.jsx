import React, { useState } from 'react'
import Rectangle from '../assets/Rectangle.png'
import GoogleMapComponent from '../components/GoogleMapComponent'

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = 'javaidminhal1@gmail.com';
    const subject = 'Contact Us Form';
    const body = `Name: ${formData.fullName}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    
    fetch('https://formspree.io/f/xvgowdwo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest' // Added to help prevent spam filtering
      },
      body: JSON.stringify({
        email: email,
        subject: subject,
        message: body
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      alert('Email sent successfully!');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to send email. An error occurred while sending the email.');
    });
  };

  return (
    <>
    <div className='w-[1200px] mx-24 bg-gray-200 h-full flex justify-around'>
    <div className=''>
    <h1 className='font-semibold text-3xl p-8'>Contact Us</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum architecto ut iure expedita placeat.</p>
    <form onSubmit={handleSubmit} className='grid grid-rows-4 gap-4 mt-4'>
    <input type="text" name="fullName" placeholder='Full Name' value={formData.fullName} onChange={handleChange} className='w-[300px] text-black h-[40px] bg-gray-300 border rounded p-3'/>
    <input type="email" name="email" placeholder='Your Email' value={formData.email} onChange={handleChange} className='w-[300px] text-black h-[40px] bg-gray-300 border rounded p-3'/>
    <textarea name="message" placeholder='Message' value={formData.message} onChange={handleChange} className='w-[300px] text-black h-[80px] bg-gray-300 border rounded p-3'/>
    <button type="submit" className='w-[100px] h-[40px] bg-[#283592] text-white'>Submit</button>
    </form>
    </div>

    <div>
        <img src={Rectangle} alt="" className='absolute rounded ml-32 w-[150px] h-[250px] mt-16'/>
        <GoogleMapComponent/>
    </div>
    </div>
    </>
  )
}

export default ContactUs