import React from 'react';
import PropTypes from 'prop-types';

const getResult = (total, operation, next) => {
  let result = '0';
  if (total) {
    result = `${total} ${operation || ''} ${next || ''}`;
  } else if (next) {
    result = next;
  }
  return result;
};

const CalcScreen = ({ total, next, operation }) => (
  <div className="calc-screen">
    <p>{getResult(total, operation, next)}</p>
  </div>
);

CalcScreen.propTypes = {
  total: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};

export default CalcScreen;
