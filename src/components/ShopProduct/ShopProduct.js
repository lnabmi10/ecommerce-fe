import React from 'react'
import style from './ShopProduct.module.css'
import jellaba from '../../images/images/jellaba.webp'

function ShopProduct() {
  return (
    <>
        <div className='container'>
            <div className='img-Poduct' >
                <img className='img-fluid' src={jellaba} />
            </div>
            <div className='desc-Poduct' >
                <p>Jellaba marocaine noire d'hiver luxe velours </p>
            </div>
            <div className='price-Poduct' >
                <h5> 150 $</h5>
            </div>
            <div className='note-Poduct' >
                <p>Only 1 left and in 1 cart</p>
            </div>


        </div>
    </>
  )
}

export default ShopProduct