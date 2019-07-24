import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const SortButton = ({ sortBy, direction }) => (
  <div className="btn-wrapper">
    <button type="button" className="btn-sort" onClick={() => sortBy('creation_date')}>
      <span className="arrow-state">
        По дате
        {direction === 'asc' ? <i className="fas fa-arrow-down" /> : <i className="fas fa-arrow-up" />}
      </span>
    </button>
  </div>
);

export default SortButton;

SortButton.propTypes = {
  sortBy: PropTypes.func,
  direction: PropTypes.string,
};

SortButton.defaultProps = {
  sortBy: () => {
  },
  direction: '',
};
