import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class CreateDepartamento extends Component {

    urlDepartamentos = Global.urlDeptos;

    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    state = {
        statusCreate: false
    }

    createDepartamento = (e) => {
        if(e != null ){
            e.preventDefault();
        }
        var request = "api/Departamentos";

        var numero = parseInt(this.cajaNumero.current.value);
        var nombre = this.cajaNombre.current.value;
        var localidad = this.cajaLocalidad.current.value;

        var departamento = {
            numero: numero,
            nombre: nombre,
            localidad: localidad
        }

        axios.post(this.urlDepartamentos + request, departamento).then(response => {
            this.setState({
                statusCreate: true
            })
        })
    }

  render() {
    return (
      <div className='position-absolute top-50 start-50 translate-middle'>
        <h1>Crear departamento</h1>

        {
            this.state.statusCreate == true &&
            (<Navigate to="/" />)
        }

        <form>
            <label>ID Departamento</label>
            <input type='text' className='form-control' ref={this.cajaNumero}/><br></br><br></br>

            <label>Nombre</label>
            <input type='text' className='form-control' ref={this.cajaNombre}/><br></br><br></br>

            <label>Localidad</label>
            <input type='text' className='form-control' ref={this.cajaLocalidad}/><br></br><br></br>

            <button className='btn btn-success' onClick={this.createDepartamento}>Crear!</button>
        </form>
      </div>
    )
  }
}
