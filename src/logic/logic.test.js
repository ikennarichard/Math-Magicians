import calculate from './calculate';
import operate from './operate';

describe('test for calculations', () => {
  const ops = { total: 5, next: null, operation: null };

  it('clear operation with AC', () => {
    expect(calculate(ops, 'AC')).toStrictEqual({ total: null, next: null, operation: null });
  });

  it('check for correct calculation', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, '=')).toStrictEqual({ total: '15', next: null, operation: null });
  });
});

describe('test for the various operations', () => {
  it('sums two values', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  it('cant divide by zero', () => {
    expect(operate(5, 0, '÷')).toBe('Can\'t divide by 0.');
  });
});
