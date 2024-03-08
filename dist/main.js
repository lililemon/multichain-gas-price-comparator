'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Web3 = require('web3');

var MultiChainGasPriceComparator = function () {
  function MultiChainGasPriceComparator(providers) {
    _classCallCheck(this, MultiChainGasPriceComparator);

    this.web3Instances = providers.map(function (provider) {
      return new Web3(provider);
    });
  }

  _createClass(MultiChainGasPriceComparator, [{
    key: 'getGasPrices',
    value: async function getGasPrices() {
      var gasPrices = await Promise.all(this.web3Instances.map(function (web3) {
        return web3.eth.getGasPrice();
      }));

      return gasPrices.map(function (gasPrice) {
        return Web3.utils.fromWei(gasPrice, 'gwei');
      });
    }
  }]);

  return MultiChainGasPriceComparator;
}();

module.exports = MultiChainGasPriceComparator;

