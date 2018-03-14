import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const contenido = document.getElementById('contenido');

ReactDOM.render(<h1>Hola mundo</h1>,contenido);
