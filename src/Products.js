import React from 'react'
import './Products.css'
import ProductTrack from './ProductTrack'

function Products() {
    const imageSource = ['./product.jpg']
    return (
        <div className="products">
            <ProductTrack
            title="SẢN PHẨM BÁN CHẠY"
            images={imageSource}
            />
            <ProductTrack 
            title="SẢN PHẨM NỔI BẬT"
            images={imageSource}
            />
            <ProductTrack 
            title="CHUÔNG GỌI PHỤC VỤ"
            images={imageSource}
            />
            <ProductTrack 
            title="THẺ RUNG TỰ PHỤC VỤ" 
            images={imageSource}
            />
        </div>
    )
}

export default Products
