import React, { Component } from 'react';
import store from './store'; //redux
import { Provider } from 'react-redux'; //react-redux
import { BrowserRouter,Switch, Route } from 'react-router-dom'; //react路由
import Login from './pages/login';
import Layout from './common/layout/index';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Switch>
						<Route path="/" exact component={Login} />
						<Route path="/layout" component={Layout}/>
						{/* <Route path="/training" exact component={Training}/>
						<Route path="/exam" exact component={Exam}/>
						<Route path="/userManage" exact component={UserManage}/> */}
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
