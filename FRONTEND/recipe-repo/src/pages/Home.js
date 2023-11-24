import React, { Component, useState } from 'react'

import { signupService } from '../components/Services/signupService';
import { loginService } from '../components/Services/loginService';

import "./Home.css"

export default function Home({setToken}){

	const [loggedIn, setLoggedIn] = useState(false);

	const loginSubmit = async (e) => {
		e.preventDefault();
	
		const target = e.target;
	
		const loginData = {
			email: target.email.value,
			passWord: target.password.value
		}
	
		await loginService(loginData)
			.then(res => res.json())
			.then(data => {
				setLoggedIn(true);
				setToken(data.token);
			});
		
	}
	
	const signupSubmit = async (e) => {
		e.preventDefault();
		
		const target = e.target;
	
		const signupData = {
			firstName: target.fName.value,
			lastName: target.lName.value,
			email: target.email.value,
			passWord: target.password.value,
			contactNumber: target.number.value
		}
		
		await signupService(signupData).then(
			(res) => {
				if(res.ok){
					alert("Account Created Successfully");
				}
			}
		)
	}
	
	return (
		<>
			{loggedIn && (
				<div className='loggedInMessage'>
					<h1>You are logged in!</h1>
				</div>
			)}
			{!loggedIn && (
				<div className='login'>
				<h1 className='header'>Please Log in or sign up</h1>
				<div className='card-parent'>
					<div className='login-card'>
						<form className='login-form' onSubmit={loginSubmit}>
							<div className="field">
								<label htmlFor="email">Email:</label>
								<input id="email" />
							</div>
							<div className="field">
								<label htmlFor="password">Password:</label>
								<input type="password" id="password" />
							</div>
							<div className='button'>
								<button>Login</button>
							</div>
						</form>
					</div>
					<div className='signup-card'>
						<form className='signup-form' onSubmit={signupSubmit}>
						<div className="field">
								<label htmlFor="fName">First Name:</label>
								<input id="fName" />
							</div>
							<div className="field">
								<label htmlFor="lName">Last Name:</label>
								<input id="lName" />
							</div>
							<div className="field">
								<label htmlFor="email">New Email:</label>
								<input id="email" />
							</div>
							<div className="field">
								<label htmlFor="password">New Password:</label>
								<input type="password" id="password" />
							</div>
							<div className="field">
								<label htmlFor="number">Contact Number:</label>
								<input id="number" />
							</div>
							<div className='button'>
								<button >Signup</button>
							</div>
						</form>
					</div>
				</div>
				
			</div>
			)}
		</>
	  )
}
