import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

import menuStructure from './menuStructure';
import './style.scss';

const Bar: FunctionComponent = () => {
  return (
    <nav>
      <ul className='navbar'>
        {menuStructure.map(({ text, route, subItems }) => (
          <li className='navbar__item' key={route}>
            <NavLink
              className='navbar__mainLink'
              activeClassName='navbar__mainLink--active'
              to={route}
            >
              <div>{text}</div>
            </NavLink>
            {subItems && (
              <ul className='navbar__nestedList'>
                {subItems.map((({ text, route }) => (
                  <li className='navbar__nestedItem' key={route}>
                    <NavLink to={route}><div>{text}</div></NavLink>
                  </li>
                )))}
              </ul>
            )}
            <div className='navbar__border' />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Bar;