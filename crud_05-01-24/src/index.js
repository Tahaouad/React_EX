import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Inscription from './components/Inscription';
import "bootstrap/dist/css/bootstrap.css"
import LogIn from './components/LogIn';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcomming';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/'  element={<LogIn />}/>
        <Route path='/inscription' element={<Inscription />}/>
        <Route path='/Welcomming-page' element={<Welcome />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
