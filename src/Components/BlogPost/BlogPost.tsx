import React, { FunctionComponent } from 'react';

import './style.scss';

interface BlogPostProps {
  post: Post
}

const BlogPost: FunctionComponent<BlogPostProps> = ({ post }) => {
  const {
    slug, date, modified, excerpt, content
  } = post;

  return (
    <article>
      {slug}
    </article>
  );
}

export default BlogPost;
