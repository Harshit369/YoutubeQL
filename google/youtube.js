const { google } = require('googleapis');

const { getToken } = require('./index');
class YoutubeClient {
  constructor() {
    this.service = google.youtube({
      version: 'v3',
      auth: getToken() // specify your API key here
    });
  }

  list(params) {
    return this.service.search.list(params);
  }
}

module.exports = new YoutubeClient();
