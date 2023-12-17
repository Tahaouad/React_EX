import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css'
import Main from './components/Main';
import Card from './components/Card';
import Footer from './components/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
const products =[
  {nom: 'Fancy Product',prix:80.00},
  {nom: 'Special item',prix:18.00},
  {nom: 'Sale item',prix:25.00},
  {nom: 'Popular item',prix:40.00},

 
]
root.render(
  <React.StrictMode>
    <NavBar />
    <Main />
    <Card product ={products}/>
    
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
