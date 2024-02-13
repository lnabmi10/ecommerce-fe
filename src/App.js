import React from 'react';
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import { About } from './components/About';
import Contact from './components/Contact';
import MyStore from './pages/MyStore/MyStore';

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
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
