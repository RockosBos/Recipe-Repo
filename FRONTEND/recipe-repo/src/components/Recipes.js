import React, { Component, useEffect, useState } from 'react'
import Recipe from '../pages/Recipe';
import "./Recipes.css"

export default function Recipes() {
  
	const Recipe = {
		email: String,
		recipeTitle: String,
		recipeDescription: String
	};

	const DUMMY_RECIPES = [
		{
			email: "TestEmail@email.com",
			recipeTitle: "#1 Recipe",
			recipeDescription: "This is where I would put my recipe description!",
		},
		{
			email: "AnotherTestEmail@email.com",
			recipeTitle: "The other DUMMY recipe",
			recipeDescription: "This is where I would put my other recipe description!",
		}
	];

	//const [result, setResult] = useState<Recipe[]>([]);
	//const [recipeData, setRecipeData] = useState<Recipe>();

	useEffect(() => {
		const api = async () => {
			const data = await fetch("", {method:"GET"})
			const json = await data.json();
			console.log(json);
			setResult(json);
		}
	});

	async function openEditRecipeModal(event, recipe){
		event.preventDefault();

	}

	async function deleteRecipe(event){
		event.preventDefault();
		//const deleteId = event.currentTarget.parentElement.parentElement.childNodes[0].childNodes[0].childNodes[0].nodeValue;
		
	}


	const loadedRecipes = DUMMY_RECIPES.map(Recipe => {
		return(
			<div className='card'>
				<div className='card-title'>
					<p>{Recipe.recipeTitle}</p>
				</div>
				<div className='card-content'>
					<p>{Recipe.recipeDescription}</p>
				</div>
				<div className='card-buttons'>
					<button className='edit-button' onClick={() => {}}>Edit</button>
					<button className='delete-button' onClick={() => {}}>Delete</button>
				</div>
			</div>
		);
	});

	return (
	  	<div>
			{loadedRecipes}
		</div>
	)
  
}
