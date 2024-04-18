
fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false')
.then(response => response.json())
.then(data => {
  const featuredCoinsDiv = document.getElementById('featured-coins');
  const list = document.createElement('ul');
  list.classList.add('list-unstyled');

  data.forEach(coin => {
    const listItem = document.createElement('li');
    listItem.textContent = `${coin.name} (${coin.symbol.toUpperCase()}): $${coin.current_price.toLocaleString()}`;
    list.appendChild(listItem);
  });

  featuredCoinsDiv.appendChild(list);
})
.catch(error => console.error('Error fetching the cryptocurrency data:', error));
  
