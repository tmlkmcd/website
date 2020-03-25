const blogId = '147034453';

const endpoints = {
  blogPosts: `https://public-api.wordpress.com/rest/v1.1/sites/${blogId}/posts`
};

export default class Fetcher {
  static get(url) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) return Promise.reject(response);
        return response.json();
      });
  }

  static getPosts(type) { // eslint-disable-line no-unused-vars
    return Fetcher.get(endpoints.blogPosts);
  }
}
