import React from 'react';
import '../Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-white text-success border-bottom bg-white fixed container-fluid " style={{ position: 'sticky', top: '0', zIndex: '99', width: '100%' }}>
      <div className="container-fluid row">
        <div className='col-md-2'>
          <a className="navbar-brand " href="#">
            <img src={require(`../images/logo.png`)} alt="Logo" width={150} />
          </a>
        </div>
        
        
        <div className="d-flex col-md-8" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="mr-4 nav-item">
              <a className="nav-link fw-bolder text-success mx-2 active" aria-current="page" href="#">
                Accueil
              </a>
            </li>
            <li className="mr-4 nav-item with-submenu">
              <a className="nav-link fw-bolder text-success mx-2" href="#">
                Tenues de Match
              </a>
              <ul className="submenu list-unstyled p-auto ">
                <li><a href="#">Domicile</a></li>
                <li><a href="#">Exterieur</a></li>
                <li><a href="#">Thid</a></li>
              </ul>
            </li>
            <li className="mr-4 nav-item with-submenu">
              <a className="nav-link fw-bolder text-success mx-2" href="#">
                Entrainement
              </a>
              <ul className="submenu list-unstyled" >
                <li><a href="#">Training</a></li>
                <li><a href="#">Pre-Match</a></li>
                
              </ul>
            </li>
            <li className="mr-4 nav-item with-submenu">
              <a className="nav-link fw-bolder text-success mx-2" href="#">
                Mode
              </a>
              <ul className="submenu list-unstyled p-auto ">
                <li><a href="#">Polo</a></li>
                <li><a href="#">T-shirt</a></li>
                <li><a href="#">Hoodies</a></li>
                <li><a href="#">Doudoune</a></li>
              </ul>
            </li>
            <li className="mr-4 nav-item with-submenu">
              <a className="nav-link fw-bolder text-success mx-2" href="#">
              Cadeaux et Accessoires
              </a>
              <ul className="submenu list-unstyled p-auto ">
                <li><a href="#">Lunettes</a></li>
                <li><a href="#">Csquettes</a></li>
                <li><a href="#">Bobs</a></li>
                <li><a href="#">Mode Cuir</a></li>
              </ul>
            </li>
            <li className="mr-4 nav-item with-submenu">
              <a className="nav-link fw-bolder text-success mx-2" href="#">
                Homme              
              </a>
              
            </li>
            <li className="mr-4 nav-item with-submenu">
              <a className="nav-link fw-bolder text-success mx-2" href="#">
                Femme              
              </a>
            
            </li>
          </ul>
        </div>
        <div className='col-md-2 ml-5'>
          <i class="bi bi-person-circle fs-4 mx-1   text-success  rounded-circle  " ></i>
          <i class="bi bi-search fs-4 mx-1 fw-bold text-success  rounded-circle  p-2"></i>
          <i class="bi bi-cart fs-4 mx-1 fw-bold text-success  rounded-circle p-2 " ></i>
        </div>
         
          
      </div>
    </nav>
  );
};

export default Navbar;
