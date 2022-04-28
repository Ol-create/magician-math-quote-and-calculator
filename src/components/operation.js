class Operation extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className="operation-container">
			<p className='operation'>/</p>
			<p className='operation'>x</p>
			<p className='operation'>-</p>
			<p className='operation'>+</p>
			<p className='operation'>=</p>
			</div>
		)
	}
}

export default Operation;
