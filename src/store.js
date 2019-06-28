import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { initState } from './reducers';

//Store
export const store = createStore(
	rootReducer,
	initState,
	compose(applyMiddleware(), window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f)
);

export default store;
