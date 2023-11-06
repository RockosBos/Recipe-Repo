import React, { Component } from 'react'
import Recipes from "../components/Recipes"

export default class Recipe extends Component {
  render() {
    return (
      	<div className='recipes'>
			<Recipes />
	  	</div>
    )
  }
}
