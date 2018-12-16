import { youtube_v3 } from "googleapis";

class SearchAPI {
  service: youtube_v3.Youtube;
  constructor(service: youtube_v3.Youtube) {
    this.service = service;
  }

  list(params: any) {
    return this.service.search.list(params);
  }
}

export default SearchAPI;
