import React from 'react'
import './Product.css'

function Product( {name, image}) {
    return (
        <div className="product">
            <img src={image} className="product__image" alt="" />
            <div className="product__name">
                {name}
            </div>
        </div>
    )
}

export default Product
