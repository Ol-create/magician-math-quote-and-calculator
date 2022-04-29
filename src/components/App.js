import React from 'react';
import Display from './display.jsx';
import SpecialFunction from './specialFunction.jsx';
import Digit from './digit.jsx';
import Operation from './operation.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="parentContainer">
        <Display />
        <div id="funDigOper">

          <div className="funDig">
            <SpecialFunction />
            <Digit />

          </div>
          <Operation />
        </div>
      </div>
    );
  }
}

export default App;
