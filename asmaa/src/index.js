import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Description, LI, Main, Nav, ShopButton, UL ,Titre} from './componnent/Nav';
// import Button from './componnent/Button';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(  
  <>
  <Nav>
    <UL>
      <LI>
        Start Bootstrap
      </LI>
    </UL>
    <UL>
      <LI>
        Home
      </LI>
      <LI>
        Shop
      </LI>
      <LI>
        Contact us
      </LI>
      
    </UL>
    <ShopButton>
    <span className="material-symbols-outlined" >shopping_cart</span>
     <span> Cart</span>
      <span style={{backgroundColor:'black',color:'white',borderRadius:'50%',padding:'5px 10px',marginLeft:"6px"}}>0</span>
    </ShopButton>
  </Nav>
  <Main>
    <Titre>
      Shop in style 
    </Titre>
    <Description>
      Description
    </Description>
  </Main>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
