import React, { Component, useEffect, useState } from 'react'
import { Recipe } from './Models/Recipe';
import EditRecipeModal from './Modals/EditRecipeModal';
import DeleteRecipeModal from "./Modals/DeleteRecipeModal"
import useEditRecipeModal from './Hooks/useEditRecipeModal';
import useDeleteRecipeModal from './Hooks/useDeleteRecipeModal';
import useShareRecipeModal from './Hooks/useShareRecipeModal';
import ShareRecipeModal from './Modals/ShareRecipeModal';
import {reloadRecipeService} from './Services/reloadRecipeService'
import "./Recipes.css"

export default function Recipes(props) {
	const [recipeData, setRecipeData] = useState(Recipe);

	const {isOpen, toggle} = useEditRecipeModal();
	const {shareIsOpen, shareToggle} = useShareRecipeModal();
	const {deleteIsOpen, deleteToggle} = useDeleteRecipeModal();

	useEffect(() => {
		if(props.token){
			const api = async () => {
				const data = await fetch("http://localhost:3000/raja/recipe/get", 
				{
					method: 'GET',
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + props.token,
					},
				  },
				)
				const json = await data.json();
				props.setResult(json.userRecipe);
			}
			api();
		}
	}, []);

	async function openEditRecipeModal(props){
		setRecipeData(props);
		toggle();

	}

	async function openDeleteRecipeModal(props){
		setRecipeData(props);
		deleteToggle();
	}

	async function openShareRecipeModal(props){
		setRecipeData(props);
		shareToggle();
		
	}


	const loadedRecipes = props.Result.map(Recipe => {
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
						<button className='share-button' onClick={() => {openShareRecipeModal(Recipe)}}>Share</button>
						<button className='delete-button' onClick={() => {openDeleteRecipeModal(Recipe)}}>Delete</button>
					</div>
				</div>
			</>
		);
	});

	return (
	  	<div>
			<div className='modals'>
				<EditRecipeModal token={props.token} isOpen={isOpen} toggle={toggle} data={recipeData} reload={reloadRecipeService} setResult={props.setResult}/>
				<ShareRecipeModal token={props.token} isOpen={shareIsOpen} toggle={shareToggle} data={recipeData} reload={reloadRecipeService} setResult={props.setResult}/>
				<DeleteRecipeModal token={props.token} isOpen={deleteIsOpen} toggle={deleteToggle} data={recipeData} reload={reloadRecipeService} setResult={props.setResult}/>
			</div>
			{(props.Result.length != 0) && loadedRecipes}
			{(!props.token) && 
				<>
					<p>Please log in before viewing recipes!</p>
				</>
			}
			{(props.Result.length == 0 && props.token) && 
				<>
					<p>You have no Recipes, please create some!</p>
				</>
			}
		</div>
	)
  
}
