## A utility for comparing gas prices across multiple Ethereum networks
``` js
const MultiChainGasPriceComparator = require('multichain-gas-price-comparator');

const comparator = new MultiChainGasPriceComparator([
  'https://mainnet.infura.io/v3/YOUR-PROJECT-ID',  // main
  'https://ropsten.infura.io/v3/YOUR-PROJECT-ID',  // Ropsten 
  'https://rinkeby.infura.io/v3/YOUR-PROJECT-ID',  // Rinkeby 
]);

comparator.getGasPrices().then(gasPrices => {
  console.log(gasPrices); 
});
```