import React from 'react';
import { render } from 'react-dom';
import './index.css';
//import App from './App.js';
import Encabezado from './componentes/Encabezado/Encabezado.js';
//import Libros from './componentes/Libros/Libros.js'
import registerServiceWorker from './registerServiceWorker';

 const cuerpo = document.getElementById('root');

render(<Encabezado/>, cuerpo);
//render(<Libros/>, cuerpo);

registerServiceWorker();

