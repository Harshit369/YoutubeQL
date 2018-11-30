const { google } = require('googleapis');
const privateKey = require('./privateKey.json');

const SCOPES = ['https://www.googleapis.com/auth/youtube.readonly'];

let jwtClient = new google.auth.JWT(
  privateKey.client_email,
  null,
  privateKey.private_key,
  SCOPES
);

const authorize = () =>
  jwtClient.authorize((err, tokens) => {
    console.log(tokens);
    debugger;
  });

exports.authorize = authorize;
