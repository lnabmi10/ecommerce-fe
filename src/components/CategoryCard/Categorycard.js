import React from 'react'
import style from './Categorycard.module.css'

function Categorycard(props) {
    const {catgoryImgSrc, categoryTitle ,categoryText}=props

  return (
    <>
    <div className={'d-flex align-items-center ' + style.categoryCardStyle} >
        <div className='p-3'>
            <h6>{categoryTitle}</h6>
            <p>{categoryText}</p>
        </div>
        <img className={style.imgStyle} src={catgoryImgSrc} />
    </div>
    </>
  )
}

export default Categorycard