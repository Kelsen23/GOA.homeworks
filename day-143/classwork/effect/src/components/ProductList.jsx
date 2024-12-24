import React, { useEffect, useState } from 'react'

const ProductList = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setData(data))
  }, []);

  return (
    <div>
      <ul>
      {data.map((product, index) => {
        return <li key={index}>{product.title}</li>;
      })}
      </ul>
    </div>
  )
}

export default ProductList