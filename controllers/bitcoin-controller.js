let btcRateService = require('../service/bitcoin-rate-service');

module.exports =  function (req,res) {
    btcRateService.fetchRate(req,res)


}