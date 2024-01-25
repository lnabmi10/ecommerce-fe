import React from 'react'
import style from './Sdicountcard.module.css'
import homeAppImg from '../../images/images/homeapp.jpg'
import ReactStars from "react-rating-stars-component";
import Button from '../Button/Button'


function Sdiscountcard() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
  return (
    <>
    <div className='col-4'>
        <div className={style.sdCard}>
            <div className='d-flex justify-content-between' >
                <div>
                    <img className='img-fluid'  src={homeAppImg} />
                </div>
                <div className={style.sdCContent}>
                    <h5 className={style.sdCBrand} > Samsung</h5>
                    <h6 className={style.sdCTitle} > Samsung Home App nj109</h6>
                    <ReactStars
                       count={5}
                       onChange={ratingChanged}
                       size={24}
                       activeColor="#ffd700"
                       value={3.5}
                       edit={false}
                     />
                    <p className={style.sdPrice}>
                        <span>$122.00</span> &nbsp; <strike>$180.00</strike>
                    </p>
                    <div className={style.discountTill + ' d-flex align-items-center'}>
                        <p className='m-0'><b> 4 </b>days</p>
                        <div className='d-flex align-items-center' >
                            <span className='badge rounded-circle m-1 p-2 bg-danger' >05</span> <span>:</span>
                            <span className='badge rounded-circle m-1 p-2 bg-danger' >16</span><span>:</span>
                            <span className='badge rounded-circle m-1 p-2 bg-danger' >22</span>
                        </div>
                        

                    </div>
                    <div className={style.productCount +' mt-3 mb-3' }>
                            <p>products : 5</p>
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" 
                            style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0"
                             aria-valuemax="100"></div>
                            </div>
                    </div>
                    <Button>Option</Button>

                </div>
            </div>

        </div>
    </div>

    </>
  )
}

export default Sdiscountcard