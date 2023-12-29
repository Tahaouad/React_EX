import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import React, { useState } from 'react';
import App from './App';
import R_App from './R_App';
import Tb from './tb';
const listf=[]

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
  <Tb />

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
