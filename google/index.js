const { google } = require('googleapis');
const privateKey = require('./privateKey.json');
const SearchAPI = require('./search');

const getToken = () => privateKey.API_KEY;

const service = google.youtube({
  version: 'v3',
  auth: getToken() // specify your API key here
});

exports.getToken = getToken;
exports.Search = new SearchAPI(service);
