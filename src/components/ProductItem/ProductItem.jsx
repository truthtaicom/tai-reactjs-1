import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductItem({ onClickProduct, product_id, img_url, shop_name, name, final_price, price, promotion_percent = 0 }) {
  const [state, setState] = useState(false)
  const [count, setCount] = useState(0)
  const onClickCart = () => {
    console.log("okk")
    setState(true)
    setCount(count + 1)
    onClickProduct({ name, final_price, price, img_url })
  }
  return (
    <div className="col-xl-4 col-lg-6 col-md-6">
      <div className="product-wrapper mb-50">
        <div className="product-img mb-25">
          <a href="#">
            <img src={img_url} alt="" />
          </a>
          <div className="product-action text-center">
            <a title="Shoppingb Cart" onClick={onClickCart}>
              <i className="fas fa-shopping-cart" />
            </a>
            <Link to={`/product-detail/${product_id}`} title="Quick View">
              <i className="fas fa-search" />
            </Link>
          </div>
        </div>
        <div className="product-content pr-0">
          <div className="pro-cat mb-10">
            { state === true && <p>Toi da click</p> }
            <a href="#">{shop_name} {count}</a>
          </div>
          <h4>
            <a href="#">{name}</a>
          </h4>
          <div className="product-meta">
            <div className="pro-price">
              <span>{final_price} ({promotion_percent} %)</span>
              <span className="old-price">{price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
