import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';

export default class DetalleDepartamento extends Component {

    urlDeptos = Global.urlDeptos;

    state = {
        depto: null,
        status: false
    }

    componentDidMount = () => {
        this.loadDepartamento();
    }

    loadDepartamento = () => {
        var request = "api/departamentos/" + this.props.iddepartamento;

        axios.get(this.urlDeptos+request).then(response => {
            this.setState({
                depto: response.data,
                status: true
            })
        })
    }
    
  render() {
    return (
      <div className='position-absolute top-50 start-50 translate-middle'>
        <h1 style={{color: "green"}}>Detalle de departamento: {this.props.iddepartamento}</h1>
        {
            this.state.status == true &&
            (<div>
                <h2>Nombre: {this.state.depto.nombre}</h2>
                <h2>Localidad: {this.state.depto.localidad}</h2>
            </div>)
        }
        
      </div>
    )
  }
}
