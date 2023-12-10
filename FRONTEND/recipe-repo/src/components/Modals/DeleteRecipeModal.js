import React, { Component } from 'react'

import {deleteRecipeService} from '../Services/deleteRecipeService'
import {useNavigate} from 'react-router-dom'

import "./DeleteRecipeModal.css"

const DeleteRecipeModal = (props) => {

	const navigate = useNavigate();

	const onSubmit = async (e) => {
		e.preventDefault();

		const target = props.data;
		const token = props.token;

		const recipe = {
			recipeTitle: target.recipeTitle
		}

		await deleteRecipeService({recipe, token}).then(
			(res) => {
				if(res.ok){
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
						<h1>Are you sure you would like to delete this recipe?</h1>
						<form className="delete-recipe-form" onSubmit={onSubmit}>
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
