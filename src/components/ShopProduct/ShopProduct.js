import React from 'react'
import style from './ShopProduct.module.css'
import jellaba from '../../images/images/jellaba.webp'

function ShopProduct() {
    
  return (
    <>
        <div className={ style.shopProductCard + ' container  '}>
            <div className='img-Poduct' >
                <img className={style.imgShopProduct +' img-fluid'} src={jellaba} alt='jellaba' />
            </div>
            <div className={style.descPorduct } >
                <p className=' my-0 py-0'>Jellaba marocaine noire d'hiver luxe velours </p>
            </div>
            <div className={style.pricePorduct }>
                <h5 className=' my-0 py-0'> 150 $</h5>
            </div>
            <div className={style.notePorduct} >
                <p className=' my-0 py-0'>Only 1 left and in 1 cart</p>
            </div>


        </div>
    </>
  )
}

export default ShopProduct