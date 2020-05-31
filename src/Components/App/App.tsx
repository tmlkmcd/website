import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './style.scss';

import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';

import BlogProvider from '../../Contexts/BlogPostStore';

import Blog from '../Blog';

const App = () => {
  return (
    <div className='pageWrapper'>
      <div className='wrapper'>
        <Header />
        <Router>
          <Menu />
          <BlogProvider>
            <Switch>
              <Route path='/:category?' component={Blog} />
            </Switch>
          </BlogProvider>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
