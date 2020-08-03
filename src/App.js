import React, {Component, PureComponent} from 'react';
import logo from './logo.svg';
import './App.css';

class Son extends Component {
	constructor(props) {
    super(props);
	}
	render() {
		console.log('son update');
		const {propA, propB} = this.props
		return (
			<div>
				{propA}:
				{propB}
			</div>
		)
	}
}

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
			son: {},
    };
	}
	componentDidMount() {
		this.setState({
			son: {
				a: 'w',
				b: 13
			}
		})
	}

	render() {
		console.log('father update');
		const {son} = this.state
		return (
			<div className="App" onClick={() => {
				this.setState({
					son: {
						a: 'w',
						b: 13
					}
				})
			}}>
				test
				<Son propA={son.a} propB={son.b} />
			</div>
		)
	}
}

// function App() {
//   return (
//     <div className="App">
// 			test
//     </div>
//   );
// }

export default App;
