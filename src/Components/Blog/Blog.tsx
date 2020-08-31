import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom'; 

import useBlog from '../../Hooks/useBlog';
import LoadingSpinner from '../LoadingSpinner';
import BlogExcerpt from '../BlogExcerpt';

import './style.scss';

const Blog: FunctionComponent = () => {
  const { category } = useParams();
  const {
    loading,
    posts
  } = useBlog(category);

  if (loading) return <LoadingSpinner />;

  let header;
  
  switch (category) {
    case 'technology': header = 'Recent Posts in Tech'; break;
    case 'music': header = 'Recent Posts in Music'; break;
    case 'fitness': header = 'Recent Posts in Fitness'; break;
    case 'gaming': header = 'Recent Posts in Gaming'; break;
    case '':
    case undefined: header = 'Recent Posts'; break;
    default: header = `Posts with category: ${category}`;
  }

  if (posts.length === 0) {
    header = `No posts with category '${category}'.`;
    return (
      <section className='blogSection'>
        <h3>{header}</h3>
      </section>
    );
  }

  return (
    <section className='blogSection'>
      <h3>{header}</h3>
      {posts.map((p, i) => <BlogExcerpt post={p} key={p.slug} />)}
    </section>
  );
}

export default Blog;
