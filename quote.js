const api = require("./api.json");
const https = require("https");
const http = require("http");

// Print the stock price
function printQuote(stock, price) {
  console.log(`The price for ${stock} is ${price}`);
}

/**
 * Gets the current price for a stock
 * @param {String} query Ticker symbol for the the stock.
 */
function get(query) {
  try {
    const request = https
      .get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${query}&apikey=${api.key}`,
        (res) => {
          if (res.statusCode === 200) {
            let body = "";
            res.on("data", (chunk) => {
              body += chunk.toString();
            });

            res.on("end", () => {
              try {
                const data = JSON.parse(body);
                const result = data["Global Quote"]["05. price"];
                printQuote(query, result);
              } catch (e) {
                console.error(
                  `There was a problem getting the price for ${query}`
                );
              }
            });
          } else {
            const message = `There was an error: ${
              http.STATUS_CODES[res.statusCode]
            } (${res.statusCode})`;
            const statusCodeError = new Error(message);
            console.error(statusCodeError.message);
          }
        }
      )
      .on("error", (e) => {
        console.error(e.message);
      });
  } catch (e) {
    console.error(e.message);
  }
}

module.exports.get = get;
