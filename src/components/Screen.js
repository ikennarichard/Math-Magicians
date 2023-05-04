import PropTypes from 'prop-types';
import React from 'react';

export default function Screen({ value }) {
  const { total, next, operation } = value;
  return (
    <div className="output">
      <div className="current-operand" data-testid="output">
        {total}
        {operation}
        {next}
      </div>
    </div>
  );
}

Screen.propTypes = {
  value: PropTypes.string.isRequired,
};
