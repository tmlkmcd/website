import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './style.scss';

import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';

import Tech from '../BodySections/Tech';
import Photography from '../BodySections/Photography';
import Music from '../BodySections/Music';
import Gaming from '../BodySections/Gaming';
import Fitness from '../BodySections/Fitness';

export default function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Router>
        <Menu />
        <Switch>
          <Route path='/technology'><Tech /></Route>
          <Route path='/photography'><Photography /></Route>
          <Route path='/music'><Music /></Route>
          <Route path='/gaming'><Gaming /></Route>
          <Route path='/fitness'><Fitness /></Route>
          <Route path='/'>
            <div>Hi</div>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
