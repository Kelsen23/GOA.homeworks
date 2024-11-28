import React from 'react';
import ProductList from './components/ProductList.jsx';

const App = () => {

  const data = [
    {
      name: 'Bread',
      price: '$3.49',
      description: 'Good Quality, Tasty Bread made in Lithuania🍞',
      image: "http://upload.wikimedia.org/wikipedia/commons/7/71/Anadama_bread_(1).jpg"
    },

    {
      name: "Cheese",
      price: '$8.00',
      description: 'Delicious Cheese made in Switzerland🧀',
      image: "https://cdn.britannica.com/14/167214-050-3F143067/Cheese-assortment-Blue-cheese-swiss-Brie-parmesan.jpg"
    },

    {
      name: "Milk",
      price: '$5.50',
      description: 'Milk for Chads🥛🍼',
      image: "http://www.sheriglows.com/wp-content/uploads/raw-milk.jpg"
    }, 

    {
      name: "Meat",
      price: '$30.99',
      description: 'High-Quality Meat🥩',
      image: "https://s.yimg.com/uu/api/res/1.2/Ggxbs2A_87ATT8amcSrREw--~B/aD0zMzc2O3c9NjAwMDtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2019-10/a36f5790-e43a-11e9-accf-64e2db22d551"
    }
  ]

  return (
    <div>
      <ProductList data={data} />
    </div>
  )
}

export default App