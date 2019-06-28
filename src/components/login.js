import React, { Component } from 'react';

//Компонент Авторизованного пользователя
class LoginComponent extends Component {
	//Кнопка выйти
	handleClick = () => {
		this.props.history.push('/'); //Роутинг на страницу Home
	};

	render() {
		return (
			<div className="login__wrapper">
				<h1>Login</h1>
				<button className="button__singOut" onClick={this.handleClick}>
					Выйти
				</button>
			</div>
		);
	}
}

export default LoginComponent;
