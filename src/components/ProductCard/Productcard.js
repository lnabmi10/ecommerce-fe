import React from 'react'
import style from './Productcard.module.css'
import ReactStars from "react-rating-stars-component";
import addCartImg from '../../images/images/add-cart.svg'
import { Link } from 'react-router-dom'


function Productcard(props) {
    const {productImg,productTitle,productBrand,productPrice}=props
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
  return (
    <>
    <div className='col-2'>
        <div className={style.productCardStyle +' position-relative' }>
            <div className={style.productImgStyle }>
                <img className='img-fluid' src={productImg} alt='productImage' />
            </div>
            <div className={style.productDetailsStyle}>
                <h6 className={style.productBrandStyle}>{productBrand}</h6>
                <h5 className={style.productTitleStyle} > {productTitle}</h5>
                    <ReactStars
                       count={5}
                       onChange={ratingChanged}
                       size={24}
                       activeColor="#ffd700"
                       value={3.5}
                       edit={false}
                     />
                <p className={style.productPriceStyle}>{productPrice}</p>
            </div>
            <div className={style.productActionBar + ' position-absolute'}>
                <div className='d-flex flex-column '>
                    <Link> <img src={addCartImg} /> </Link>
                    <Link>b</Link>
                    <Link>c</Link>
                    <Link>d</Link>

                </div>

            </div>

        </div>
    </div>

    </>
  )
}

export default Productcard