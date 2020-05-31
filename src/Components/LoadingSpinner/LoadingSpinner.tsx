import React from 'react';

import './style.scss';

// credit: https://loading.io/css/
const LoadingSpinner = () => {
  return (
    <div className='loadingSpinner__wrapper'>
      <div className='lds-circle'>
        <div />
      </div>
    </div>
  );
}

export default LoadingSpinner;
