import React, { Component } from 'react'

export default function Recipes() {
  
	const Recipe = {
		Ingredients: String,
		Directions: String,
		creatorID: String,
		PostDate: Date,
	};

	const DUMMY_RECIPES = [
		{
			Ingredients: "Carrots, Cheese, Milk",
			Directions: "Mix together for 5 minutes",
			creatorID: 123,
			PostDate: "11-06-2023",
		},
		{
			Ingredients: "Oreo, Cake Mix, Frosting",
			Directions: "Bake for 30 Minutes",
			creatorID: 176,
			PostDate: "11-05-2023",
		}
	];

	const loadedRecipes = DUMMY_RECIPES.map(Recipe => {
		return(
			<div className='card'>
				<p>{Recipe.Ingredients}</p>
				<p>{Recipe.PostDate}</p>
				<p>{Recipe.creatorID}</p>
				<p>{Recipe.PostDate}</p>
			</div>
		);
	});

	return (
	  	<div>
			{loadedRecipes}
		</div>
	)
  
}
