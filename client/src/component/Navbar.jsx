import React from 'react'
import "./Navbar.css";
import {useNavigate,NavLink} from 'react-router-dom';
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
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#7851A9',fontSize: '1.4rem'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/home" style={{fontSize:"1.4rem",fontWeight:"bold",color:"white"}}><i class="fa-solid fa-building-columns"></i>__IP__<i class="fa-solid fa-building-columns"></i></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav head-link">
      {!token &&
      <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Login</NavLink>
        </li> 
      }
      {
        token && 
      
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
        </li>
      }
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/result">Result</NavLink>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/">Dues</a>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/Payment">Payment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/holyday">Holidays</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/hostle">Hostel</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to="/transport">Transport</NavLink>
        </li>
        {token && 
        <li className="nav-item">
          <NavLink className="nav-link" to="/community">Community</NavLink>
        </li>
        }

        {token && 
        <li className="nav-item">
          <NavLink className="nav-link" to="/chat">Message</NavLink>
        </li>
        }
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
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