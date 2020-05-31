import React, { useState, FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';

import useBlog from '../Hooks/useBlog';

interface BlogStore extends BlogPayload {
  category: PostCategory
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
  const { pathname } = useLocation();
  
  const categoryParam = pathname.split('/')[1];

  const category = isValidCategory(categoryParam) ? categoryParam : null;
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

function isValidCategory(param: string): param is PostCategory {
  return [null, 'tech', 'photography', 'music', 'gaming', 'fitness'].includes(param);
}

export default BlogProvider;
