import React from 'react'
import "./Navbar.css";
import {useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";
import { removeData } from "../redux/userRedux";
import { persistor } from "../redux/store";



const Navbar = () => {

 const navigate = useNavigate();
 const token = localStorage.getItem("authToken");
 

  const logout =async() =>{
    try{
      persistor.pause();
      persistor.flush().then(() => {
        return persistor.purge();
      });
      localStorage.removeItem("authToken");
      navigate("/");

      // window.location.reload();
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#659DBD',fontSize: '1.2rem'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/home" style={{fontSize:"1.4rem",fontWeight:"bold"}}><i class="fa-solid fa-building-columns"></i>__IP__<i class="fa-solid fa-building-columns"></i></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav head-link">
      {!token &&
      <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Login</a>
        </li>
      }
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/home">Home</a>
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
          <a className="nav-link" href="/hostle">Hostel</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        {token &&
        <li className="nav-item">
          <button className="nav-link btn btn-danger" onClick={logout}>Logout</button>
        </li>
        }

      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar;