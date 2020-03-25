import { useState, useEffect } from 'react';

import Fetcher from '../Helpers/Fetcher';

const useBlog = (subset) => { // eslint-disable-line no-unused-vars
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    Fetcher.getPosts()
      .then((posts) => setBlogPosts(posts))
      .catch((error) => setBlogPosts({ error }));

    return () => setBlogPosts([]);
  }, [subset]);

  return blogPosts;
};

export default useBlog;
