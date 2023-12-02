import React, { Component } from 'react'

import "./Contact.css"

export default function Contact(){

	const onSubmit = async (e) => {

	}
  
    return (
      <>
	  	<div className="addNewContactDiv">
			<form className="addNewContactForm" onSubmit={onSubmit}>
				<div className="AddContactName">
					<label className='elements' htmlFor="contactName">Add contact Name:</label>
					<input id="contactName" className='elements'/>
				</div>
				<div className="AddContactEmail">
					<label htmlFor="contactEmail" className='elements'>Add contact Email:</label>
					<input id="contactEmail" className='elements'/>
				</div>
				<div className="AddContactButton">
					<button className='buttonElement'>+</button>
				</div>
			</form>
		</div>
		<div className='existingContacts'>
			
		</div>
	  </>
    )
  
}
