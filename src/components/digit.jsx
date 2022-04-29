import React from 'react';
// Create digit input component
class Digit extends React.Component {
  render() {
    return (
      <div id="digitContainer">
        <div className="digits">
          <button className="digit">{7}</button>
          <button className="digit">8</button>
          <button className="digit">9</button>
        </div>
        <div className="digits">
          <button className="digit">4</button>
          <button className="digit">5</button>
          <button className="digit">6</button>
        </div>
        <div className="digits">
          <button className="digit">1</button>
          <button className="digit">2</button>
          <button className="digit">3</button>
        </div>
        <div className="zeroAndPoint">
          <button id="zero">0</button>
          <button className="digit">.</button>
        </div>
      </div>
    );
  }
}

export default Digit;
