const { here } = require('await-here');
const { google } = require('googleapis');
const privateKey = require('./privateKey.json');

const SCOPES = ['https://www.googleapis.com/auth/youtube.readonly'];

let jwtClient = new google.auth.JWT(
  privateKey.client_email,
  null,
  privateKey.private_key,
  SCOPES
);

const getToken = () => JSON.parse(process.env.GOOGLE_AUTH_TOKEN);

const authorize = async () => {
  const [err, token] = await here(jwtClient.authorize());
  if (err) return;
  process.env.GOOGLE_AUTH_TOKEN = JSON.stringify(token);
  console.log(process.env.GOOGLE_AUTH_TOKEN);
};

exports.authorize = authorize;
exports.getToken = getToken;
exports.Youtube = require('./youtube');
