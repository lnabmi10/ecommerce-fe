import React from 'react';
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import { About } from './components/About';
import Contact from './components/Contact';
import MyStore from './pages/MyStore/MyStore';
import SellerShop from './pages/SellerShop/SellerShop';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AllShopProduct from './components/AllShopProduct/AllShopProduct';
import ProductPage from './pages/ProductPage/ProductPage'
import CreateProduct from './components/CreateProducte/CreateProduct';
import MyAccount from './components/MyAccount/MyAccount';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import SendIdentityCard from './components/SendIdentityCard/SendIdentityCard';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>} > 
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>}  />
      <Route path='sellershop' element={<SellerShop/>}  />
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>} />
      <Route path='allshopproduct/:shopId' element={ <AllShopProduct/> } />
      <Route path="product/:id" element={<ProductPage/>} />
      <Route path='create-product/:shopId' element={<CreateProduct />} />
      <Route path="/MyStore" element={<ProtectedRoute element={MyStore} />} />
      <Route path="/my-account" element={<ProtectedRoute element={MyAccount} />} />
      <Route path="/send-identity-card" element={<ProtectedRoute element={SendIdentityCard} />} />

            
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
