import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class EliminarDepartamento extends Component {

    urlDepartamentos = Global.urlDeptos;

    state= {
        status:false
    }

    deleteDepartamento = () => {

        var request = this.urlDepartamentos + "api/departamentos/" + this.props.iddepartamento;

        var eliminar = window.confirm("Seguro que quiere eliminar?");

         if ( eliminar == true){
            //alert("Eliminado!");
            axios.delete(request).then(response => {
                console.log("Eliminado con exito!");
                this.setState({
                    status: true
                })
            })

        } else {
            alert("Operación cancelada");
        }

        
    }

  render() {
    return (
      <div>
        {
            this.state.status == true &&
            (<Navigate to="/" />)
        }
        <h1 style={{color: "red"}}>Eliminar el departamento: {this.props.iddepartamento} ??</h1>
        <button className='btn btn-danger' onClick={() => this.deleteDepartamento()}>Eliminar</button>
      </div>
    )
  }
}
