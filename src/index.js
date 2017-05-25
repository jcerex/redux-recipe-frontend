import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import recipesStore from './reducers';

let store = createStore(recipesStore, {ingredients: [
		{name: "Cheese"},
		{name: "Pies"}
	]});
console.log("Store init: ", store.getState().ingredients);
store.subscribe( () => {
	console.log("Store changed: ", store.getState().ingredients);
});

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);
