import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {Nav} from '../../components/NavComponents'

export default class NavBar extends Component {
  render() {
    return (
      <div>
            <Nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/recipes">Recipes</NavLink>
                <NavLink to="/users">Users</NavLink>
            </Nav>
      </div>
    )
  }
}