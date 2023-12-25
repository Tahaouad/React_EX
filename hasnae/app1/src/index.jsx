import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import React, { useState } from 'react';
import Etudiant from './comnponnents/Etudiant';


const root = ReactDOM.createRoot(document.getElementById('root'));



const list3 = [
  {
    nom : 'Ouad',
    prenom : 'Taha',
    age : 19,
    sexe : 'Masculin',
  },{
    nom : 'Amchich',
    prenom : 'Hasnae',
    age : 19,
    sexe : 'Feminin',
  }
]


root.render(
  <Etudiant liste={list3} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
