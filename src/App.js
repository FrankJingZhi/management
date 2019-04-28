import React, { Component } from 'react';
import store from './store'; //redux
import { Provider } from 'react-redux'; //react-redux
import { BrowserRouter, Route } from 'react-router-dom'; //react路由
import Login from './pages/login';
import Training from './pages/training/index';
import Exam from './pages/exam/index';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Route path="/" exact component={Login} />
						<Route path="/training" exact component={Training}/>
						<Route path="/exam" exact component={Exam}/>
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
