import React from 'react'
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#659DBD',fontSize: '1.2rem'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={{fontSize:"1.4rem",fontWeight:"bold"}}><i class="fa-solid fa-building-columns"></i>__IP__<i class="fa-solid fa-building-columns"></i></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav head-link">
      <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/result">Result</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/">Dues</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="/Payment">Payment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/holyday">Holidays</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/hostle">Hostle</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar;