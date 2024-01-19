import React from 'react'
import style from './Smallbanner.module.css'


function Smallbanner(props) {
   const {description,name,price,imageSrc }=props
  return (
    <>
        <div className={style.smallbanner + ' small-banner position-relative p-1'}>
              <img src={imageSrc} className='img-fluid rounded-3'  alt="small-banner" />
              <div className={style.smallbannercontent + ' position-absolute'} >
              <h4>{description}</h4>
              <h5>{name} </h5>
              <p>{price}</p>
              </div>
            </div>
    </>
  )
}

export default Smallbanner