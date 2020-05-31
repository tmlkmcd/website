import React, { FunctionComponent } from 'react';
import moment from 'moment';

import './style.scss';

interface BlogPostProps {
  post: Post
}

const BlogPost: FunctionComponent<BlogPostProps> = ({ post }) => {
  const { date, excerpt, title } = post;

  return (
    <article className='blogPost'>
      <div
        className='blogPost__header'
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className='blogPost__date'>{moment(date).format('YYYY-DD-MM')}</div>
      <div
        className='blogPost__excerpt'
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
    </article>
  );
}

export default BlogPost;
