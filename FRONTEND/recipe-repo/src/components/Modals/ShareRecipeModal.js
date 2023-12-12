import React, { Component } from 'react'
import { shareRecipeService } from '../Services/shareRecipeService';
import "./ShareRecipeModal.css"

const ShareRecipeModal = (props) => {

	let shareRecipe;

	const onSubmit = async (e) => {
		e.preventDefault();
		const target = e.target;

		shareRecipe = {
			recipeTitle: props.recipeTitle,
			recipeDescription: props.recipeDescription,
			email: e.target[0].value
		}

		const token = props.token;

		shareRecipeService({shareRecipe, token}).then(() => {
			alert("Recipe shared Successfully");
		});
		
	}

	return(
		<>
			{props.isOpen && (
				<div className="overlay">
					<div className="box">
						<form onSubmit={onSubmit}>
							<div className="field">
								<label htmlFor="email">Email: </label>
								<input id="email" />
								<div className='buttons'>
									<button>Share</button>
									<button onClick={props.toggle}>Cancel</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	)
}

export default ShareRecipeModal;
