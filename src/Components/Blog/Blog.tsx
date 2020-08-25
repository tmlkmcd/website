import React, { useContext, FunctionComponent } from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { BlogContext } from '../../Contexts/BlogPostStore';
import LoadingSpinner from '../LoadingSpinner';
import BlogExcerpt from '../BlogExcerpt';

import './style.scss';

const Blog: FunctionComponent = () => {
  const {
    loading,
    posts,
    category
  } = useContext(BlogContext);

  const { category: categoryParam } = useParams();

  if (!category && categoryParam) return <Redirect to='/' />;
  if (loading) return <LoadingSpinner />;

  let header = 'Recent Posts';
  
  switch (category) {
    case 'technology': header += ' in Tech'; break;
    case 'music': header += ' in Music'; break;
    case 'fitness': header += ' in Fitness'; break;
    case 'gaming': header += ' in Gaming'; break;
  }

  return (
    <section>
      <h3>Recent Posts</h3>
      {posts.map((p, i) => <BlogExcerpt post={p} key={p.slug} />)}
    </section>
  );
}

export default Blog;
