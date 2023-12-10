import React, { Component } from 'react';
import './OpenAI.css';

const DUMMY_AI_RESPONSE = "This is a test Response";

const onSubmit = () => {

}

export default function OpenAI({setToken}) {
	
	return (
		<div className="openAI-page">
			<form className='open-ai-form' onSubmit={onSubmit}>
			<label className='promptBoxLabel' htmlFor="promptBox">Enter OpenAI Prompt: </label>
				<div className='prompt'>
					<textarea id="promptBox" className='promptBox' rows="10" cols="50"/>
				</div>
				<button className='buttonElement'>Submit Prompt</button>
			</form>

			<p className='response'>{DUMMY_AI_RESPONSE}</p>

		</div>
	)
}
