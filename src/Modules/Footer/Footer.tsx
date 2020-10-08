import React from 'react';

import './style.scss';

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <>
      <div className='divider--page' />
      <footer>
        <i className='far fa-copyright' /> Thomas McDevitt {year}
      </footer>
    </>
  );
}
