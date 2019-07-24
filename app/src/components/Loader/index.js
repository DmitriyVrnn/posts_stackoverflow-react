import React from 'react';

import './styles.css';

const Loader = () => (
  <div className="lds-css ng-scope lds-position">
    <div className="lds-double-ring">
      <div />
      <div />
      <div>
        <div />
      </div>
      <div>
        <div />
      </div>
    </div>
  </div>
);

export default Loader;
