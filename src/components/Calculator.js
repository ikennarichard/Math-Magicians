import { useState } from 'react';
import Button from './Button';
import Screen from './Screen';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [value, setValue] = useState({ total: '0', next: null, operation: null });

  function handleClick(digit) {
    setValue(calculate(value, digit));
  }

  return (
    <div className="calculator-grid">
      <Screen value={value} />
      <Button value="AC" press={(e) => handleClick(e.target.textContent)} />
      <Button value="+/-" press={(e) => handleClick(e.target.textContent)} />
      <Button value="%" press={(e) => handleClick(e.target.textContent)} />
      <Button value="÷" bg="orange" press={(e) => handleClick(e.target.textContent)} />
      <Button value="7" press={(e) => handleClick(e.target.textContent)} />
      <Button value="8" press={(e) => handleClick(e.target.textContent)} />
      <Button value="9" press={(e) => handleClick(e.target.textContent)} />
      <Button value="*" bg="orange" press={(e) => handleClick(e.target.textContent)} />
      <Button value="4" press={(e) => handleClick(e.target.textContent)} />
      <Button value="5" press={(e) => handleClick(e.target.textContent)} />
      <Button value="6" press={(e) => handleClick(e.target.textContent)} />
      <Button value="-" bg="orange" press={(e) => handleClick(e.target.textContent)} />
      <Button value="1" press={(e) => handleClick(e.target.textContent)} />
      <Button value="2" press={(e) => handleClick(e.target.textContent)} />
      <Button value="3" press={(e) => handleClick(e.target.textContent)} />
      <Button value="+" bg="orange" press={(e) => handleClick(e.target.textContent)} />
      <Button value="0" span="span-two" press={(e) => handleClick(e.target.textContent)} />
      <Button value="." press={(e) => handleClick(e.target.textContent)} />
      <Button value="=" bg="orange" press={(e) => handleClick(e.target.textContent)} />
    </div>
  );
}
