const quote = require('./quote');
const query = process.argv[2]

quote.get(query);
