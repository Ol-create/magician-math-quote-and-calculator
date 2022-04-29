import React from 'react';

class Operation extends React.Component {
  render() {
    return (
      <div className="operationContainer">
        <button className="operation">/</button>
        <button className="operation">x</button>
        <button className="operation">-</button>
        <button className="operation">+</button>
        <button className="operation">=</button>
      </div>
    );
  }
}

export default Operation;
