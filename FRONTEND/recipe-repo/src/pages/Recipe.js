import React, { Component, useState } from 'react'
import Recipes from "../components/Recipes"
import "./Recipe.css"
import CreateRecipeModal from '../components/Modals/CreateRecipeModal'
import useCreateRecipeModal from '../components/Hooks/useCreateRecipeModal'

export default function Recipe({token}){
	const EMPTY_RECIPES = [];

	const [result, setResult] = useState(EMPTY_RECIPES);

	const {isOpen, toggle} = useCreateRecipeModal();

	return (
		<div>
			<div className='create-recipe-button-div'>
				{token &&
					<button onClick={toggle} className='create-recipe-button'>Create a New Recipe:</button>
				}
			</div>
			<CreateRecipeModal token={token} isOpen={isOpen} toggle={toggle} setResult={setResult}/>
			<div className='recipes'>
				<Recipes token={token} setResult={setResult} Result={result}/>
			</div>
		</div>
	)
}
