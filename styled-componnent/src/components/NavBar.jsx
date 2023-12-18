const NavBar=()=>{
    return(
    <nav className="navbar navbar-expand-lg bg-light  text-dark" style={{position:'sticky',top:0,zIndex:1}}>
        <div className="container-fluid" >
            <a className="navbar-brand" href="#">Start Bootstrap</a>
            <ul className="navbar-nav  me-auto  navbar-nav-scroll" >
        <li className="nav-item ml-2">
          <a className="nav-link active"  href="#">Home</a>
        </li>
        <li className="nav-item ml-3">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle" href="#" >
            Shoping
          </a>
        </li>
        
      </ul>
        </div>
      <button className="btn btn-primary b-light bg-light text-dark" style={{width : '100px',marginRight:'10px',height:'60px'}}>Cart</button>
    </nav>
    )
}
export default NavBar