import { useState } from "react";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(null);

  const handleProductAdd = (e) => {
    const name = e.target.product.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    setProducts((prev) => [
      ...prev,
      { name, description, price, count: 1, id: Date.now() },
    ]);
  };

  const handleProductRemoval = (i) => {
    products.filter((_, index) => index !== i);
  };

  const handleEdit = (index) => {
    setIsEditing(index);
  };

  const handleSave = (e, index) => {
    const product = e.target.product;
    const description = e.target.description;
    const price = e.target.price;
    const count = e.target.count;

    setProducts((prev) =>
      prev.map((item, i) =>
        i === index ? { product, description, price, count, ...item  } : item
      )
    );
    setIsEditing(null);
  };

  return (
    <main>
      <section>
        <h2>Admin Panel</h2>
        <p>Welcome to the admin panel</p>
        <p>Username: {user?.username}</p>
        <p>Email: {user?.email}</p>
      </section>

      <section>
        <h2>Manage Products</h2>

        {products.map((product, index) => {
          {
            isEditing === index ? (
              <form>
                <input type="text" name="product" required />
                <input type="text" name="description" required />
                <input type="number" name="price" required />
                <input type="number" name="count" required />
                <button onClick={(e) => handleSave(e, index)}>Save</button>
                <button onClick={() => setIsEditing(null)}>Cancel</button>
              </form>
            ) : (
              <div key={index}>
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <button onClick={() => handleProductRemoval(index)}>
                  Remove Product
                </button>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </div>
            );
          }
        })}
      </section>

      <form onSubmit={handleProductAdd}>
        <input type="text" name="product" required />
        <input type="text" name="description" required />
        <input type="number" name="price" required />
        <button type="submit">Add Product</button>
      </form>
    </main>
  );
};

export default AdminPanel;
