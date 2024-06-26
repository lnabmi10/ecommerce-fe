import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SendIdentityCard from '../../components/SendIdentityCard/SendIdentityCard';

const BecomeSeller = () => {
  const navigate = useNavigate();
  const [bankDetails, setBankDetails] = useState(null);

  useEffect(() => {
    const fetchBankDetails = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch(`http://localhost:3001/api/bankinfo/getbankdetails`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.ok) {
          const bankDetailsData = await response.json();
          console.log('Bank details:', bankDetailsData);
          setBankDetails(bankDetailsData);
        } else {
          console.error('Failed to fetch bank details');
        }
      } catch (error) {
        console.error('Error fetching bank details:', error);
      }
    };

    fetchBankDetails();
  }, []);

  const handleYes = () => {
    if (bankDetails) {
      console.log("User wants to become a seller.");
      navigate('/send-identity-card');
    } else {
      alert('Please enter your bank information.');
      navigate('/my-account');
    }
  };

  const handleNo = () => {
    // Logic to handle "No" button click
    console.log("User does not want to become a seller.");
    navigate('/'); // Redirect to the user's account page or another appropriate page
  };

  return (
    <div className="container m-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Devenir Vendeur</h2>
          <p className="card-text">Voulez-vous devenir vendeur sur la plateforme Sijilmassa ?</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-success" onClick={handleYes}>Oui</button>
            <button className="btn btn-danger" onClick={handleNo}>Non</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeSeller;
