import React, { Component } from 'react'
import {Recipe} from '../Models/Recipe'
import "./CreateRecipeModal.css"
import { createRecipeService } from '../Services/createRecipeService'
import {useNavigate} from 'react-router-dom'

const CreateRecipeModal = (props) => {

	const navigate = useNavigate();

	const onSubmit = async (e) => {
		e.preventDefault();

		const target = e.target;
		const token = props.token;

		Recipe.recipeTitle = target.title.value;
		Recipe.recipeDescription = target.desc.value;

		await createRecipeService({Recipe, token}).then(
			(res) => {
				if(res.ok){
					alert("Recipe Created Successfully");
					navigate("/");
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
						<form className="create-recipe-form" onSubmit={onSubmit}>
							<h1>Please Enter Your Recipe:</h1>
							
							<div className="field">
								<label htmlFor="title">Recipe Title:</label>
								<input id="title" />
							</div>
							<div className="field">
								<label htmlFor="desc">Recipe Description:</label>
								<textarea name="desc" id="desc" rows="10" cols="50"/>
							</div>
							<div>
								<button>Create</button>
								<button onClick={props.toggle}>Cancel</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	)
}

export default CreateRecipeModal;
