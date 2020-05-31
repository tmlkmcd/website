import { useState, useEffect } from 'react';
import moment from 'moment';

import Fetcher from '../Helpers/Fetcher';

const useBlog = (category?: PostCategory) => {
  const [blogPosts, setBlogPosts] = useState<BlogPayload>({ posts: [] });

  useEffect(() => {
    setBlogPosts({ loading: true });

    Fetcher.getPosts(category)
      .then(({ posts }) => setBlogPosts({
        posts: posts.map(sanitizeWordpressResponse)
      }))
      .catch((error) => setBlogPosts({ error }));

    return () => setBlogPosts({ posts: [] });
  }, [category]);

  return blogPosts;
};

export function sanitizeWordpressResponse(post: WordpressPost): Post {
  const { slug, date, modified, excerpt, content } = post;

  return {
    slug,
    date: new Date(date),
    modified: new Date(modified),
    excerpt,
    content
  };
}

export default useBlog;
