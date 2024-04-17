var slideIndex = 0;
showSlides();


function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000);
}



  function showPrices() {
    // JavaScript logic to handle the "Prices" action
    console.log("Prices clicked!");
  }

  function fetchFeaturedCoins() {
    // JavaScript logic to fetch and display featured coins
    console.log("Featured Coins clicked!");
  }


 // Function to fetch the top 5 featured coins from CoinGecko API
function fetchFeaturedCoins() {
    // CoinGecko API endpoint to get the top coins by market cap
    const apiURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false';
  
    fetch(apiURL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        updateFeaturedCoins(data);
      })
      .catch(error => {
        console.error('There was an error fetching the featured coins:', error);
        document.getElementById('featured-coins').innerHTML = 'Failed to load data';
      });
  }
  
  // Function to update the Featured Coins section with API data
  function updateFeaturedCoins(coins) {
    const featuredCoinsDiv = document.getElementById('featured-coins-list');
  
    // Clear the existing content
    featuredCoinsDiv.innerHTML = '';
  
    // Create a list of the top 5 coins
    coins.forEach(coin => {
      const listItem = document.createElement('div');
      listItem.className = 'coin';
      listItem.innerHTML = `
        <div class="coin-name">${coin.name}</div>
        <div class="coin-symbol">${coin.symbol.toUpperCase()}</div>
        <div class="coin-price">$${coin.current_price.toLocaleString()}</div>
      `;
      featuredCoinsDiv.appendChild(listItem);
    });
  }
  
