import React from "react";
import Product from "./Product";
import './ProductTrack.css'

function ProductTrack({ title, images }) {
  return (
    <div className="product__track">
      <header>
        <div class="track__title">
            <span>{title}</span>
        </div>
      </header>
      <div className="track">
        <Product
        name="Chuông gọi phục vụ không dây"
        image={images[0]}
        />
        <Product
        name="Chuông gọi phục vụ không dây"
        image={images[0]}
        />
        <Product
        name="Chuông gọi phục vụ không dây"
        image={images[0]}
        />
        <Product
        name="Chuông gọi phục vụ không dây"
        image={images[0]}
        />
        <Product
        name="Chuông gọi phục vụ không dây"
        image={images[0]}
        />
        {/* <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div> */}
      </div>
    </div>
  );
}

export default ProductTrack;
