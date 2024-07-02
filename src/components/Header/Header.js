import React from 'react'
import './Header.css'
import {Link,NavLink} from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import compare from '../../images/images/compare.svg'
import wishlistSvg from '../../images/images/wishlist.svg'
import cartSvg from '../../images/images/cart.svg'
import userSvg from '../../images/images/user.svg'
import menuSvg from '../../images/images/menu.svg'



const Header = () => {
  return (
    <>
    <header className='header-top-strip pt-1'>
     <div className='container' >
      <div className='row' >
        <div className='col-6'>
          <p className='text-white mb-0'>free shipping over 1000$ and free retun</p>
        </div>
        <div className='col-6'>
          <p className='text-end text-white'>
            hot line : <a className='text-white' href='tel:00212 021 512 554'> 00212 021 512 554</a>
          </p>
        </div>

      </div>
      


      </div> 
    </header>
    <header className='header-upper py-3' >
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-4'>
            <h2> <Link to='/' className='sijilmassa text-white'> SIJILmassa</Link></h2>
          </div>
          <div className='col-3'>
            <div className="input-group ">
              <input type="text" className="form-control " placeholder="search product ..." aria-label="search product ..." aria-describedby="basic-addon2"/>
              <span className="input-group-text " id="basic-addon2"> <BsSearch  /> </span>
            </div>
            
          </div>
          <div className='col-5'>
            <div className='header-upper-links d-flex align-items-center justify-content-between' >
              <div>
                <Link  className='d-flex align-items-center gap-10 text-white'>
                <img src={compare} alt="compare" />
                <p className='mb-0'>Compare <br/> Products</p>
                </Link>
              </div>
              <div>
                <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white'>
                <img src={wishlistSvg} alt="wishlist" />
                <p className='mb-0'>Favorite <br/> wishlist</p>
                </Link>
              </div>
              <div>
                <Link  to='/login' className='d-flex align-items-center gap-10 text-white'>
                <img src={userSvg} alt="user" />
                <p className='mb-0'>Log in <br/> MyAccount</p>
                </Link>
              </div>
              <div>
                <Link to='/cart' className='d-flex align-items-center gap-10 text-white'>
                <img src={cartSvg} alt="cart" />
                <div className='d-flex flex-column gap-10' >
                  <span className='badge bg-white text-dark'>0</span>
                  <p className='mb-0'>$50.00</p>
                </div>
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </header>
    <header className='header-bottom py-1'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='menu-bottom d-flex align-items-center gap-30'>
              <div>
              <div className="dropdown ">
                     <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-15 align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src={menuSvg} /> <span>categories</span>  
                     </button>
                     <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                          <li><Link className="dropdown-item text-white" to="#">Clothes</Link></li>
                                          <li><Link className="dropdown-item text-white" to="#">Phones</Link></li>
                                          <li><Link className="dropdown-item text-white" to="#">jewelry</Link></li>
                                          <li><Link className="dropdown-item text-white" to="#">Bags</Link></li>
                                          <li><Link className="dropdown-item text-white" to="#">Foods</Link></li>
                                          <li><Link className="dropdown-item text-white" to="#">SmartTV</Link></li>
                     </ul>
              </div>
                
              </div>
              <div className='menu-links'>
                <div className='d-flex align-items-center gap-15 m-2'>
                  <NavLink className='text-white' to='/' >Home</NavLink>
                  <NavLink className='text-white' to='/mystore' >myStore</NavLink>
                  <NavLink className='text-white' to='/sellershop' >SellerShop</NavLink>
                  <NavLink className='text-white' to='/login' >Contact</NavLink>
                  <NavLink className='text-white' to='/my-account' >MyAccount</NavLink>
                  <NavLink className='text-white' to='/' >Blog</NavLink>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </header>
      
    </>
  )
}

export default Header