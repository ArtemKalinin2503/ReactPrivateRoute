//Action изменяет состояние autorization в true/false
export const actionGetAutorization = (autorization) => {
	return { type: 'GET_AUTORIZATION_FORM', payload: autorization };
};
