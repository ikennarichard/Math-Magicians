import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Button({ value, span, bg }) {
  return (
    <button type="button" className={`btn ${[span, bg].join('')}`}>{value}</button>
  );
}
