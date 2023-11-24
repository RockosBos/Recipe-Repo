import React, { Component } from 'react'
import Recipes from "../components/Recipes"
import "./Recipe.css"
import CreateRecipeModal from '../components/Modals/CreateRecipeModal'
import useCreateRecipeModal from '../components/Hooks/useCreateRecipeModal'

export default function Recipe({token}){
	const {isOpen, toggle} = useCreateRecipeModal();

	return (
		<div>
			<div className='create-recipe-button-div'>
				<button onClick={toggle} className='create-recipe-button'>Create a New Recipe:</button>
			</div>
			<CreateRecipeModal token={token} isOpen={isOpen} toggle={toggle}/>
			<div className='recipes'>
				<Recipes />
			</div>
			<p>{token}</p>
		</div>
	)
}
