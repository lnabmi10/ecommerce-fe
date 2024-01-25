import React from 'react'
import style from './Productcard.module.css'
import ReactStars from "react-rating-stars-component";
import addCartImg from '../../images/images/add-cart.svg'
import viewImg from '../../images/images/view.svg'
import compareImg from '../../images/images/prodcompare.svg'
import wishlistImg from '../../images/images/wish.svg'
import tabImg from '../../images/images/tab1.jpg'

import { Link } from 'react-router-dom'


function Productcard(props) {
    const {productImg,productTitle,productBrand,productPrice}=props
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
  return (
    <>
    <div className='col-2'>
        <Link className={style.productCardStyle +' position-relative' }>
            <div className={style.WishlistIconDiv }>
                <Link>
                <img src={wishlistImg} alt='wishlist icon' />

                </Link>

            </div>
            <div className={style.productContainerImg} >
                <img className={style.productImg1Style  }  src={productImg} alt='productImage' />
                <img className={style.productImg2Style   }  src={tabImg} alt='productImage' />
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
                    <Link><img src={viewImg}/></Link>
                    <Link><img src={compareImg}/></Link>

                </div>

            </div>

        </Link>
    </div>

    </>
  )
}

export default Productcard