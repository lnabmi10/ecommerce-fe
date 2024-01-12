import React from 'react'
import './Footer.css'
import {Link,NavLink} from 'react-router-dom'
import newletterImg from '../../images/images/newsletter.png'


const Footer = () => {
  return (
    <>
    <footer className='py-3' >
      <div className='container'>
        <div className='row'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'>
              <img src={newletterImg} />
            </div>
          </div>
          <div className='col-7'></div>
        </div>
      </div>
    </footer>
    <footer className='py-3' ></footer>
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