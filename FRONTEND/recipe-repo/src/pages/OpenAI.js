import React, { Component } from 'react';
import './OpenAI.css';

const DUMMY_AI_RESPONSE = "This is a test Response";



export default function OpenAI({setToken}) {
	
	return (
		<div className="openAI-page">
			<form>
				<div className='contact-title'>
					<label className='promptBoxLabel' htmlFor="promptBox">Enter OpenAI Prompt</label>
					<input id="promptBox" className='promptBox'/>
				</div>
				<button className='buttonElement'>Submit Prompt</button>
			</form>

			<p>{DUMMY_AI_RESPONSE}</p>

		</div>
	)
}
