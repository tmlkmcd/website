import { useState, useEffect } from 'react';
import moment from 'moment';

import Fetcher from '../Helpers/Fetcher';

const useBlog = (subset) => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    Fetcher.getPosts(subset)
      .then(({ posts }) => setBlogPosts(
        posts.map(sanitizeWordpressResponse)
      ))
      .catch((error) => setBlogPosts({ error }));

    return () => setBlogPosts([]);
  }, [subset]);

  return blogPosts;
};

export function sanitizeWordpressResponse(post) {
  const { slug, date, modified, excerpt, content } = post;

  return {
    slug,
    date: moment(date),
    modified: moment(modified),
    excerpt,
    content
  };
}

export default useBlog;
