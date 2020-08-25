import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './style.scss';

interface BlogExcerptProps {
  post: Post
}

const BlogExcerpt: FunctionComponent<BlogExcerptProps> = ({ post }) => {
  const { slug, date, excerpt, title } = post;

  const dateFormatted = moment(date).format('dddd, MMMM D').toLowerCase();
  const link = `/blog/${slug}`;

  return (
    <article className='blogExcerpt'>
      <div className='blogExcerpt__date'>{dateFormatted}</div>
      <div className='blogExcerpt__header'>
        <Link
          to={link}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      <div className='blogExcerpt__body'>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        <Link to={link}>Read more...</Link>
      </div>
    </article>
  );
}

export default BlogExcerpt;
