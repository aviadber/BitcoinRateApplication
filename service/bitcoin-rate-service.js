var rates = require("bitcoin-exchange-rates");
var currenciesConfig = require("../constants/currencies-config");


let fetchRate = function (req, res) {
    let btcConfig = req.body
    let btcAmount = btcConfig.amount;
    let currency = btcConfig.currency;
    let fetchedRate;
    rates.fromBTC(btcAmount, currency, function (err, rate) {
        console.log(btcAmount + " BTC = " + rate + " " + currency);
        res.send(rate)
    })

}
module.exports = {
    fetchRate: fetchRate
}