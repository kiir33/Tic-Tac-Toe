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
			<div className="text-center col-md-8 col-10 m-auto">
				<div className="container  mt-4 p-2 bg-secondary rounded text-light h2">
					Tic Tac Toe
				</div>
				<div className="text-center m-auto">
					<TicTac />
				</div>

			</div>
		);
	}
}

export default App;
