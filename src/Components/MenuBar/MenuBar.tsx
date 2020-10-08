import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const MenuBar: FunctionComponent = () => {
  return (
    <nav>
      <ul className='navbar'>
        <li className='navbar__item'>
          <NavLink className='navbar__mainLink' activeClassName='navbar__mainLink--active' to='/blog'>
            <div>blog</div>
          </NavLink>
          <ul className='navbar__nestedList'>
            <li className='navbar__nestedItem'><NavLink to='/blog/category/technology'><div>tech</div></NavLink></li>
            <li className='navbar__nestedItem'><NavLink to='/blog/category/music'><div>music</div></NavLink></li>
            <li className='navbar__nestedItem'><NavLink to='/blog/category/gaming'><div>gaming</div></NavLink></li>
            <li className='navbar__nestedItem'><NavLink to='/blog/category/fitness'><div>fitness</div></NavLink></li>
          </ul>
        </li>
        <li className='navbar__item'>
          <NavLink to='/about' className='navbar__mainLink' activeClassName='navbar__mainLink--active'>
            <div>about</div>
          </NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink to='/music' className='navbar__mainLink' activeClassName='navbar__mainLink--active'>
            <div>music</div>
          </NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink to='/gaming' className='navbar__mainLink' activeClassName='navbar__mainLink--active'>
            <div>gaming</div>
          </NavLink>
        </li>
        <li className='navbar__item'>
          <NavLink to='/contact' className='navbar__mainLink' activeClassName='navbar__mainLink--active'>
            <div>contact</div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MenuBar;