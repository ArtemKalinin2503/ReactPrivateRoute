import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider, connect } from 'react-redux';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeComponent from './components/home';
import Registration from './components/registration';
import SingUpComponent from './components/singUp';
import LoginComponent from './components/login';
import { PrivateRoute } from './PrivateRoute/privateRoute';

//Основной компонент
class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<Route path="/" component={HomeComponent} exact />
            <Route path="/registration" component={Registration} exact />
						<Route path="/singUp" component={SingUpComponent} exact />
						<PrivateRoute path="/login" component={LoginComponent} state={this.props.autorization} exact /> {/*Роутинг по условию*/}
						<Route path="*" component={() => '404 страница не найдена'} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state, ownProps = {}) => ({
	autorization: state.mainReducer.autorization
});

const MainApp = connect(mapStateToProps)(App);

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<MainApp />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);
