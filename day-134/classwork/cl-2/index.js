const div = document.querySelector('.container');
let content = ``;


const fetchData = async () => {
 try {
  div.innerHTML = 'Loading...';
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  renderContent(data);
 } catch(error) {
  div.innerHTML = `Failed to load data.`;
  console.error(error);
 }
}

const renderContent = (data) => {
  data.forEach(product => {
    content += `
      <h2>${product.title}</h2>
      <p>Description: ${product.description}</p>
      <p>Price: $${product.price}</p>
      <p>Rating: ${product.rating.rate} Count: ${product.rating.count}</p>
      <p>Category: ${product.category}</p>
      <img src=${product.image} />
    `
  })
  div.innerHTML = content;
}

fetchData();
