import React from 'react'
import Navbar from '../components/Navbar'
import Local from '../components/Local'
import Marketplace from '../components/MarketPlace'
import Seller from '../components/Seller'
import SellerProducts from '../components/SellerProducts'
import TopOffers from '../components/TopOffers'
import AllCategories from '../components/AllCategories'
import Services from '../components/Services'
import ContactUs from '../components/ContactUs'

function FramePage() {
  return (
    <div>
      <Navbar/>
      <Local/>
      <Seller/>
      <Marketplace/>
      <SellerProducts/>
      <TopOffers/>
      <AllCategories/>
      <Services/>
      <ContactUs/>
    </div>
  )
}

export default FramePage
