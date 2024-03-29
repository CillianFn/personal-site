import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import App from './App';
 
ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL}><App/></BrowserRouter>, document.getElementById('root'));