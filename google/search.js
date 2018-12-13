class SearchAPI {
  constructor(service) {
    this.service = service;
  }

  list(params) {
    return this.service.search.list(params);
  }
}

module.exports = SearchAPI;
