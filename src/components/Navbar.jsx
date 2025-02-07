import React from 'react'


function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark fixed-top">
  <div className="container-fluid text-white">
    <a className="navbar-brand text-white" href="/">NewsDekho</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/about">Articles</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}



export default Navbar;

