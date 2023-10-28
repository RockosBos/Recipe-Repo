import React, { Component } from 'react'
import './Login.css';

export default class Login extends Component {
  render() {
	return (
		<div className="login-page">
			<form>
				<label>
					<h1>Username</h1>
					<input type="text" />
				</label>
				<label>
					<h1>Password</h1>
					<input type="password" />
				</label>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	)
  }
}
