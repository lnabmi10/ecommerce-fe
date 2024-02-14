import React from 'react'
import style from './SellerShop.module.css'
import ReactStars from "react-rating-stars-component";
import Button from '../../components/Button/Button'
import { NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import ShopProduct from '../../components/ShopProduct/ShopProduct';


function SellerShop() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
  return (
    <>
        <div className='py-4'></div>
        <div className=' shop-info container mt-3 mr-4 ml-4 py-4'>
            
            <div className='row'>
                <div className='col-10' >
                    <div className='row'>
                        <div className='col-6'> 
                        <div className='row'>
                            <div className='col-4'>
                                <img src='' />

                            </div>
                            <div className='col-8'>
                                <div className='container shop-name'> <h2>mini Brahim</h2> </div>
                                <div> <p> casablanca,derb ghalaf</p>  </div>
                                <div> 17 sales</div>
                                <div> <ReactStars
                                          count={5}
                                          onChange={ratingChanged}
                                          size={24}
                                          activeColor="#ffd700"
                                          value={4.5}
                                          edit={false}
                                        />
                                </div>
                                <div>
                                    <Button> follow the shop </Button>
                                </div>

                            </div>

                        </div>
                        </div>
                        <div className='col-6'> 
                        <div className='row pb-2 container'> minibrahim is top seller </div>
                        <div className='row'> 
                        <div className='col-4'>
                            <p>
                            Smooth shipping Has a history of shipping on time with tracking.
                            </p>
                        </div>
                        <div className='col-4'><p>
                        Speedy replies Has a history of replying to messages quickly
                            </p></div>
                        <div className='col-4'> <p>
                        Rave reviews Average review rating is 4.8 or higher
                            </p></div>
                         </div>
                        </div>

                    </div>
                </div>
                <div className='col-2'> test2</div>
            </div>
        </div>
        <div className='container py-4 mt-3 mx-4 shop-announcement' >
            <div className='row'>
                <div className='col-3'>
                     <div><h4>Announcement</h4></div>
                     <div><p>Last updated on Apr 6, 2023</p></div>
                </div> 
                <div className='col-7'>
                    <p>Hello , welcome to my shop where you will get introduced to the most beautiful 
                        and exquisite traditional handmade Moroccan dresses that are made with passion 
                        and refined craftsmanship.</p>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
        <div className='container py-4 mt-3 mx-4 shop-navbar' >
            <div className='row d-flex  justify-content-between' >
                <div className='shopNav col-6' >
                        <div className='shop-links '>
                            <div className='d-flex align-items-center gap-15 m-2'>
                            
                              <NavLink className='text-dark' to='/' > <h6>Items</h6>  </NavLink>
                              <NavLink className='text-dark' to='/' > <h6>Reviews</h6> </NavLink>
                              <NavLink className='text-dark' to='/' > <h6>About</h6> </NavLink>
                              <NavLink className='text-dark' to='/' > <h6>Shop Policies</h6> </NavLink>
                            </div>
                        </div>
                </div>
                <div className='shopSearch col-4' >
                    <div className="input-group ">
                           <input type="text" className="form-control " placeholder="search product ..." aria-label="search product ..." aria-describedby="basic-addon2"/>
                           <span className="input-group-text " id="basic-addon2"> <BsSearch  /> </span>
                    </div>
                </div>
            </div>
        </div>
        <div className='items-part py-4'>
            <div className='container '>
                <div className='row' >
                    <div className='col-3'>
                        items
                    </div>
                    <div className='col-9 container'>
                        <ShopProduct/>
                    </div>
                </div>
            </div>

        </div>
        <div className='reviews-part py-4'>
            reviews

        </div>

        <div className='About-part py-4'>
            about

        </div>

        <div className='policies-part py-4'>
            policies

        </div>
    </>
  )
}

export default SellerShop