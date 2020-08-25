import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

export default function Menu() {
  return (
    <nav>
      <ul className='navbar'>
        <li className='navbar__item'><NavLink to='/'><div>Blog</div></NavLink></li>
        <li className='navbar__item'><NavLink to='/about'><div>About</div></NavLink></li>
        <li className='navbar__item'><NavLink to='/music'><div>Music</div></NavLink></li>
        <li className='navbar__item'><NavLink to='/gaming'><div>Gaming</div></NavLink></li>
        <li className='navbar__item'><NavLink to='/contact'><div>Contact</div></NavLink></li>
      </ul>
    </nav>
  );
}
