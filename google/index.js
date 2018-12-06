const privateKey = require('./privateKey.json');

const getToken = () => privateKey.API_KEY;

exports.getToken = getToken;
exports.Youtube = require('./youtube');
