import qs from "query-string";
const DOMAIN = "http://localhost:3001/";

class AppCall {
  constructor(domain) {
    this.domain = domain;
  }

  async perform(url, data, config) {
    const request = await fetch(`${this.domain}/${url}`, {
      ...config,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return request.json();
  }

  async get(path, searchParams = {}) {
    return await this.perform(`${path}?${qs.stringify(searchParams)}`);
  }
  async post() {}
  async put() {}
  async delete() {}
}
