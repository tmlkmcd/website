const blogId = '147034453';

const endpoints = {
  blog: (category?: string) => {
    let endpoint = `https://public-api.wordpress.com/rest/v1.1/sites/${blogId}/posts/`;
    if (category) endpoint += `?category=${category}`;

    return endpoint;
  },
  post: (slug: string) => `https://public-api.wordpress.com/rest/v1.1/sites/147034453/posts/slug:${slug}`
};

export default abstract class Fetcher {
  static get(url: string) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) return Promise.reject(response);
        return response.json();
      });
  }

  static getPosts(type: string) { // eslint-disable-line no-unused-vars
    return Fetcher.get(endpoints.blog(type));
  }

  static getPost(slug: string) {
    return Fetcher.get(endpoints.post(slug));
  }
}
