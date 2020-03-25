import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

export default function Menu(props) {
  return (
    <nav>
      <ul className='navbar'>
        <li className='navbar__item'><div><NavLink to='/'>Blog</NavLink></div></li>
        <li className='navbar__item'><div><NavLink to='/technology'>Tech</NavLink></div></li>
        <li className='navbar__item'><div><NavLink to='/photography'>Photography</NavLink></div></li>
        <li className='navbar__item'><div><NavLink to='/music'>Music</NavLink></div></li>
        <li className='navbar__item'><div><NavLink to='/gaming'>Gaming</NavLink></div></li>
        <li className='navbar__item'><div><NavLink to='/fitness'>Fitness</NavLink></div></li>
      </ul>
    </nav>
  );
}
