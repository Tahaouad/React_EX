const Navbar=()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-white text-success border-bottom bg-white fixed" style={{position:'sticky',top:'0',zIndex:'99',width:'100%'}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src={require(`../images/logo.png`)} width={150} />
    </a>
    
    <div class="d-flex justify-content-right" id="navbarNavDropdown">
      <ul class="navbar-nav ">
        <li class="mr-4 nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="mr-4 nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="mr-4 nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Navbar ;