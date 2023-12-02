import React, { Component, useEffect } from 'react'

import "./Contact.css"

export default function Contact(){

	const DUMMY_CONTACTS = [
		{
			contactName: "Nick Kessey",
			contactEmail: "TestEmail@email.com",
		},
		{
			contactName: "Nick Kessey 2",
			contactEmail: "noemail@email.com",
		},
	]

	useEffect(() => {
		if(true){
			const api = async () => {
				/*const data = await fetch("http://localhost:3000/raja/recipe/get", 
				{
					method: 'GET',
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + props.token,
					},
				  },
				)
				const json = await data.json();
				props.setResult(json.userRecipe);
				*/
			}
			api();
		}
	}, []);

	const onSubmit = async (e) => {

	}

	const loadedContacts = DUMMY_CONTACTS.map(Contact => {
		return(
			<>
				<div className='contact'>
					<div className='contact-title'>
						<p>{Contact.contactName}</p>
					</div>
					<div className='contact-emails'>
						<p>{Contact.contactEmail}</p>
					</div>
					<div className='contact-buttons'>
						<button className='edit-button' onClick={() => {}}>Edit</button>
						<button className='delete-button' onClick={() => {}}>-</button>
					</div>
				</div>
			</>
		);
	});
  
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
			<div className='contact'>
				<div className='contact-title'>
					<p>Contact Name</p>
					</div>
				<div className='contact-email'>
					<p>Contact Email</p>
				</div>
			</div>
			{loadedContacts}
		</div>
	  </>
    )
  
}
