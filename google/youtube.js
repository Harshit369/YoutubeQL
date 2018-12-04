const { google } = require('googleapis');

const { getToken } = require('./index');
class YoutubeClient {
  constructor() {
    this.service = google.youtube('v3');
  }

  list(params) {
    const auth = getToken();
    service.search.list({ ...params, auth });
  }
}

module.exports = new YoutubeClient();
