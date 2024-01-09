import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import { BsSearch } from 'react-icons/bs';


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
        <div className='row'>
          <div className='col-2'>
            <h2> <Link className='text-white'> SIJILmassa</Link></h2>
          </div>
          <div className='col-5'>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="search product ..." aria-label="search product ..." aria-describedby="basic-addon2"/>
              <span className="input-group-text" id="basic-addon2"> <BsSearch/> </span>
            </div>
            
          </div>
          <div className='col-5'>
            
          </div>

        </div>

      </div>
    </header>
      
    </>
  )
}

export default Header