
const main = document.querySelector('main');
const btn = document.querySelector('.btn');

  btn.addEventListener('click', () => {
    let crypto = document.querySelector('input').value.toLowerCase();
    fetchCryptoData(crypto);
  })

  async function fetchCryptoData(crypto) {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}`);
      const data = await response.json();
      renderCryptoData(data);
    } catch (error) {
      console.error("Error fetching crypto data:", error);
    }
  }

    function renderCryptoData(data) {
      main.innerHTML = 
      `
        <p>Id: ${data[0].id}</p>
        <p>Name: ${data[0].name}</p>
        <p>Symbol: ${data[0].symbol}</p>
        <p>Current Price: ${data[0].current_price}$</p>
        <p>Market Cap: ${data[0].market_cap}</p>
        <p>Market Cap Rank: ${data[0].market_cap_rank}</p>
        <p>Market Cap Change: ${data[0].market_cap_change_percentage_24h}%</p>
        <p>Price Change: ${data[0].price_change_percentage_24h}%</p>
        <img src="${data[0].image}" style="width: 40px;" />
      `
      console.log(data);
    }
  

