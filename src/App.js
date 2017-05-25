import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import IngredientList from './IngredientList';
import IngredientForm from './IngredientForm';
import { connect } from 'react-redux';
import { replaceAllIngredients } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: []
    }
  };

  componentDidMount() {
    console.log("this.props.reduxIngredients: ", this.props.reduxIngredients);

    this.getIngredientList();
  };

  getIngredientList() {
    const URL = 'https://yamagucci.herokuapp.com/api/ingredients?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNob3VoZWkueWFtYXVjaGlAbGl2ZS5jb20iLCJpYXQiOjE0OTQ5OTMxMTV9.G0ctQghRRAqaZiGSZyT5Oi-YXUUfb3UsYQpsmMaVA0k';
    axios.get(URL)
      .then((response) => {

        // add data to the store
        this.props.replaceIngredients(response.data);

       // this.setState({ ingredients: this.props.reduxIngredients });

       // this.setState({ ingredients: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Recipes Frontend</h1>
        <IngredientForm 
          getIngredientList={() => this.getIngredientList()} />
        {this.props.reduxIngredients.length < 1 ? <p>Loading...</p> : <IngredientList ingredients={this.props.reduxIngredients} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reduxIngredients: state.ingredients  // this.props.reduxIngredients
  }
}

function mapDispatchToProps(dispatch) {
  return {   // this.props.replaceIngredients
    replaceIngredients: ingredients => dispatch(replaceAllIngredients(ingredients))
    // replaceIngredients: ingredients => dispatch({ type: REPLACE_ALL_INGREDIENTS, ingredients})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);








