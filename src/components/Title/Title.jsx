import React from 'react'
import image from "../../Assets/title-img.jpeg"
import "./title.scss"

function Title() {
  return (
    <div className='image'>
        <img src={image} alt="Page image" className="title__img" />
        <h1 className='image__text'>Shopping Cart</h1>
    </div>
  )
}

export default Title