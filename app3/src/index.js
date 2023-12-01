import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Student from './Student';
import SignIn from './components/Signin';
import { Container } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
const listes =[{nom : 'Ouad',prenom : 'Taha',diplomes:['Diplome1','Diplome2','Diplome3']},
               {nom : 'Oussama',prenom : 'Affasi',diplomes:['Diplome1','Diplome2','Diplome3']},
               {nom : 'Ahmad',prenom : 'Douyry',diplomes:['Diplome1','Diplome2','Diplome3']},
               {nom : 'Youssef',prenom : 'Douyry',diplomes:['Diplome1','Diplome2','Diplome3']}]
function App(){
    return(
        listes.map(l=><Student student={l}/> )
    )

}

const NavBar = () => {
  return (
    <nav id='nav' style={{ backgroundColor: 'black', padding: '10px', textAlign: 'center', position: 'sticky', top: 0 ,height :"30px"}}>
      <a href="#" style={{ position:'absolute',left:"20px" ,color: 'white', margin: '0 10px', textDecoration: 'none',fontWeight:'bold'}}>OrdiShop</a>
        <div style={{textAlign:"right"}}>
        <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Accueil</a>
        <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Produits</a>
        <a href="#" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Contact</a>
        </div>
    </nav>
  );
}
root.render(
  <React.StrictMode>
         

    <SignIn/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
