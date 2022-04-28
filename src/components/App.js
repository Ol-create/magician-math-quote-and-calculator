import Operation from "./operation";
import SpecialFunction from "./specialFunction.JS";

class App extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div>
			<Display />
			<div>
			<div className=''>
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
