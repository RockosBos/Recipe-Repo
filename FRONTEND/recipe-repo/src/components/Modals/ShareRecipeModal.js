import React, { Component } from 'react'
import { shareRecipeService } from '../Services/shareRecipeService';

const ShareRecipeModal = (props) => {

	return(
		<>
			{props.isOpen && (
				<div className="overlay">
					<div className="box">
						<p>Modal Data</p>
					</div>
				</div>
			)}
		</>
	)
}

export default ShareRecipeModal;
