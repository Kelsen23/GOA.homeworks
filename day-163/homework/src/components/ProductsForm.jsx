import React, { useEffect, useState } from "react";
import useForm from "../hooks/useForm";

const ProductsForm = ({ setIsLoggedIn }) => {

  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  const [productQuantity, setProductQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isEditing, setIsEditing] = useState(null);

  const { formData, setFormData, handleChange } = useForm({
    product: "",
    price: "",
    quantity: "",
  });

  const handleSubmit = (e) => {
    
    e.preventDefault();

    if (isEditing !== null) {
      const updatedProducts = products.map((item, index) => {
        index === isEditing
          ? {
              product: formData.product,
              price: parseFloat(formData.price) || 0,
              quantity: parseInt(formData.quantity) || 0,
            }
          : item;
      });
      setProducts(updatedProducts);
      setIsEditing(null);
    } else {
      setProducts((prev) => [
        ...prev,
        {
          product: formData.product,
          price: parseFloat(formData.price) || 0,
          quantity: parseInt(formData.quantity) || 0,
        },
      ]);
      setFormData({ product: "", price: "", quantity: "" });
    }
  };

  const handleItemRemoval = (index) => {
    setProducts((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    setProductQuantity(products.reduce((sum, item) => sum + item.quantity, 0));
    setTotalPrice(
      products.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );
  }, [products]);

  return (
    <div>
      <button onClick={() => setIsLoggedIn(false)}>Log Out</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="product"
          placeholder="Enter Product"
          value={formData.product}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Enter Price"
          value={formData.price}
          onChange={handleChange}
          min={0.1}
          step="0.01"
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Enter Quantity"
          value={formData.quantity}
          onChange={handleChange}
          min={1}
          step="1"
          required
        />
        <button type="submit">Add To Cart</button>
      </form>

      <div>
        <h1>My Cart</h1>
        <p>Cart Items: {products.length}</p>
        <p>Quantity: {productQuantity}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>

        {products.map((product, index) => (
          <div key={index}>
            {isEditing === index ? (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  min={0.1}
                  step="0.01"
                  required
                />
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  min={1}
                  step="1"
                  required
                />
                <button type="submit">Update</button>
                <button type="button" onClick={() => setIsEditing(null)}>
                  Cancel
                </button>
              </form>
            ) : (
              <div>
                <h2>{product.product}</h2>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <button onClick={() => handleItemRemoval(index)}>
                  Remove From Cart
                </button>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsForm;
