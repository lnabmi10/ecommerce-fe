import React from 'react'
import style from './Blogcard.module.css'
import Button from '../Button/Button'

function Blogcard(props) {
    const {blogImg,blogTitle,blogDesc,blogDate} = props
  return (
    <>
    <div className='col-3'>
        <div className={style.blogStyle}>
            <div>
                <img src={blogImg} alt='blog' className={style.blogImgStyle + ' img-fluid' }  />

            </div>
            <div className={style.blogContentStyle}>
                <p className={style.blogDateStyle}>{blogDate}</p>
                <h5 className={style.blogTitleStyle}>{blogTitle}</h5>
                <p className={style.blogDescStyle}>{blogDesc}</p>
                <Button toLink='/'>Read More</Button>

            </div>


        </div>

    </div>
    </>
  )
}

export default Blogcard