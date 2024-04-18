document.addEventListener('DOMContentLoaded', function () {
    const baseUrl = 'https://api.coingecko.com/api/v3';
    const apiEndpoint = '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1';

    axios.get(baseUrl + apiEndpoint)
        .then(response => {
            const cryptos = response.data;
            const container = document.getElementById('cryptoList');
            container.innerHTML = '';

            cryptos.forEach(crypto => {
                container.innerHTML += `
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <div class="card-body">
                                <h5 class="card-title">${crypto.name} (${crypto.symbol.toUpperCase()})</h5>
                                <p class="card-text">Price: $${crypto.current_price.toLocaleString()}</p>
                                <p class="card-text">Market Cap: $${crypto.market_cap.toLocaleString()}</p>
                                <p class="card-text">24h Change: ${crypto.price_change_percentage_24h.toFixed(2)}%</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

