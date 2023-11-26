import React, { Component, useEffect, useState } from 'react'
import { Recipe } from './Models/Recipe';
import EditRecipeModal from './Modals/EditRecipeModal';
import DeleteRecipeModal from "./Modals/DeleteRecipeModal"
import useEditRecipeModal from './Hooks/useEditRecipeModal';
import useDeleteRecipeModal from './Hooks/useDeleteRecipeModal';
import "./Recipes.css"

export default function Recipes(props) {

	const DUMMY_RECIPES = [
		{
			recipeTitle: "#1 Recipe",
			recipeDescription: "This is where I would put my recipe description!",
		},
		{
			recipeTitle: "The other DUMMY recipe",
			recipeDescription: "This is where I would put my other recipe description!",
		}
	];

	//const [result, setResult] = useState<Recipe[]>([]);
	const [recipeData, setRecipeData] = useState(Recipe);

	const {isOpen, toggle} = useEditRecipeModal();
	const {deleteIsOpen, deleteToggle} = useDeleteRecipeModal();

	useEffect(() => {
		const api = async () => {
			const data = await fetch("", {method:"GET"})
			const json = await data.json();
			console.log(json);
			setResult(json);
		}
	});

	async function openEditRecipeModal(props){
		setRecipeData(props);
		toggle();

	}

	async function openDeleteRecipeModal(props){
		deleteToggle();
	}


	const loadedRecipes = DUMMY_RECIPES.map(Recipe => {
		return(
			<>
				
				<div className='card'>
					<div className='card-title'>
						<p>{Recipe.recipeTitle}</p>
					</div>
					<div className='card-content'>
						<p>{Recipe.recipeDescription}</p>
					</div>
					<div className='card-buttons'>
						<button className='edit-button' onClick={() => {openEditRecipeModal(Recipe)}}>Edit</button>
						<button className='delete-button' onClick={() => {openDeleteRecipeModal(Recipe)}}>Delete</button>
					</div>
				</div>
			</>
		);
	});

	return (
	  	<div>
			<div className='modals'>
				<EditRecipeModal token={props.token} isOpen={isOpen} toggle={toggle} data={recipeData}/>
				<DeleteRecipeModal token={props.token} isOpen={deleteIsOpen} toggle={deleteToggle} data={recipeData}/>
			</div>
			{loadedRecipes}
		</div>
	)
  
}
