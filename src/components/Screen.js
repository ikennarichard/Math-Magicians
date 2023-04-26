/* eslint-disable react/prop-types */
import React from 'react';

export default function Screen({ value }) {
  const { total, next, operation } = value;
  return (
    <div className="output">
      <div className="current-operand">
        {total}
        {operation}
        {next}
      </div>
    </div>
  );
}
