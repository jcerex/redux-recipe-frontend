// action types
export const REPLACE_ALL_INGREDIENTS = 'REPLACE_ALL_INGREDIENTS';

// action creators
export function replaceAllIngredients(ingredients) {
	return ({ type: REPLACE_ALL_INGREDIENTS, ingredients: ingredients});
}
