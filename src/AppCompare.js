import React, {Component, PureComponent} from 'react';
import logo from './logo.svg';
import './App.css';

class Son extends PureComponent {
	constructor(props) {
    super(props);
	}
	render() {
		const {propA, propB} = this.props
		console.log('pure son update', propB.test);
		return (
			<div>
				{propA}:
				{propB.test}
			</div>
		)
	}
}

// let test = {test: {child: 1}}
let test = {test: 1}
class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
			son: {b: {}},
    };
	}
	componentDidMount() {
		this.setState({
			son: {
				a: 'w',
				b: test
			}
		})
	}

	render() {
		console.log('pure father update');
		const {son} = this.state
		return (
			<div className="App" onClick={() => {
				// test = {test: {child: 2}}
				// test.test.child = 2
				test.test = 2
				// test = {test: 2}
				console.log('test', test);
				this.setState({
					son: {
						a: 'w',
						b: test
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
