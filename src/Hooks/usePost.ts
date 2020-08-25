import { useState, useEffect } from 'react';

import { sanitizeWordpressResponse } from './useBlog';
import Fetcher from '../Helpers/Fetcher';

const usePost = (slug: string) => {
  const [post, setPost] = useState<PostPayload>({});

  useEffect(() => {
    setPost({ loading: true });

    Fetcher.getPost(slug)
      .then((post) => setPost({
        post: sanitizeWordpressResponse(post)
      }))
      .catch((error) => setPost({ error }));
  }, [slug]);

  return post;
}

export default usePost;
