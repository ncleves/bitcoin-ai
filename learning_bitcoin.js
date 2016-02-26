//Author: ncleves - 2/23/16
//Playing with Blockchain.info api and Node.js

var blockchain = require('blockchain.info');
var exchange = require('blockchain.info/exchange');
var statistics = require('blockchain.info/statistics');

/*
exchange.getTicker().then( function(response) {
	console.log(response.USD);
    }).catch(function(err){
        console.log("Error: " + err);
    });

//TODO: Make API call

statistics.getChartData().then( function(response){
	console.log(response.market-price);
	}).catch(function(err){
		console.log("Error: " + err);
	});
*/


var marketData = require('./market_data.json');

var btcWallet = 20;
var usdWallet = 20;


function Reward(currMarketVal, prevMarketVal){
	return ((currMarketVal * btcWallet) - (prevMarketVal * btcWallet));
}

//TODO: Implement buying and selling

// function Buy(reward, currMarketVal) {
// 	if(reward < 0){
// 		btcWallet += usdWallet/currMarketVal;
// 		usdWallet -= currMarketVal*(usdWallet/currMarketVal);
// 	}
// }

// function Sell(reward, currMarketVal) {
// 	if(reward > 0){

// 	}	
// }

for (i = 0; i < marketData.values.length; ++i) {
	var reward = 0;
	console.log("curr: " + marketData.values[i].y);
	var currMarketVal = marketData.values[i].y;
	if(i > 0){
		var prevMarketVal = marketData.values[i-1].y;
		console.log("prev: " + marketData.values[i-1].y);
	}

	reward = Reward(currMarketVal, prevMarketVal);

	console.log("Diff: " + Reward(currMarketVal, prevMarketVal));

	//if(reward)

}



//console.log(marketData.values[0].y);

//var btcWallet = 20;

