import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

//Основной state
export const initState = {
	autorization: false
};

const mainReducer = (state = initState, action) => {
	switch (action.type) {
    //Action изменяет состояние autorization в true/false
    case 'GET_AUTORIZATION_FORM':
			return {
				...state,
				autorization: action.payload
			};
		default:
			return state;
	}
};

const todoApp = combineReducers({
	mainReducer,
	form: formReducer //для redux-form
});

export default todoApp;
