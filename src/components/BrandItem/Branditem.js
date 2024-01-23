import React from 'react'
import style from './Branditem.module.css'


function Branditem(props) {
    const {brandImg} = props 
  return (


    <>
        <div className='mx-4 w-25'>
            <img src={brandImg} alt='brand' />
        </div>

    </>
  )
}

export default Branditem