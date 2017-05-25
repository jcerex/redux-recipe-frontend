import { combineReducers } from 'redux';
import { REPLACE_ALL_INGREDIENTS } from './actions'

function ingredients(state = [], action) {
	switch(action.type) {
		case REPLACE_ALL_INGREDIENTS:
			return [...action.ingredients];
		default:
			return state;
	}  	
}

const recipesStore = combineReducers({
	ingredients
});

export default recipesStore;
