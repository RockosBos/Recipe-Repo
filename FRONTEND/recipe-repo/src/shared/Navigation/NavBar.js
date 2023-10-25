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
					<img src={logo} style={{display: 'flex-box', height: '100%', padding: '0%'}} />
				</NavLink>
                <NavLink to="/recipes">Recipes</NavLink>
                <NavLink to="/users">Users</NavLink>
            </Nav>
      </div>
    )
  }
}