import React, { Component } from 'react'
import { editRecipeService } from '../Services/editRecipeService'
import "./EditRecipeModal.css"

const EditRecipeModal = (props) => {

	const onSubmit = async (e) => {
		e.preventDefault();

		const target = e.target;
		const token = props.token;

		const Recipe = {
			recipeTitle: target[0].value,
			recipeDescription: target[1].value,
		}

		await editRecipeService({Recipe, token}).then(
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
						<form className="edit-recipe-form" onSubmit={onSubmit}>
							<h1>Please Enter Your Recipe:</h1>
							
							<div className="field">
								<label htmlFor="title">New Recipe Title:</label>
								<input id="title" defaultValue={props.data.recipeTitle}/>
							</div>
							<div className="field">
								<label htmlFor="desc">New Recipe Description:</label>
								<textarea name="desc" id="desc" defaultValue={props.data.recipeDescription}/>
							</div>
							<div>
								<button>Update</button>
								<button onClick={props.toggle}>Cancel</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	)
}

export default EditRecipeModal;
