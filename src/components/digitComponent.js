import React from 'react';
import ReactDOM from 'react-dom';


//Create digit input component
class DigitInput extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (<div id='digit-input'>
			<div className='digits'><p className='digit'>7</p>
			<p className='digit'>8</p>
			<p className='digit'>9</p></div>
			<div className='digits'><p className='digit'>4</p>
			<p className='digit'>5</p>
			<p className='digit'>6</p></div>
			<div className='digits'><p className='digit'>1</p>
			<p className='digit'>2</p>
			<p className='digit'>3</p></div>
			<div class='zero-and-point'>
				<p id='zero'>0</p>
				<p className='digit'>.</p>
			</div>
		</div>);
	}
}
