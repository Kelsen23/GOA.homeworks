import React from 'react';
import './ProductList.css';

const ProductList = ({data}) => {
  return (
    <div className='products-container'>
      {data.map((value, index) => {
        return (
          <div className="product" key={index}>
            <div>
              <h1>{value.name}</h1>
            </div>
            
            <div>
              <p className="price">{value.price}</p>
            </div>

            <div>
              <p className="description">{value.description}</p>
            </div>

            <div>
              <img className="product-image" src={value.image} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProductList
