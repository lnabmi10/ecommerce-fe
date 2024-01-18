import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import newletterImg from '../../images/images/newsletter.png'
import { BsYoutube,BsFacebook ,BsInstagram ,BsTwitterX ,BsApple ,BsGooglePlay  ,BsWhatsapp  } from "react-icons/bs";
const aa = 'classtest'

const Footer = () => {
  return (
    <>
    <footer className='py-3' >
    <div className={`container ${aa}`}>
        <div className='row align-items-center'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'>
              <img src={newletterImg} alt='chat' />
              <h3 className='mb-0 text-white'>sign up to chat</h3>
            </div>
          </div>
          <div className='col-7 '>
          
            <div className="spanStyle input-group  ">
              <input type="text" className="form-control py-1" placeholder=" your email adress ..." aria-label=" your email adress ..." aria-describedby="basic-addon2"/>
              <span className="input-group-text p-2 text-white" id="basic-addon3"> subscribe </span>
            </div>
            
        
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-3 fs-7' >
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <h4 className='text-white'>
              Contact Us
            </h4>
            <div className='text-white'>
              <adress >
              202 lotissement, 
              <br/>
               Bd Haj Fateh, Casablanca
              <br/>
              code Postal :20100
              </adress>
              <a href='tel : 00212 61252686' className='mt-4 d-block mb-2 text-white' >00212 61252686</a>
              <a href='mailto: souarimohammed@gmail.com' className='mt-4 d-block mb-2 text-white' >souarimohammed@gmail.com</a>
              <div className='social-icons d-flex gap-15 text-white mt-3'>
                <a href=''><BsYoutube  className='text-white' /></a>
                <a href=''> <BsFacebook className='text-white'/> </a>
                <a href=''> <BsInstagram className='text-white'/> </a>
                <a href=''> <BsWhatsapp className='text-white'/> </a>
                <a href=''> <BsTwitterX className='text-white'/> </a>
              </div>


            </div>

          </div>
          <div className='col-2'>
            <h4 className='text-white'>
              Information

            </h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1' >Private Policy</Link>
              <Link className='text-white py-2 mb-1' >Refund Policy</Link>
              <Link className='text-white py-2 mb-1' >Shipping Policy</Link>
              <Link className='text-white py-2 mb-1' >Terms & Conditions</Link>
              <Link className='text-white py-2 mb-1' >Blogs</Link>

            </div>
          </div>
          <div className='col-2'>
            <h4 className='text-white'>
              Account

            </h4> 
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1' >About Us</Link>
              <Link className='text-white py-2 mb-1' >Search</Link>
              <Link className='text-white py-2 mb-1' >Faq</Link>
              <Link className='text-white py-2 mb-1' >Contact</Link>
              <Link className='text-white py-2 mb-1' >Size chart</Link>

            </div>
          </div>
          <div className='col-2'>
            <h4 className='text-white'>
              Quick Links
            </h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1' >Phone</Link>
              <Link className='text-white py-2 mb-1' >Clothes</Link>
              <Link className='text-white py-2 mb-1' >Laptop</Link>
              <Link className='text-white py-2 mb-1' >Cars items</Link>

            </div>

          </div>
          <div className='col-3'>
            <h4 className='text-white'>
              Our App
            </h4>
            <div>
              <p className='text-white'>
                Download our app and get extra 15% discount on your first order
              </p>
              <div className='donlowadButton d-flex gap-15'>
                <div className='appstore-download'>
                <button type="button" className="btn btn-light"> <div></div> <BsApple className='app-store-icon' /> <span> Download on the <br/> <h6>App Store</h6> </span> </button>

                </div>
                <div className='playstore-download' >
                <button type="button" className="btn btn-light"> <BsGooglePlay/><span> Get it ob <br/> <h6>Google play</h6> </span> </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4' >
      <div className='container'>
        <div  className='row'>
          <div className='col-12' >
            <p className='text-center mb-0 text-white' > &copy; {new Date().getFullYear()} ; powered by devloper Mohammed Souari</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer