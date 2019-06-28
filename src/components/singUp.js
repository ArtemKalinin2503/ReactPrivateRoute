import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { actionGetAutorization } from '../action';
import AutorizationForm from '../components/form/autorizationForm';

//Компонент с формой авторизации пользователя
class SingUp extends Component {
	//Событие submit формы Авторизации (в values приходят данные из всех input формы)
	submit = (values) => {
		store.dispatch(actionGetAutorization(true)); //Если состояние autorization получает true то сработает PrivateRoute (который осуществит переход на страницу login)
		this.props.history.push('/login'); //Роутинг на компонент login
	};

	render() {
		return (
			<div className="singUp__wrapper">
				<h3>Авторизация</h3>
				<AutorizationForm onSubmit={this.submit} /> {/*Это форма авторизации написанная на Redux-Form*/}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps = {}) => ({
	autorization: state.mainReducer.autorization
});

const mapDispatchToProps = {};

const SingUpComponent = connect(mapStateToProps, mapDispatchToProps)(SingUp);

export default SingUpComponent;
