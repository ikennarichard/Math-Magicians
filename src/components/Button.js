import PropTypes from 'prop-types';
import React from 'react';

export default function Button({
  value, span, bg, press,
}) {
  return (
    <button type="button" className={`btn ${[span, bg].join('')}`} onClick={press}>{value}</button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  span: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  press: PropTypes.func.isRequired,
};
