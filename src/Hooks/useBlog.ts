import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Fetcher from '../Helpers/Fetcher';

const useBlog = (category?: string) => {
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
  const {
    id,
    slug,
    date,
    modified,
    excerpt,
    content,
    title,
    categories
  } = post;

  const categoryNames = Object.keys(categories);

  return {
    id,
    slug,
    date: new Date(date),
    modified: new Date(modified),
    excerpt,
    content,
    title,
    categories: categoryNames
  };
}

export default useBlog;
