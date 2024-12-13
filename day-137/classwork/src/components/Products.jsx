import { useState, useEffect } from "react"

const Products = () => {

  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : [];
  });  
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(prevData => [...prevData, {name: name, price: price, date: date}]);
    setName('');
    setPrice('');
    setDate('');
  }

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} placeholder='Enter Product Name' onChange={(e) => setName(e.target.value)} required />
        <input value={price} type="number" placeholder='Enter Price (In USD)'  onChange={(e) => setPrice(e.target.value)} required />
        <input value={date} type="date" placeholder='Enter Date of Production' onChange={(e) => setDate(e.target.value)} required />
        <button type='submit'>Submit</button>
      </form>

      <div className="product-list-container">
        {data.map((value, index) => {
          return (<div key={index}>
            <h2>{value.name}</h2>
            <p>Price: ${value.price}</p>
            <p>Production Date: {value.date}</p>
          </div>)
        })}
      </div>
    </div>
  )
}

export default Products