const { google } = require('googleapis');
const privateKey = require('privateKey.json');
const OAuth2 = google.auth.OAuth2;
const SCOPES = ['https://www.googleapis.com/auth/youtube.readonly'];

const authorize = credentials => {
  const {
    client_secret: clientSecret,
    client_id: clientId
  } = credentials.installed;
  const redirectUrl = credentials.installed.redirect_uris[0];
  const oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);

  // Check if we have previously stored a token.
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });

  // how to fetch token from google with authURL

  oauth2Client.credentials = token;
  return oauth2Client;
};

const getAuthClient = () => {
  return authorize(credentials);
};

exports.getAuthClient = getAuthClient;
