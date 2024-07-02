import React from 'react'
import laptopmainBannerImg from '../../images/images/laptopmainbanner.png'
import './Home.css'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'


// COMPONENET
import Button from '../../components/Button/Button'
import Smallbanner from '../../components/SmallBanner/Smallbanner'
import Servicecard from '../../components/ServiceCard/Servicecard'
import Categorycard from '../../components/CategoryCard/Categorycard'
import Branditem from '../../components/BrandItem/Branditem'
import Blogcard from '../../components/Blogcard/Blogcard'
import Productcard from '../../components/ProductCard/Productcard'
import Sdiscountcard from '../../components/SepecialDiscountCard/Sdiscountcard'





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
import brand01 from '../../images/images/brand-01.png'
import brand02 from '../../images/images/brand-02.png'
import brand03 from '../../images/images/brand-03.png'
import brand04 from '../../images/images/brand-04.png'
import brand05 from '../../images/images/brand-05.png'
import brand06 from '../../images/images/brand-06.png'
import brand07 from '../../images/images/brand-07.png'
import brand08 from '../../images/images/brand-08.png'
import blog1 from '../../images/images/blog-1.jpg'


function Home() {
  
  return (
    <>
    <section className='home-wrapper-1 py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative '>
              <img src={laptopmainBannerImg} className='img-fluid rounded-3'  alt="main-banner" />
              <div className='main-banner-content position-absolute'>
              <h4>MACBOOK FOR PROGRAMMING</h4>
              <h5>MacBook pro 14 </h5>
              <p>From $1499.00 or $74.95/mo.</p>
              <Button to='/list-product'>buy now</Button>

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
        <div className='col-12 pb-2'>
            <div className='blog-heading d-flex justify-content-between'> <h3>Categories</h3> <span> <Link to='/' className='text-dark px-5' >...</Link>  </span> </div>
          </div>
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
    <section className='product-wrapper py-5'>
      <div className='container'>
        
        
          
          <div className='row'>
          <div className='col-12 pb-2'>
            <div className='blog-heading d-flex justify-content-between'> <h3>Top Collection</h3> <span> <Link to='/' className='text-dark px-5' >...</Link>  </span> </div>
          </div>
            <Productcard productImg={watchImg} productBrand='Havels' productTitle='Kids watch toolpack multi colored for student' productPrice='$100.00' />
            <Productcard productImg={watchImg} productBrand='Havels' productTitle='Kids watch toolpack multi colored for student' productPrice='$100.00' />
            <Productcard productImg={watchImg} productBrand='Havels' productTitle='Kids watch toolpack multi colored for student' productPrice='$100.00' />
            <Productcard productImg={watchImg} productBrand='Havels' productTitle='Kids watch toolpack multi colored for student' productPrice='$100.00' />
            <Productcard productImg={watchImg} productBrand='Havels' productTitle='Kids watch toolpack multi colored for student' productPrice='$100.00' />
            <Productcard productImg={watchImg} productBrand='Havels' productTitle='Kids watch toolpack multi colored for student' productPrice='$100.00' />
            
            
          </div>

          
        
      </div>

    </section>
    <section className='septial-discount py-5'>
      <div className='container'>
  
          <div className='row'>
          <div className='col-12 pb-2'>
            <div className='blog-heading d-flex justify-content-between'> <h3>Top Discount</h3> <span> <Link to='/' className='text-dark px-5' >...</Link>  </span> </div>
          </div>
          <div className='row'>
            <Sdiscountcard/>
            <Sdiscountcard/>
            <Sdiscountcard/>

          </div>




        </div>
        

        

      </div>
    </section>
    <section className='popular-product py-5'>
      <div className='container'>
        
        
          
          <div className='row'>
          <div className='col-12 pb-2'>
            <div className='blog-heading d-flex justify-content-between'> <h3>Polpular Products</h3> <span> <Link to='/' className='text-dark px-5' >...</Link>  </span> </div>
          </div>
          <div className='col-2' >
            <div className='card' >
              card1
            </div>
            </div>
          <div className='col-2' >
            <div className='card' >
              card2
            </div>
            </div>

            <Productcard productImg={watchImg} productBrand='Havels' productTitle='Kids watch toolpack multi colored for student' productPrice='$100.00' />
            <Productcard productImg={watchImg} productBrand='Havels' productTitle='Kids watch toolpack multi colored for student' productPrice='$100.00' />
            <Productcard productImg={watchImg} productBrand='Havels' productTitle='Kids watch toolpack multi colored for student' productPrice='$100.00' />
            <Productcard productImg={watchImg} productBrand='Havels' productTitle='Kids watch toolpack multi colored for student' productPrice='$100.00' />
            
            
          </div>

          
        
      </div>

    </section>
    <section className='marque-wrapper py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='marque-inner-wrapper card-wrapper'>
              <Marquee className='d-flex gap14'>
               <Branditem brandImg={brand01} />
               <Branditem brandImg={brand02} />
               <Branditem brandImg={brand03} />
               <Branditem brandImg={brand04} />
               <Branditem brandImg={brand05} />
               <Branditem brandImg={brand06} />
               <Branditem brandImg={brand07} />
               <Branditem brandImg={brand08} />
              </Marquee>

            </div>
            
          </div>
        </div>

      </div>

    </section>
    
    <section className='blog-wrapper py-5'>
      <div className='container'>
        
          <div className='row'>
          <div className='col-12 pb-2'>
            <div className='blog-heading d-flex justify-content-between'> <h3>Our Latest Blog</h3> <span> <Link to='/' className='text-dark px-5' >...</Link>  </span> </div>
          </div>
            <Blogcard blogImg={blog1} blogTitle='A beautiful Sunday' blogDate='23 jan, 2024 ' blogDesc='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium nemo? Cumque iure eligendi  inventore assumenda quam , vel maxime.' />
            <Blogcard blogImg={blog1} blogTitle='A beautiful Sunday' blogDate='23 jan, 2024 ' blogDesc='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium nemo? Cumque iure eligendi  inventore assumenda quam , vel maxime.' />
            <Blogcard blogImg={blog1} blogTitle='A beautiful Sunday' blogDate='23 jan, 2024 ' blogDesc='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium nemo? Cumque iure eligendi  inventore assumenda quam , vel maxime.' />
            <Blogcard blogImg={blog1} blogTitle='A beautiful Sunday' blogDate='23 jan, 2024 ' blogDesc='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium nemo? Cumque iure eligendi  inventore assumenda quam , vel maxime.' />
          </div>

          
      </div>

    </section>
    </>
  )
}

export default Home