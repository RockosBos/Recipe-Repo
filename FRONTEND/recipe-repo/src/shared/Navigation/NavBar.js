import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/recipes">Recipes</NavLink>
            <NavLink to="/users">Users</NavLink>
      </div>
    )
  }
}