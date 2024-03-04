import React from 'react'
import style from './MyStore.module.css'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import {Link,NavLink} from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import Button  from '../../components/Button/Button';
import minibrahinImg from '../../images/images/miniBrahim.png'



function MyStore() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
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
                <Link className="nav-link active" aria-current="page" href="#">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Listings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Messages</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " href="#" >Orders & Shipping</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Star Seller</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Stats</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Marketing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Finances</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Help</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Settings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Finances</Link>
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
                                <div className='container shop-name'> <h2>mini Brahim</h2> </div>
                                <div> <p> casablanca,derb ghalaf</p>  </div>
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

        </div>

      </div>

      </div>
    </>
  )
}

export default MyStore