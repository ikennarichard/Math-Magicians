/* eslint-disable react/prop-types */
import React from 'react';

export default function Button({
  value, span, bg, press,
}) {
  return (
    <button type="button" className={`btn ${[span, bg].join('')}`} onClick={press}>{value}</button>
  );
}
