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


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>} > 
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>}  />
      <Route path='mystore' element={<MyStore/>}  />
      <Route path='sellershop' element={<SellerShop/>}  />
      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>} />

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
