import { useContext, useState } from "react";
import { ActionsContext } from "../context/CartContext";

const MyCart = () => {
  
  const { myCart, removeFromCart, handleQuantityUpdate, error } = useContext(ActionsContext);
  const [updatingQuantity, setUpdatingQuantity] = useState(null);

  const totalPrice = myCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>My Cart</h1>
      <div>
        {myCart.length > 0 ? (
          myCart.map((item) => {
            if (updatingQuantity !== item.id) {
              return (
                <div key={item.id}>
                  <h2>{item.name}</h2>
                  <p>${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  <button onClick={() => setUpdatingQuantity(item.id)}>Update Quantity</button>
                </div>
              );
            } else {
              return (
                <form key={item.id} onSubmit={(e) => handleQuantityUpdate(e, updatingQuantity, setUpdatingQuantity)}>
                  <input
                    type="number"
                    name="quantityInput"
                    placeholder="Enter Quantity Number"
                    defaultValue={item.quantity}
                    required
                  />
                  <button>Update Quantity</button>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                </form>
              );
            }
          })
        ) : (
          <p>No items in your cart</p>
        )}
        <div>
          {totalPrice > 0 && (
            <div>
              <p>
                <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCart;