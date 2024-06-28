import { Link,useParams,useNavigate } from 'react-router-dom';
import getAuthHeaders from '../../auth';
import React, { useEffect, useState  } from 'react';
import style from '../../pages/MyStore/MyStore.module.css'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
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



function Messages() {
    const navigate = useNavigate();
    const { shopId } = useParams();
    const [shopData, setShopData] = useState(null);
  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchShopData = async () => {
      try {
        const shopResponse = await fetch('http://localhost:3001/api/shop/getyourshop', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const result = await shopResponse.json();
        setShopData(result);
      } catch (error) {
        console.error(error);
      
      }  finally {
        setLoading(false); 
      }
    }
    fetchShopData()
}, [navigate])
 const ratingChanged = (newRating) => {
    console.log(newRating);
    };
    if (loading) {
    return <div>Loading...</div>; // Show loading indicator while fetching data
  }    // console.log("shopdata",shopData[0].shopName)
    
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-2 '> 
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav flex-column">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/Mystore'}><BsFillHouseDoorFill/> Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/allshopproduct/${shopId}`}><BsCardList/> Listings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/messages/${shopId}`}> <BsChatSquareDots/> Messages</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " href="#" > <BsFileText/> Orders & Shipping</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#"><BsStar/> Star Seller</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#"> <BsBarChart/> Stats</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#" ><BsMegaphone/> Marketing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#"> <BsBank/> Finances</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#"> <BsQuestionCircle/> Help</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#"> <BsFillGearFill/> Settings</Link>
              </li>
              
             
              
               </ul>
             </div>
           </div>
         </nav>

        
        </div>
        <div className='col-10'>
              <div className='row py-4'>
                            <div className='col-2'>
                                <img src={minibrahinImg} className={style.shopImg} alt='' />

                            </div>
                            <div className='col-4'>
                         <div className='container shop-name'> <h2>{shopData[0].shopName}</h2> </div>
                          <div> <p> {shopData[0].description }</p>  </div>
                                <div> 17 sales | 55 active listings </div>
                                <div> <ReactStars
                                          count={5}
                                          onChange={ratingChanged}
                                          size={24}
                                          activeColor="#ffd700"
                                          value={4.5}
                                          edit={false}
                                        />
                                </div>
                                

                            </div>
                            <div className='col-4'></div>
                            <div className='col-2'>
                              <Link className='text-dark' to='/'> <strong>minibrahim.sijilmassa.com</strong> </Link>
                            </div>

                           </div>
                      <div   className='codeforyourpage' >
                          
                        </div>
                         </div>

      </div>

      </div>
    </>
  )
}

export default Messages