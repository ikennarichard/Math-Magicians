import { useState } from 'react';
import Button from './Button';
import Screen from './Screen';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [value, setValue] = useState({ total: null, next: null, operation: null });

  function handleClick(e) {
    setValue(e.target.textContent);
  }

  return (
    <div className="calculator-grid">
      <Screen value={value.next || value.total || value.operation} />
      <Button value="AC" onClick={(e) => handleClick(e)} />
      <Button value="+/-" />
      <Button value="%" />
      <Button value="÷" bg="orange" />
      <Button value={7} />
      <Button value={8} />
      <Button value={9} />
      <Button value="*" bg="orange" />
      <Button value={4} />
      <Button value={5} />
      <Button value={6} />
      <Button value="-" bg="orange" />
      <Button value={1} />
      <Button value={2} />
      <Button value={3} />
      <Button value="+" bg="orange" />
      <Button value={0} span="span-two" />
      <Button value="." />
      <Button value="=" bg="orange" />
    </div>
  );
}
