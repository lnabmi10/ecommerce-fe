import React from 'react'
import style from './Sdicountcard.module.css'
import homeAppImg from '../../images/images/homeapp.jpg'
import ReactStars from "react-rating-stars-component";

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
                    <img src={homeAppImg} />
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
                    <div className={style.sdPrice}>
                        <span>$122.00</span> &nbsp <strike>$180.00</strike>
                    </div>

                </div>
            </div>

        </div>
    </div>

    </>
  )
}

export default Sdiscountcard