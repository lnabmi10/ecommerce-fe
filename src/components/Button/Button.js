import React from 'react'
import style from './Button.module.css'
import { Link } from 'react-router-dom'

function Button(props) {
    const {tolink} =props
  return (
    <>
    <Link className={style.buttonStyle}>{props.children}</Link>   
    </>
  )
}

export default Button