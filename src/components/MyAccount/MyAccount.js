import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import BankDetails from '../BankDetails/BankDetails';
import SellerInfo from '../SellerInfo/SellerInfo';
import AddImage from '../AddImage/AddImage';




const MyAccount = () => {
  const [activeSection, setActiveSection] = useState('personalInfo');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="container mt-5">
      <nav className="nav nav-pills nav-justified mb-4">
        <button 
          className={`nav-link ${activeSection === 'personalInfo' ? 'active' : ''}`} 
          onClick={() => setActiveSection('personalInfo')}
        >
          Personal Info
        </button>
        <button 
          className={`nav-link ${activeSection === 'bankDetails' ? 'active' : ''}`} 
          onClick={() => setActiveSection('bankDetails')}
        >
          Bank Details
        </button>
        <button 
          className={`nav-link ${activeSection === 'sellerInfo' ? 'active' : ''}`} 
          onClick={() => setActiveSection('sellerInfo')}
        >
          Seller Info
        </button>
        <button 
          className={`nav-link ${activeSection === 'addImage' ? 'active' : ''}`} 
          onClick={() => setActiveSection('addImage')}
        >
          Add Image
        </button>
      </nav>
      <div className="row mb-5">
        <div className="col-12">
          {activeSection === 'personalInfo' && <PersonalInfo />}
          {activeSection === 'bankDetails' && <BankDetails />}
          {activeSection === 'sellerInfo' && <SellerInfo />}
          {activeSection === 'addImage' && <AddImage />}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
