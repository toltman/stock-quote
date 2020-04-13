const api = require("./api.json");
const https = require("https");

function printQuote(stock, price) {
  console.log(`The price for ${stock} is ${price}`);
}

function get(query) {
  const request = https.get(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${query}&apikey=${api.key}`,
    (res) => {
      let body = "";
      res.on("data", (chunk) => {
        body += chunk.toString();
      });

      res.on("end", () => {
        const data = JSON.parse(body);
        const result = data["Global Quote"]["05. price"];
        printQuote(query, result);
      });
    }
  );
}

module.exports.get = get;
