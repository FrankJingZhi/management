import React, { Component } from 'react';
import store from './store'; //redux
import { Provider } from 'react-redux'; //react-redux
import Login from './pages/login';
import { BrowserRouter as Router, Route } from 'react-router-dom'; //react路由
import LayoutUI from './common/layout/index';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<Route path="/" exact component={Login} />
						<Route path="/Home" exact component={LayoutUI}/>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
