import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from '../components/Buttons';
import CalcScreen from '../components/CalcScreen';

const Calculator = () => {
  const [obj, setObj] = useState({});

  const handleEvent = (e) => {
    const button = e.target.textContent;
    const value = calculate(obj, button);
    setObj(value);
  };

  const { next, total, operation } = obj;

  return (
    <div className="calculator-container">
      <h2>Let&apos;s do some Math!</h2>
      <div className="calculator">
        <CalcScreen next={next} total={total} operation={operation} />
        <Buttons action={handleEvent} />
      </div>
    </div>
  );
};

export default Calculator;
