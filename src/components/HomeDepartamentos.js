import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import loading from '../assets/images/loading.gif';

export default class HomeDepartamentos extends Component {

    urlDepartamentos = Global.urlDeptos;

    state = {
        departamentos: [],
        status: false
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

    loadDepartamentos = () => {
        var request = "api/departamentos";

        axios.get(this.urlDepartamentos+request).then(response => {
            this.setState({
                departamentos: response.data,
                status: true
            })
        })
    }

    

  render() {

    return (
      <div>
        <h1>Home Departamentos</h1>

        <table className='table table-hover'>
            <thead>
                <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Localidad</th>
                </tr>
            </thead>
            <tbody>
                {
                this.state.status == true ?
                (this.state.departamentos.map((depto, index) => {
                    return(<tr key={index}>
                        <td>{depto.numero}</td>
                        <td>{depto.nombre}</td>
                        <td>{depto.localidad}</td>
                        <td>
                            <button className='btn btn-info'>Modificar</button>
                        </td>
                        <td>
                            <NavLink className='btn btn-danger' to={"/delete/" + depto.numero}>Eliminar</NavLink>
                        </td>
                        <td>
                            <NavLink className='btn btn-success' to={"/detalledepartamento/"+ depto.numero}>Detalle</NavLink>
                        </td>
                    </tr>)
                })):
                (
                <img className='position-absolute top-50 start-50 translate-middle' src={loading} style={{width: "300px", height: "300px"}} />
                )
                }
            </tbody>
        </table>
      </div>
    )
  }
}
