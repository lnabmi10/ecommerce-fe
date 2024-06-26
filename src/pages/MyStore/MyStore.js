import React, { useState, useEffect }  from 'react'
import {useNavigate } from 'react-router-dom'
import TheShop from './TheShop';
import BecomeSeller from './BecomeSeller';




const MyStore = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [hasShop, setHasShop] = useState(false); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }else{
      const fetchUserData = async () => {
        try {
          const userResponse = await fetch('http://localhost:3001/api/user/connecterdUser', {
            headers: { Authorization: `Bearer ${token}` },
          });
          const userData = await userResponse.json();
          setUser(userData);
         

          const shopResponse = await fetch('http://localhost:3001/api/user/userhasshop', {
            headers: { Authorization: `Bearer ${token}` },
          });
          const hasShopData = await shopResponse.json();
          setHasShop(hasShopData.hasShop);
          
          } catch (error) {
            console.error(error);

            }
            }
            fetchUserData();
    }

  }, [navigate]);


  console.log("user",user)

  return (
    <div>
      <h2>My Store</h2>
      {hasShop ? (
        <TheShop userId={user._id} />
      ) : (
        <BecomeSeller  />
      )}
    </div>
  );
};

export default MyStore;