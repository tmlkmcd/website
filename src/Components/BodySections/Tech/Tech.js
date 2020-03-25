import React from 'react';

import useBlog from '../../../Hooks/useBlog';

import './style.scss';

export default function Tech() {
  const blogPosts = useBlog();

  console.log(blogPosts);

  return (
    <section>
      Tech
    </section>
  );
}
