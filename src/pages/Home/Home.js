import React from 'react'
import mainBanner1Img from '../../images/images/main-banner-1.jpg'
import './Home.css'
import Button from '../../components/Button/Button'
import Smallbanner from '../../components/SmallBanner/Smallbanner'
import catbanner01 from '../../images/images/catbanner-01.jpg'


function Home() {
  return (
    <>
    <section className='home-wrapper-1 py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative p-3'>
              <img src={mainBanner1Img} className='img-fluid rounded-3'  alt="main-banner" />
              <div className='main-banner-content position-absolute'>
              <h4>MACBOOK FOR PROGRAMMING</h4>
              <h5>MacBook pro 14 </h5>
              <p>From $1499.00 or $74.95/mo.</p>
              <Button to=''>buy now</Button>

              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap justify-content-between align-items-center'>
              <Smallbanner description='des1' name='title1' price='pric1' imageSrc={catbanner01} />
              <Smallbanner description='des1' name='title1' price='pric1' imageSrc={catbanner01} />
              <Smallbanner description='des1' name='title1' price='pric1' imageSrc={catbanner01} />
              <Smallbanner description='des1' name='title1' price='pric1' imageSrc={catbanner01} />

            </div>

          </div> 
        </div>
      </div>

    </section>
    </>
  )
}

export default Home