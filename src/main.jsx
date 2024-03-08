const Web3 = require('web3');

class MultiChainGasPriceComparator {
  constructor(providers) {
    this.web3Instances = providers.map(provider => new Web3(provider));
  }

  async getGasPrices() {
    const gasPrices = await Promise.all(
      this.web3Instances.map(web3 => web3.eth.getGasPrice())
    );

    return gasPrices.map(gasPrice => Web3.utils.fromWei(gasPrice, 'gwei'));
  }
}

module.exports = MultiChainGasPriceComparator;