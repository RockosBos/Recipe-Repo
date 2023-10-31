import React, { Component } from 'react'
import RecipeModal from '../components/RecipeModal'

export default class Recipe extends Component {
  render() {
    return (
      <div className="App">
        <h1>Recipes</h1>
        <RecipeModal show={true}/>
      </div>
    )
  }
}
