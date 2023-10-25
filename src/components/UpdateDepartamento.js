import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class UpdateDepartamento extends Component {

    urlDeptos = Global.urlDeptos;

    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLoc = React.createRef();

    state = {
        departamento: {},
        statusGet: false,
        statusUpdate: false
    }

    findDepartamento = () => {

        var request = "api/departamentos/" + this.props.iddepartamento;

        axios.get(this.urlDeptos+request).then(response => {
            this.setState({
                departamento: response.data,
                statusGet:true
            })
        })

    }

    componentDidMount = () => {
        this.findDepartamento();
    }

    actualizarDepartamento = (e) => {
        
        if (e!=null){
            e.preventDefault();
        }

        var request = "api/departamentos";

        var numero = parseInt(this.cajaNumero.current.value);
        var nombre = this.cajaNombre.current.value;
        var localidad = this.cajaLoc.current.value;

        var data = {
            numero: numero,
            nombre: nombre,
            localidad: localidad
        }

        axios.put(this.urlDeptos + request, data).then(response => {
            this.setState({
                statusUpdate: true
            })
        })

    }

  render() {
    return (
      <div className='position-absolute top-50 start-50 translate-middle'>

        {
            this.state.statusUpdate == true &&
            (<Navigate to="/" />)
        }
        <h1 style={{color: "blue"}}>Actualizar depto: {this.props.iddepartamento}</h1>

        {
            this.state.statusGet == true &&
            (
            <form>
                
                <input className='form-control' type='hidden' ref={this.cajaNumero} 
                defaultValue={this.state.departamento.numero} /> 
                <br></br>
                <label>Nombre: </label>
                <input className='form-control' type='text' ref={this.cajaNombre} 
                defaultValue={this.state.departamento.nombre}/> 
                <br></br>
                <label>Localidad: </label>
                <input className='form-control' type='text' ref={this.cajaLoc} 
                defaultValue={this.state.departamento.localidad}/> 
                <br></br>
                <button className='btn btn-info' onClick={this.actualizarDepartamento}>
                    Actualizar!</button>
            </form>
            )
        }


      </div>
    )
  }
}
