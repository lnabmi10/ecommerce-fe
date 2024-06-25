import React, { useState, useEffect }  from 'react'
import style from './MyStore.module.css'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import {Link,useNavigate ,NavLink} from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import Button  from '../../components/Button/Button';
import minibrahinImg from '../../images/images/miniBrahim.png'
import { BsChatSquareDots } from "react-icons/bs";
import { BsBank } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";
import { BsCardList } from "react-icons/bs";
import { BsFileText } from "react-icons/bs";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsMegaphone } from "react-icons/bs";


const MyStore = () => {
  const [user, setUser] = useState(null);
  const [bankDetails, setBankDetails] = useState(null);
  const [store, setStore] = useState(null);
  const [identityCardUploaded, setIdentityCardUploaded] = useState(false);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      fetchUserData(token);
     
        
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      // Fetch user data
      const userResponse = await fetch('http://localhost:3001/api/user/connecterdUser', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userData = await userResponse.json();
      setUser(userData);
      console.log("userData",userData)
      console.log("user",user)
      // Fetch bank details
      const bankResponse = await fetch('http://localhost:3001/api/bankinfo/getbankdetails', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (bankResponse.ok) {
        const bankData = await bankResponse.json();
        setBankDetails(bankData);
        console.log("bankData",bankData)
      console.log("bank",bankDetails)
      }
      

      // Fetch store details
      const storeResponse = await fetch('http://localhost:3001/api/shop/getyourshop', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (storeResponse.ok) {
        const storeData = await storeResponse.json();
        setStore(storeData);
        
        console.log("storeData",storeData)
      console.log("store",store)
      }
      setLoading(true);

    } catch (error) {
      console.error('Error fetching data:', error);
    } 
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('identityCard', file);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3001/api/seller/becomeseller', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (response.ok) {
        setIdentityCardUploaded(true);
        alert('Identity card uploaded successfully');
      } else {
        alert('Failed to upload identity card');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('An error occurred while uploading the identity card');
    }
  };

  const handleCreateStore = async (e) => {
    e.preventDefault();
    const { storeName, storeDescription, storeBrand, storeCategory } = e.target.elements;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3001/api/shop/createshop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: storeName.value,
          description: storeDescription.value,
          brand: storeBrand.value,
          category: storeCategory.value,
        }),
      });

      if (response.ok) {
        const storeData = await response.json();
        setStore(storeData);
        alert('Store created successfully');
      } else {
        alert('Failed to create store');
      }
    } catch (error) {
      console.error('Error creating store:', error);
      alert('An error occurred while creating the store');
    }
  };

  /*if (loading) {
    return <p>Loading...</p>;
  }*/
  
    

      
  
  if (store) {
    return (
      <div>
        <h2>My Store</h2>
        <p>Name: {store.shopName}</p>
        <p>Description: {store.description}</p>
        <p>Brand: {store.brand}</p>
        <p>Category: {store.category}</p>
        {/* Add more store details here */}
      </div>
    );
  }

  return (
    <div>
      <h2>Become a Seller</h2>
      {identityCardUploaded ? (
        <form onSubmit={handleCreateStore}>
          <h3>Create Your Store</h3>
          <input type="text" name="storeName" placeholder="Store Name" required />
          <textarea name="storeDescription" placeholder="Store Description" required />
          <input type="text" name="storeBrand" placeholder="Store Brand" />
          <input type="text" name="storeCategory" placeholder="Store Category" />
          <button type="submit">Create Store</button>
        </form>
      ) : (
        <>
          <p>To become a seller, please upload your identity card.</p>
          <input type="file" onChange={handleFileUpload} />
        </>
      )}
    </div>
  );
};

export default MyStore;
