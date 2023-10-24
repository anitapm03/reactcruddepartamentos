import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import HomeDepartamentos from './HomeDepartamentos';
import Menu from './Menu';
import CreateDepartamento from './CreateDepartamento';
import DetalleDepartamento from './DetalleDepartamento';

export default class Router extends Component {
  render() {
    function DetalleDepartamentoElement () {
        var { iddepartamento } = useParams();

        return <DetalleDepartamento iddepartamento={iddepartamento} />
    }
    return (
      <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<HomeDepartamentos />} />
        <Route path="/createdepartamento" element={<CreateDepartamento />} />
        <Route path="/detalledepartamento/:iddepartamento" element={<DetalleDepartamentoElement />}/>
      </Routes>
      </BrowserRouter>
    )
  }
}
