// index.js

// Importing necessary dependencies
const axios = require('axios');

// Function to fetch cryptocurrency prices
async function getCryptoPrices(cryptoSymbols) {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoSymbols.join(',')}&vs_currencies=usd`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching cryptocurrency prices: ${error.message}`);
  }
}

// Function to watch cryptocurrency prices
function watchCryptoPrices(cryptoSymbols, interval = 60000) {
  const intervalId = setInterval(async () => {
    try {
      const prices = await getCryptoPrices(cryptoSymbols);
      console.log('Current Cryptocurrency Prices:');
      cryptoSymbols.forEach(symbol => {
        console.log(`${symbol.toUpperCase()}: $${prices[symbol].usd}`);
      });
      console.log('--------------------------------');
    } catch (error) {
      console.error(error.message);
    }
  }, interval);

  // Function to stop watching prices
  function stop() {
    clearInterval(intervalId);
  }

  return {
    stop
  };
}

// Exporting functions
module.exports = {
  getCryptoPrices,
  watchCryptoPrices
};
