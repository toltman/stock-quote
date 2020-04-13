# stock-quote
A simple command line node.js app to retrieve a stock quote

## Setup
1. Clone or fork the repository
2. Get an API key from [Alpha Vantage](https://www.alphavantage.co/)
3. Create a file called `api.json` in the project's root directory and insert the following text:
```javascript
{
  "key": "<your key here>"
}
```
4. Retrieve a stock quote with the command `node app.js SYMBOL` where `SYMBOL` is the ticker symbol for whichever stock you want the quote for. 
