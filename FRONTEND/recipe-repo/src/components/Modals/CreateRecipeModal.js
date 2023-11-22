import React, { Component } from 'react'
import "./CreateRecipeModal.css"

const ModalData = {
	isOpen: Boolean,
	toggle: () => {},

}

const onSubmit = async (event) => {
	event.preventDefault();
}

const CreateRecipeModal = (props) => {

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
								<textarea name="desc" id="desc"/>
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
