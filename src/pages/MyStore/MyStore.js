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


function MyStore() {

  const [user, setUser] = useState(null);
  const [bankDetails, setBankDetails] = useState(null);
  const [store, setStore] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const userResponse = await fetch('http://localhost:3001/api/user/connecterdUser', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const userData = await userResponse.json();
        setUser(userData);

        const bankResponse = await fetch('http://localhost:3001/api/bankinfo/getbankdetails', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const bankData = await bankResponse.json();
        setBankDetails(bankData);

        if (!bankData) {
          navigate('/my-account');
          return;
        }

        const storeResponse = await fetch('http://localhost:3001/api/shop/getyourshop', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const storeData = await storeResponse.json();
        setStore(storeData);

      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('identityCard', file);

    try {
      const token = localStorage.getItem('token');
      await fetch('http://localhost:3001/api/seller/becomeseller', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      alert('Identity card uploaded successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to upload identity card');
    }
  };

  const handleCreateStore = async (e) => {
    e.preventDefault();
    const { storeName, storeDescription } = e.target.elements;
    
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/api/shop/createshop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: storeName.value,
          description: storeDescription.value,
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
      console.error(error);
      alert('An error occurred while creating the store');
    }
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  if (!bankDetails) {
    navigate('/my-account');
    return null;
  }

  if (store) {
    return (
      <div>
        <h2>My Store</h2>
        <p>Name: {store.name}</p>
        <p>Description: {store.description}</p>
        {/* Add more store details here */}
      </div>
    );
  }

  return (
    <div>
      <h2>Become a Seller</h2>
      <p>To become a seller, please upload your identity card.</p>
      <input type="file" onChange={handleFileUpload} />
      <form onSubmit={handleCreateStore}>
        <h3>Create Your Store</h3>
        <input type="text" name="storeName" placeholder="Store Name" required />
        <textarea name="storeDescription" placeholder="Store Description" required />
        <button type="submit">Create Store</button>
      </form>
    </div>
  );
}

export default MyStore