import React, { useState, FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';

import useBlog from '../Hooks/useBlog';
import Query from '../Helpers/Query';

interface BlogStore extends BlogPayload {
  category: string
}

interface BlogProviderProps {
  page?: Number
}

export const BlogContext = React.createContext<BlogStore>({
  posts: [],
  category: null
});

const BlogProvider: FunctionComponent<BlogProviderProps> = (props) => {
  const { children } = props;
  
  const category = Query.parseQuery().category;
  const blogPosts = useBlog(category);

  const store: BlogStore = {
    ...blogPosts,
    category
  }

  return (
    <BlogContext.Provider value={store}>
      {children}
    </BlogContext.Provider>
  );
}

export default BlogProvider;
