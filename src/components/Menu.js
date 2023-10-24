import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (
      <div>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

        <NavLink className="navbar-brand" to="/">Home</NavLink>
        <NavLink className="navbar-brand" to="/createdepartamento">Crear Departamento</NavLink>
        
        </div>
        </nav>
      </div>
    )
  }
}
