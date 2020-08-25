import React, { FunctionComponent } from 'react';

import './style.scss';
import MeImg from '../../images/me.png';

const Header: FunctionComponent = () => {
  return (
    <header className='header'>
      <div className='header__left'>
        <img src={MeImg} className='header__left__image' />
        <div className='header__left__social'>
          <div className='header__left__socialIcon header__left__socialIcon--facebook'>
            <a href='https://www.facebook.com/TMLKMCD/'>
              <i className='fab fa-facebook-square' />
            </a>
          </div>
          <div className='header__left__socialIcon header__left__socialIcon--instagram'>
            <a href='https://www.facebook.com/TMLKMCD/'>
              <i className='fab fa-instagram-square' />
            </a>
          </div>
          <div className='header__left__socialIcon header__left__socialIcon--twitter'>
            <a href='https://www.facebook.com/TMLKMCD/'>
              <i className='fab fa-twitter-square' />
            </a>
          </div>
          <div className='header__left__socialIcon header__left__socialIcon--linkedin'>
            <a href='https://www.facebook.com/TMLKMCD/'>
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </div>
      <div className='header__right'>
        hello!
      </div>
    </header>
  );
}

export default Header;
