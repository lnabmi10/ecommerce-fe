import React from 'react'
import mainBanner1Img from '../../images/images/main-banner-1.jpg'
import './Home.css'
// COMPONENET
import Button from '../../components/Button/Button'
import Smallbanner from '../../components/SmallBanner/Smallbanner'
import Servicecard from '../../components/ServiceCard/Servicecard'
import Categorycard from '../../components/CategoryCard/Categorycard'

// Import images
import catbanner01 from '../../images/images/catbanner-01.jpg'
import alienpketImg from '../../images/images/alienpoket.png'
import colierLivreImg from '../../images/images/colierLivre.png'
import chemisesImg from '../../images/images/chemises.png'
import serviceImg from '../../images/images/service.png'
import service2Img from '../../images/images/service-02.png'
import service3Img from '../../images/images/service-03.png'
import service4Img from '../../images/images/service-04.png'
import service5Img from '../../images/images/service-05.png'
import cameraImg from '../../images/images/camera.jpg'
import tvImg from '../../images/images/tv.jpg'
import watchImg from '../../images/images/watch.jpg'
import tabImg from '../../images/images/tab1.jpg'
import speakerImg from '../../images/images/speaker.jpg'


function Home() {
  
  return (
    <>
    <section className='home-wrapper-1 py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative '>
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
              <Smallbanner description='Best sales' name='lapotop mac' price='$1999.00 or $84.95/mo.'  imageSrc={catbanner01} />
              <Smallbanner description='new arrival' name='alien poket' price='from $50.00' imageSrc={alienpketImg} />
              <Smallbanner description='15% off' name='colier book' price='very original' imageSrc={colierLivreImg} />
              <Smallbanner description='free shipping' name='chemises' price='limited style' imageSrc={chemisesImg} />

            </div>

          </div> 
        </div>
      </div>

    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between' >

            <Servicecard imgSrc={serviceImg} ServiceTitle='free shipping' serviceText='from all order over $2000' />
            <Servicecard imgSrc={service2Img} ServiceTitle='Daily Surprise Offers' serviceText='save up to 25% off' />
            <Servicecard imgSrc={service3Img} ServiceTitle='support 24/7' serviceText='get factory direct Prices' />
            <Servicecard imgSrc={service4Img} ServiceTitle='Affrodable Prices' serviceText='from all order over $2000' />
            <Servicecard imgSrc={service5Img} ServiceTitle='secure payments' serviceText='100% protected payements' />

            </div>

          </div>
        </div>
      </div>

    </section>
    <section className='home-wrapper-3 py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex flex-wrap align-items-center  justify-content-between '>
              <Categorycard catgoryImgSrc={cameraImg} categoryTitle='Cameras' categoryText='show items' />
              <Categorycard catgoryImgSrc={speakerImg} categoryTitle='Music & Gaming' categoryText='show items' />
              <Categorycard catgoryImgSrc={tvImg} categoryTitle='Smart TV' categoryText='show items' />
              <Categorycard catgoryImgSrc={tabImg} categoryTitle='Phone' categoryText='show items' />
              <Categorycard catgoryImgSrc={watchImg} categoryTitle='Smart Watches' categoryText='show items' />
              <Categorycard catgoryImgSrc={cameraImg} categoryTitle='Jewelry' categoryText='show items' />
              <Categorycard catgoryImgSrc={speakerImg} categoryTitle='Laptop' categoryText='show items' />
              <Categorycard catgoryImgSrc={tvImg} categoryTitle='Clothes' categoryText='show items' />
              <Categorycard catgoryImgSrc={tabImg} categoryTitle='Accessories' categoryText='show items' />
              <Categorycard catgoryImgSrc={watchImg} categoryTitle='Bags' categoryText='show items' />

            </div>

          </div>
        </div>
      </div>

    </section>
    </>
  )
}

export default Home