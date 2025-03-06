import { createContext, useState } from "react"

export const ActionsContext = createContext();

const CartContext = ({ children }) => {

  const [myCart, setMyCart] = useState(JSON.parse(localStorage.getItem("myCart")) || []);
  const [error, setError] = useState(null);

  const addToCart = (item) => {
    setMyCart(prev => {
      const existingItem = prev.find(i => i.id === item.id);

      if (existingItem) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      };

      return [...prev, item];
    })
  }

  const removeFromCart = (id) => {
    setMyCart(prev => prev.filter(item => item.id !== id));
  }

  const handleQuantityUpdate = (e, updatingQuantity, setUpdatingQuantity) => {
    e.preventDefault();

    const updatedQuantity = parseInt(e.target.quantityInput.value, 10);

    if (updatedQuantity >= 0) {
      setMyCart(prev => prev.map(item => item.id === updatingQuantity ? { ...item, quantity: updatedQuantity } : item));

      setUpdatingQuantity(null);
      setError(null);
    } else {
      setError("Quantity can't be negative number");
    }
  }

  return (
    <ActionsContext.Provider value={{ myCart, addToCart, removeFromCart, handleQuantityUpdate, error }}>
      { children }  
    </ActionsContext.Provider>
  )
}

export default CartContext