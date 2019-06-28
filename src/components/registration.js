import React, { Component } from 'react';
import RegistrationForm from '../components/form/registrationForm';

//Компонент с формой регистрации
class RegistrationUser extends Component {
	//Событие submit формы Регистрации (в values приходят данные из всех input формы)
	submit = (values) => {
		this.props.history.push('/singUp'); //Роутинг на компонент login
	};
	render() {
		return (
			<div className="registartion__wrapper">
				<h3>Регистрация</h3>
				<RegistrationForm onSubmit={this.submit} /> {/*Форма Регистрации написанная на Redux-Form*/}
			</div>
		);
	}
}

export default RegistrationUser;
