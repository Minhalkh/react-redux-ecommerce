import React from 'react'
import Marketplace from '../components/MarketPlace'
import ContactUs from '../components/ContactUs'
import Navbar from '../components/Navbar'

function ServiceSeller() {
  return (
    <>
    <Navbar/>
    <div className='mt-12'>
      <Marketplace cardsPerPage = {8} buttonText='Read More'/>
      <div className='my-12'>
      <ContactUs/>
      </div>
    </div>
    </>
  )
}

export default ServiceSeller
