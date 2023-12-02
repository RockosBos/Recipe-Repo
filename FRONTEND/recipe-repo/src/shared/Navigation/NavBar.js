import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {Nav} from '../../components/NavComponents'
import logo from '../../assets/Temp_Logo.png';

export default class NavBar extends Component {
  render() {
    return (
      <div>
            <Nav>
                <NavLink to="/" style={{width:"0%"}}>
					<img src={logo} style={{display: 'flex-box', height: '100%', padding: '0%', textDecoration: 'none'}} />
				</NavLink>
                <NavLink to="/recipes" style={{ textDecoration: 'none', color: "#FFFFFF" }}><h1>Recipes</h1></NavLink>
                <NavLink to="/contact" style={{ textDecoration: 'none', color: "#FFFFFF" }}><h1>Contacts</h1></NavLink>
				<NavLink to="/openAI" style={{ textDecoration: 'none', color: "#FFFFFF"}}><h1>Open AI</h1></NavLink>
            </Nav>
      </div>
    )
  }
}