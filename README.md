# bitcoin-ai
Playing with Blockchain.info API and Node.js. Attempting to create an AI that learns to play the bitcoin market by learning historical data.

### v0.1 (Really new to this, much to do!)

Currently reads in local JSON data downloaded from Blockchain.info's charts. Parses through every "moment" of updated bitcoin data and calculates a reward based on the change from the previous moment to the current one. This reward will be the teaching mechanism for the AI player. 

TODO: (short term)
Create function for selling/buying
Make Statistic API call rather than parsing local data
