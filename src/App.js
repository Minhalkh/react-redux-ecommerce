import './App.css';
import './index.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import FramePage from './pages/FramePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CreateAccountPage from './pages/CreateAccountPage';
import AdminDashboard from './pages/Admin/AdminDashboard';
import NewSellerPage from './pages/NewSellerPage';
import ServiceSellerPage from './pages/ServiceSellerPage';
import SellerProductsPage from './pages/SellerProductsPage';
import AllCategoriesPage from './pages/AllCategoriesPage';
import { store } from './Store/store';
import CartPage from './pages/CartPage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentTable from './pages/PaymentTable';

function App() {
  const stripePromise = loadStripe('pk_test_51QRsYbRvhUOpYecQxPhlWZyAWbkl2ECLj1pykVEEFS2Ca4T5wyq2Nkm4tgRodpLBpKk7gpINVh1gF6V39cCVjkGx00C8OSzRnI');
  return (
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/createpage' element={<CreateAccountPage />} />
            <Route path='/' element={<FramePage />} />
            <Route path='/admindashboard' element={<AdminDashboard />} />
            <Route path='/newseller' element={<NewSellerPage />} />
            <Route path='/serviceseller' element={<ServiceSellerPage />} />
            <Route path='/sellerproducts' element={<SellerProductsPage />} />
            <Route path='/allcategories' element={<AllCategoriesPage />} />
            <Route path='/addcart' element={<CartPage />} />
            <Route path='/paymenttable' element={<PaymentTable />} />
          </Routes>
        </BrowserRouter>
      </Elements>
    </Provider>
  );
}

export default App;