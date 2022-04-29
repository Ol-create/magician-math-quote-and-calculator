import React from 'react';
class SpecialFunction extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div id="specialFunctionContainer">
			<p className="specialFunction">AC</p>
			<p className="specialFunction">+/-</p>
			<p className="specialFunction">%</p>
			</div>
		)
	}
}

export default SpecialFunction;
