import React from 'react'
import './Product.css'

function Product( {name, image}) {
    return (
        <div className="product">
            <img src={image} className="product__image" alt="" />
            <p className="product__name">{name}</p>

        </div>
    )
}

export default Product
