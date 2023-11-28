import React, { Component } from 'react'
import {Recipe} from '../Models/Recipe'

import { createRecipeService } from '../Services/createRecipeService'

const ModalData = {
	isOpen: Boolean,
	toggle: () => {},

}

const DeleteRecipeModal = (props) => {

	const onSubmit = async (e) => {
		e.preventDefault();

		const target = e.target;
		const token = props.token;

		Recipe.recipeTitle = target.title.value;
		Recipe.recipeDescription = target.desc.value;

		await deleteRecipeService({Recipe, token}).then(
			(res) => {
				if(res.ok){
					props.toggle();
				}
			}
		)

	}

	return(
		<>
			{props.isOpen && (
				<div className="overlay">
					<div className="box">
						<h1>Are you sure you would like to delete this recipe?</h1>
						<form className="create-recipe-form" onSubmit={onSubmit}>
							<button>Delete</button>
							<button onClick={props.toggle}>Cancel</button>
						</form>
					</div>
				</div>
			)}
		</>
	)
}

export default DeleteRecipeModal;
