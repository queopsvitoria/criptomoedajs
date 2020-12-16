// const rp = require('request-promise');
import rp from 'request-promise';
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=21d5b240-e550-40a0-8763-f93050b7d59f&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=USD',

  json: true,
  gzip: true
};

rp(requestOptions).then(response => {
  console.log('API Respondida :', response);
}).catch((err) => {
  console.log('API com erro:', err.message);
});
