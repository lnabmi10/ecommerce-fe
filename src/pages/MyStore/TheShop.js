import React, { useState, useEffect } from 'react'
import {Link,useNavigate ,NavLink} from 'react-router-dom'

import style from './MyStore.module.css'
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

function TheShop({userId,shopId}) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [shopImg,setShopImg]=useState(minibrahinImg)
  console.log(userId)
  console.log(shopId)
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const [shopData, setShopData] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchShopData = async () => {
      try {
        const shopResponse = await fetch('http://localhost:3001/api/shop/getyourshop', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const result = await shopResponse.json();
        setShopData(result);
        console.log(result)
      } catch (error) {
        console.error(error);
      
      }  finally {
        setLoading(false); 
      }
    }
    fetchShopData()
}, [navigate])

   if (loading) {
    return <div>Loading...</div>; // Show loading indicator while fetching data
  }    // console.log("shopdata",shopData[0].shopName)
  let thShopImg ; 
  
  if(shopData[0].images.length>0)
  {
    console.log(shopData[0].images.length)
    const imagesArray = shopData[0].images
    console.log(imagesArray)
    thShopImg = imagesArray[imagesArray.length - 1].url;
    console.log(thShopImg)

    }

  
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
                <Link className="nav-link" to={`/messages/${shopId}`} > <BsChatSquareDots/> Messages</Link>
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
                                <img src={thShopImg} className={style.shopImg} alt='' />

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
                              <Link className='text-dark' to={`/myshopdata/${shopId}`}> <strong>{shopData[0].shopName}.sijilmassa.com</strong> </Link>
                            </div>

                        </div>
             <div className='row py-2 d-flex justify-content-between' >
                           <div className='col-3 row' >
                           <div className='col-8'> <strong>Stats overview for</strong>  
                           </div>
                           <div className='col-4'><select class="form-select form-select-sm" style={{width: 200 }}>
                                   <option selected>Today</option>
                                   <option>Ysterday</option>
                                   <option>Last 7 days</option>
                                   <option>Last 30 days</option>
                                   <option>This yers</option>
                                   <option>All time</option>
                  </select></div>
          
                     </div>
       




                      <div className='col-2'> <Link to='/' className='text-dark'>View detailed stats</Link> </div>
                        </div>
              <div className='row py-3'>
                <div className={style.statsCard + ' col-3 py-3' } > 
                <div className={style.textf15 + ' text-center '}> TOTAL VIEWS</div>
                <div className={style.textf37 + ' text-center '} >  167 </div>
                <div className='text-center'> - 20% </div>
                <div className={style.textf14 + ' text-center '}> just now</div>
                </div>
                

                <div className={style.statsCard + ' col-3 py-3' } > 
                <div className={style.textf15 + ' text-center '}> VISITS</div>
                <div className={style.textf37 + ' text-center '} >  33 </div>
                <div className='text-center'> - 27% </div>
                <div className={style.textf14 + ' text-center '}> 5 hours ago</div>
                

              </div>
                <div className={style.statsCard + ' col-3 py-3' } > 
                <div className={style.textf15 + ' text-center '}> orders </div>
                <div className={style.textf37 + ' text-center '} >  3 </div>
                <div className='text-center'> + 50% </div>
                <div className={style.textf14 + ' text-center '}> just now</div>
                </div>
                

              
                <div className={style.statsCard + ' col-3 py-3' } > 
                <div className={style.textf15 + ' text-center '}> REVENUE</div>
                <div className={style.textf37 + ' text-center '} >  USD 0 </div>
                <div className='text-center'> - 20% </div>
                <div className={style.textf14 + ' text-center '}> just now</div>
                </div>
              </div>

              <div className='row py-4'>
                <div className={style.textf26}> Your open orders</div>

              </div>
              
              <div className='row py-2 justify-content-between'>
                <div className={style.orderCard}>
                  <div className={style.textf15}> Ship withen a week </div>
                  <div className='text-muted my-2'> 4 Orders </div>
                </div>

                <div className={style.orderCard}>
                  <div className={style.textf15}> on delivery </div>
                  <div className='text-muted my-2'> 2 Orders </div>
                </div>

                <div className={style.orderCard}>
                  <div className={style.textf15}> All orders </div>
                </div>
              </div>

              <div className='row py-4'>
              <div className='row py-2 d-flex justify-content-between' >
                           <div className='col-3 row' >
                           <div className={style.textf26 } > Listings
                           </div>
                           
      
                      </div>
       
                      <div className='col-2'> <Link to={`/allshopproduct/${shopId}`} className='text-dark'>View All Product</Link> </div>
               </div>

              </div>

              <div className={style.listingsCard + ' row d-flex justify-content-between py-2'} >
                <div className='col-3'> Active listings</div>
                <div className='col-1'> 180</div>
              </div>

              <div className={style.listingsCard + ' row d-flex justify-content-between py-2'} >
                <div className='col-3'> Expired</div>
                <div className='col-1'> 0</div>
              </div>

              <div className={style.listingsCard + ' row d-flex justify-content-between py-2'} >
                <div className='col-3'> Sold out</div>
                <div className='col-1'> 0</div>
              </div>


                <div className='row py-4'>
                <div className={style.textf26}> Recent activity</div>
                </div> 

                <div className='row '>
                <Link to='/' className='text-dark'> trissa favorit your items jellaba marocain </Link>

                </div>
                <div className='row py-2'>
                <Link to='/' className='text-dark'> trissa favorit your items kimuno </Link>


                </div>

                <Button> + Show more</Button>

              <div className='py-5'></div>


              

        </div>

      </div>

      </div>
    </>
  )
}

export default TheShop