import { useContext } from "react";
import { ActionsContext } from "../context/CartContext";
import cart from "../data/data.js";

const Shop = () => {
  const { addToCart } = useContext(ActionsContext);

  return (
    <div>
      <h1>Shop</h1>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <button onClick={() => addToCart(item)}>Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;