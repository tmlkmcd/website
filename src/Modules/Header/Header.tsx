import React, { FunctionComponent } from 'react';

import './style.scss';
import MeImg from '../../images/me.png';

const Header: FunctionComponent = () => {
  return (
    <header className='header'>
      <div className='header__left'>
        <img src={MeImg} className='header__left__image' />
      </div>
      <div className='header__right'>
        <div className='header__right__keywordWrapper'>
          <div className='header__right__keyword'>
            engineer. gamer.
          </div>
          <div className='header__right__keyword'>
            musician.
          </div>
        </div>
        <div className='header__right__social'>
          <div className='header__right__socialIcon header__right__socialIcon--facebook'>
            <a href='https://www.facebook.com/TMLKMCD/'>
              <i className='fab fa-facebook-square' />
            </a>
          </div>
          <div className='header__right__socialIcon header__right__socialIcon--instagram'>
            <a href='https://www.instagram.com/himynameistommy123/'>
              <i className='fab fa-instagram-square' />
            </a>
          </div>
          <div className='header__right__socialIcon header__right__socialIcon--twitter'>
            <a href='https://twitter.com/tmlkmcd'>
              <i className='fab fa-twitter-square' />
            </a>
          </div>
          <div className='header__right__socialIcon header__right__socialIcon--linkedin'>
            <a href='https://www.linkedin.com/in/tmlkmcd/'>
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
