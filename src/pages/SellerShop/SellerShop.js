import React from 'react'
import style from './SellerShop.module.css'
import ReactStars from "react-rating-stars-component";
import Button from '../../components/Button/Button'
import { Link, NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import ShopProduct from '../../components/ShopProduct/ShopProduct';
import ReviewShow from '../../components/ReviewShow/ReviewShow';


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
            <div className=''>
                <div className='row' >
                    <div className='col-3'>
                        <div className='container'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div> <h5>ALL</h5> </div>
                                <div>  55 </div>
                            </div>
                            <div className='container'>
                                <div className='py-3 '> <Button> Request Custom Order</Button> </div>
                                <div className='py-3'>  <Button> Contact shop Owner</Button>  </div>
                                <div className='py-1'> <p  > <Link className='text-dark '> 22 Sales </Link> </p> </div>
                                <div className='py-1'> <p  > <Link className='text-dark' > 50 Admirals </Link> </p> </div>
                                <div className='py-1'> <p  > <Link className='text-dark' > Report this shop </Link> </p> </div>

                            </div>
                            
                            
                          
                           
                        </div>
                        
                    </div>
                    <div className='col-9'>
                        <div className='container d-flex align-items-center justify-content-between'>
                            <div><h4 >Items</h4> </div>
                            <div > Sorting </div>

                        </div>
                        <div className={style.gap4 +  '  container d-flex flex-wrap align-items-center'} >
                        <ShopProduct/>
                        <ShopProduct/>
                        <ShopProduct/>
                        <ShopProduct/>
                        <ShopProduct/>
                        <ShopProduct/>
                        <ShopProduct/>
                        <ShopProduct/>
                        <ShopProduct/>
                    </div>

                    </div>
                    
                </div>
            </div>

        </div>
        <hr/>
        <div className='reviews-part py-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'> <div><h4 >Reviews</h4> </div></div>
                    <div className='col-9 container'>
                        
                        <div className=' container ' >
                            <div className='row d-flex flex-wrap align-items-center justify-content-between  '>
                                <div className=' col-7 d-flex flex-wrap align-items-center ' >
                                                                        <p className='my-0 px-2'>Average item review</p> 
                                                                        <ReactStars
                                                                         count={5}
                                                                         onChange={ratingChanged}
                                                                         size={24}
                                                                         activeColor="#ffd700"
                                                                         value={5} 
                                                                         edit={false}
                                                                          /> 
                            </div>
                            <div className='col-3'> sort by : MostRecent </div>

                            </div>
                        
                            
                        </div>
                        <div className='container'>
                            <ReviewShow/>
                            <ReviewShow/>
                            <ReviewShow/>
                            <ReviewShow/>

                        </div>
                    </div>

                </div>


            </div>
           

        </div>
        <hr/>

        <div className='About-part py-4'>
        <div className='container'>
                <div className='row'>
                    <div className='col-3'> 
                    <div className='d-flex flex-wrap align-items-center gap-15' ><h4 >About </h4> <h6> miniBrahim</h6> </div>
                    <div><h6>on Sijilmassa since </h6> <h5> 2022</h5> </div>
                    <div><h6>Sales </h6> <h5> 55</h5> </div>
                    </div>
                    <div className='col-9 container'>
                        <p>
                        miniBrahim was founded in 2015 and offers stunning artisan jewelry and accessories including statement jewelry, gifts for her and him, memorial jewelry, and family jewelry sets and accessories.

                        Each piece is designed, assembled, stamped by hand, polished, and lovingly packaged for a wonderfully thoughtful gift that speaks to the heart.

                        Statement jewelry gifts include personalized necklaces and bracelets, monogram necklaces, scriptural jewelry and gifts, custom keepsake gifts, and more 💗

                        Memorial & Urn jewelry and accessories are created to memorialize babies born still and child angels. Each piece of jewelry and every accessory tells your story in a way that’s personal to you and your family.
                        </p>
                        
                    </div>

                </div>


            </div>
           
        </div>
        <hr/>

        <div className='policies-part py-4'>
        <div className='container'>
                <div className='row'>
                    <div className='col-3'> <div><h4 >Shop policies</h4> </div>
                    <div><p>Last updated on February 16, 2023</p></div></div>
                    <div className='col-9 container'>
                        
                        
                    </div>

                </div>


            </div>
        </div>
    </>
  )
}

export default SellerShop