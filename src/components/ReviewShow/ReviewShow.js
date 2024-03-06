import React from 'react'
import style from './ReviewSho.module.css'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import imgClient from '../../images/images/client1.PNG'
import imgproduct from '../../images/images/jellaba.webp'


function ReviewShow() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
  return (
    <>
    <div className='container py-4'>
        <div className='row' >
            <hr/>
        </div>
        <div className='row' > 
        <div className=' col-3' >
            <div  >
            
                <img src={imgClient} className={style.clientImgdiv} alt='img client' />
            </div>
        </div>
        <div className='col-3 py-2' >
            <div><Link><h5 className='text-dark'>aziz tsouli</h5></Link></div>
            <h7>on Jan 31, 2024</h7>
            <div>
            <ReactStars
                                                                         count={5}
                                                                         onChange={ratingChanged}
                                                                         size={24}
                                                                         activeColor="#ffd700"
                                                                         value={5} 
                                                                         edit={false}
                                                                          /> 
            </div>
        </div>
        
         </div>

        <div className='row' >
            <p>Ordered a custom made kaftan in terms of colours and sizing. It arrived this morning.
                 Fits perfectly and the length is spot on. I am delighted with it. The workmanship and attention to
                  detail is excellent.
                 Can’t wait to wear it and I would highly recommend. I will definitely purchase another one.
                 </p>     
        </div>
        <div className='row'>
            <div className='col-2' ></div>
            <div className='col-2'>
                <Link to=''><img src={imgproduct} className={style.productImgdiv} alt='product' /></Link>
                
            </div>
            <div className='col-8'>
                 <Link><p className='text-dark'>Jellaba marocaine 
           robe marocaine pour femme arabe abaya djalaba dress élégant et chic</p></Link>  
            </div>
        </div>
    </div>
    </>
    
  )
}

export default ReviewShow