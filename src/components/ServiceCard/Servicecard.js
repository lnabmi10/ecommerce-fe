import React from 'react'
import style from './Servicecard.module.css'

function servicecard(props) {
    const {imgSrc, ServiceTitle ,serviceText}=props


  return (
    <>
    <div className={'d-flex align-items-center ' + style.gap10 }>
        <img className={style.imgStyle} src={imgSrc} alt='services' />
        <div>
            <h6>{ServiceTitle}</h6>
            <p className='mb-0'>{serviceText}</p>
        </div>
    </div>
    
    </>
  )
}

export default servicecard