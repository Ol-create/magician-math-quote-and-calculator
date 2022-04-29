import React from 'react';
import Display from './display.js';
import SpecialFunction from './specialFunction.js';
import Digit from './digit.js';
import Operation from './operation.js';


class App extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className='parentContainer'>
			<Display />
			<div id='funDigOper'>
             
			<div className='funDig'>
			<SpecialFunction />
				<Digit />

			</div>
			<Operation />
			</div>
			</div>
		)
	}
}

export default App;
