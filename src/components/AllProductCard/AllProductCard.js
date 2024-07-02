import React from 'react';
import style from '../AllProductCard/AllProductCard.module.css';
import ReactStars from "react-rating-stars-component";
import addCartImg from '../../images/images/add-cart.svg';
import viewImg from '../../images/images/view.svg';
import compareImg from '../../images/images/prodcompare.svg';
import wishlistImg from '../../images/images/wish.svg';
import { Link } from 'react-router-dom';

function AllProductCard({ productImg, productTitle, productBrand, productPrice, secondaryImg,productId, onAddToCart, onAddToWishlist  }) {
    const token = localStorage.getItem('token');
const handleWishlistClick = (e) => {
    e.preventDefault(); 
    onAddToWishlist(productId);
  };
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
 const handleCartClick = (e) => {
    e.preventDefault(); 
    onAddToCart(productId);
  };

    return (
        <div className="">
            <div className={`card ${style.productCardStyle}`}>
                <div className="position-relative">
                    <div className={`${style.wishlistIconDiv} position-absolute top-0 end-0 m-2`}>
                        <Link to="#" onClick={handleWishlistClick} >
                            <img src={wishlistImg} alt="wishlist icon" />
                        </Link>
                    </div>
                    <div className={style.productContainerImg}>
                        <img className={`${style.productImg1Style} card-img-top`} src={productImg} alt="Product" />
                        {secondaryImg && <img className={`${style.productImg2Style} card-img-top`} src={secondaryImg} alt="Product" />}
                    </div>
                </div>
                <div className="card-body text-center">
                    <h6 className={style.productBrandStyle}>{productBrand}</h6>
                    <h5 className={style.productTitleStyle}>{productTitle}</h5>
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
                <div className={`${style.productActionBar} position-absolute bottom-0 start-0 w-100 p-2`}>
                    <div className="d-flex justify-content-around">
                        <Link to="#" onClick={handleCartClick}><img src={addCartImg} alt="Add to Cart" /></Link>
                        <Link to="#"><img src={viewImg} alt="View" /></Link>
                        <Link to="#"><img src={compareImg} alt="Compare" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllProductCard;
