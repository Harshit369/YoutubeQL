import { google, youtube_v3 } from 'googleapis';

import * as privateKey from '../../privateKey.json';
import SearchAPI from './search';

export const getToken = () => privateKey.API_KEY;

const service: youtube_v3.Youtube = google.youtube({
  version: 'v3',
  auth: getToken() // specify your API key here
});

export const Search = new SearchAPI(service);
