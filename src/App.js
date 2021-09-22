import React, { Component } from 'react';
import TicTac from './components/TicTac';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}

	render() {
		return (
			<div className="text-center text-light">
				<div className="container  mt-2 h2">
					Tic Tac Toe
				</div>
				<div className="m-auto">
					<TicTac />
				</div>

			</div>
		);
	}
}

export default App;
