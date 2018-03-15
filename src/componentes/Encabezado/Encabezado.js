import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import logo from './../../img/logo.png';
import './Encabezado.css';

class Encabezado extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <img src={logo} className="logo" alt="geekyBooks"/>
          </div>
        </div>
      </nav>
    );
  }
}

export default Encabezado;