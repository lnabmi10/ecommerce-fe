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
import AddProductImages from './components/AddProductImages/AddProductImages';
import EditProduct from './components/editProduct/EditProduct';
import Messages from './components/Messages/Messages';
import MyShopData from './components/MyShopData/MyShopData';
import ProductList from './components/ProductList/ProductList';
import Wishlist from './components/Wishlist/Wishlist';
import Cart from './components/Cart/Cart';



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
      <Route path="/messages/:shopId" element={<ProtectedRoute element={Messages} />} />
      <Route path="/add-images/:productId" element={<AddProductImages/>} />
      <Route path="/send-identity-card" element={<ProtectedRoute element={SendIdentityCard} />} />
      <Route path="/send-identity-card" element={<ProtectedRoute element={SendIdentityCard} />} />
      <Route path="/myshopdata/:shopId" element={<ProtectedRoute element={MyShopData} />} />
      <Route path="/edit-product/:productId" element={<EditProduct/>} />
      <Route path="/list-product" element={<ProductList />} />
      <Route path="/wishlist" element={<ProtectedRoute element={Wishlist} />} />
      <Route path="/cart" element={<ProtectedRoute element={Cart} />} />


            
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
