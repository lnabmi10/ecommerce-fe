<>
    <div className='container'>
      <div className='row'>
        <div className='col-2 '> 
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav flex-column">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#"><BsFillHouseDoorFill/> Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/allshopproduct/${shopId}`}><BsCardList/> Listings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#"> <BsChatSquareDots/> Messages</Link>
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
                        
                         </div>

      </div>

      </div>
    </>