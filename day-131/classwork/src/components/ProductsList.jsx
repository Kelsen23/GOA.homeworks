import './ProductsList.css';
const ProductsList = ({data}) => {
  return (
    <div className='products'> 
      {data.map((value, index) => {
        return (
          <div className='productCard' key={index}>
              <h1>{value.name}</h1>
              <p className='price'>Price: {value.price}</p>
              <p className='desc'>{value.desription}</p>
              <p>Hearts: {value.hearts}</p>
              <img className='image' src={value.image} />
          </div>
        )
      })}
    </div>
  )
}

export default ProductsList