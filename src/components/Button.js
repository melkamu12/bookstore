import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, classN }) => (
  <button className={classN} type="button" onClick={onClick}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  classN: PropTypes.string.isRequired,
};

export default Button;
