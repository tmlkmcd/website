import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './style.scss';

import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';

import BlogProvider from '../../Contexts/BlogPostStore';

import Blog from '../Blog';
import BlogPost from '../BlogPost';
import Photography from '../Photography';

const App = () => {
  return (
    <div className='pageWrapper'>
      <div className='wrapper'>
        <Header />
        <div className='separator' />
        <Router>
          <Menu />
          <div className='separator' />
          <BlogProvider>
            <Switch>
              <Route path='/' exact component={Blog} />
              <Route path='/blog/' exact component={Blog} />
              <Route path='/blog/:slug' component={BlogPost} />
              <Route path='/technology/' component={Blog} />
              <Route path='/about/' component={Blog} />
              <Route path='/photography/' component={Photography} />
              <Route path='/music/' component={Blog} />
              <Route path='/blog/:category?' component={Blog} />
              <Route path='/contact/' component={Blog} />
            </Switch>
          </BlogProvider>
        </Router>
        <div className='separator' />
        <Footer />
      </div>
    </div>
  );
}

export default App;
