# Crypto Currency Price Watcher

Crypto Currency Price Watcher is a Node.js library that allows you to fetch and monitor cryptocurrency prices from an external API.

## Installation

npm install crypto-currency-price-watcher

## Usage

const { getCryptoPrices, watchCryptoPrices } = require('crypto-currency-price-watcher');

(async () => {
try {
const symbols = ['bitcoin', 'ethereum', 'litecoin']; // Example cryptocurrencies to watch
const prices = await getCryptoPrices(symbols);
console.log('Current Cryptocurrency Prices:', prices);

        const watcher = watchCryptoPrices(symbols); // Start watching prices
        // To stop watching prices after a specific time, use setTimeout
        // setTimeout(() => watcher.stop(), 60000); // Stop watching after 60 seconds
    } catch (error) {
        console.error('Error:', error.message);
    }
})();

## API

### getCryptoPrices(cryptoSymbols)

Fetches the current prices of the specified cryptocurrencies against USD.

- cryptoSymbols: An array of cryptocurrency symbols.

Returns an object containing the current prices of the specified cryptocurrencies.

### watchCryptoPrices(cryptoSymbols, interval)

Continuously fetches and logs the current prices of the specified cryptocurrencies at regular intervals.

- cryptoSymbols: An array of cryptocurrency symbols.
- interval (optional): The interval (in milliseconds) at which to fetch and log prices. Default is 60000 ms (1 minute).

Returns an object with a stop function to stop watching prices.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
