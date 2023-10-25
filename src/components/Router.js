import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import HomeDepartamentos from './HomeDepartamentos';
import Menu from './Menu';
import CreateDepartamento from './CreateDepartamento';
import DetalleDepartamento from './DetalleDepartamento';
import EliminarDepartamento from './EliminarDepartamento';
import UpdateDepartamento from './UpdateDepartamento';

export default class Router extends Component {
  render() {

    function EliminarDepartamentoElement() {
      
      var { iddepartamento } = useParams();

      return <EliminarDepartamento iddepartamento={iddepartamento} />
    }

    function DetalleDepartamentoElement() {
      
      var { iddepartamento } = useParams();

      return <DetalleDepartamento iddepartamento={iddepartamento} />
    }

    function UpdateDepartamentoElement() {

      var { iddepartamento } = useParams();

      return <UpdateDepartamento iddepartamento={iddepartamento} />
    }

    return (
      <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<HomeDepartamentos />} />
        <Route path="/createdepartamento" element={<CreateDepartamento />} />
        <Route path="/detalledepartamento/:iddepartamento" element={<DetalleDepartamentoElement />}/>
        <Route path="/delete/:iddepartamento" element={<EliminarDepartamentoElement />}/>
        <Route path="/update/:iddepartamento" element={<UpdateDepartamentoElement />}/>
      </Routes>
      </BrowserRouter>
    )
  }
}
