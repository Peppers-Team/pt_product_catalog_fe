import React from 'react';
import { FidgetSpinner } from 'react-loader-spinner';

import './loader.scss';

export const Loader = () => {
  return (
    <div className="loader">
      <FidgetSpinner
        visible
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={['#ff0000', '#00ff00', '#0000ff']}
        backgroundColor="#B15EFF"
      />
    </div>
  );
};
