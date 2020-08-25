import React, { FunctionComponent } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import moment from 'moment';

import LoadingSpinner from '../LoadingSpinner';
import usePost from '../../Hooks/usePost';

import './style.scss';

const dateFormat = 'ddd, MMM D';

const BlogPost: FunctionComponent = () => {
  const { slug } = useParams();
  const { loading, post } = usePost(slug);
  const history = useHistory();

  if (loading) return <LoadingSpinner />;
  if (!post) return null;

  const {
    date,
    modified,
    content,
    title,
    categories
  } = post;

  const mDate = moment(date);
  const dateFormatted = mDate.format(dateFormat).toLowerCase();

  const mModified = moment(modified);
  const modifiedFormatted = mModified.format(dateFormat).toLowerCase();

  let dateText = `${dateFormatted}.`;
  if (!mDate.isSame(mModified, 'minute')) {
    dateText += ` edited: ${modifiedFormatted}.`;
  }

  const categoriesFormatted = categories
    .map((c) => c.toLowerCase())
    .join(', ');

  return (
    <div className='blogPost' >
      <a onClick={() => history.goBack()}><i className='fas fa-arrow-alt-circle-left' /> Back</a>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      <div className='blogPost__date'>
        <i className='far fa-calendar-alt' /> <em>{dateText}</em>
      </div>
      <div className='blogPost__tags'>
        <i className='fas fa-tags' /> {categoriesFormatted}
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export default BlogPost;
