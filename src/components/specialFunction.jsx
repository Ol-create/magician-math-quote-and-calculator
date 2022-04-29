import React from 'react';
class SpecialFunction extends React.Component{
	render(){
		return(
			<div id="specialFunctionContainer">
			<button className="specialFunction">{'AC'}</button>
			<button className="specialFunction">{'+/-'}</button>
			<button className="specialFunction">{'%'}</button>
			</div>
		)
	}
}

export default SpecialFunction;
