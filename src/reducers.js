import { combineReducers } from 'redux';

function ingredients(state = [], action) {
	return state;
}

const recipesStore = combineReducers({
	ingredients
});

export default recipesStore;
