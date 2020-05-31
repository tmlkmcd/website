import React, { useContext } from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { BlogContext } from '../../Contexts/BlogPostStore';
import LoadingSpinner from '../LoadingSpinner';
import BlogPost from '../BlogPost';

import './style.scss';

export default function Blog() {
  const {
    loading,
    posts,
    category
  } = useContext(BlogContext);

  const { category: categoryParam } = useParams();

  if (!category && categoryParam) return <Redirect to='/' />;
  if (loading) return <LoadingSpinner />;

  return (
    <section>
      {posts.map((p) => <BlogPost post={p} key={p.slug} />)}
    </section>
  );
}
