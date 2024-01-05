import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Inscription from './components/Inscriptions';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
